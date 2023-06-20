import { Button, Form, Switch } from "antd";
import React, { useState } from "react";
import Common from "../../../../common";
import ParameterSetupModal from "./ParameterSetupModal";
import SearchParamaterSetup from "./SearchParamaterSetup";
import { PlusCircleFilled } from "@ant-design/icons";
import { useParams } from "react-router-dom";


function ParameterIndex() {
  const slug=useParams()
  const param=slug?.slug

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [filterData, setFilterData] = React.useState([]);

  const [modaldata, setModalData] = React.useState();




  const handleRowClick = (record) => {
    document.body.classList.add("modal-open");

    setModalData(record);
    setIsModalOpen(!isModalOpen);
  };

  const OnFilterData = React.useCallback((item) => {
    setFilterData(item);
  }, []);

  React.useEffect(() => {
    setFilterData(data);
  }, []);

  const columns = [
    {
      title: "SN",

      dataIndex: "sn",

      key: "sn",
    },

    {
      title: "Test",

      dataIndex: "testname",

      key: "testname",
    },

    {
      title: "Method",

      dataIndex: "method",

      key: "method",
    },

    {
      title: "Unit",

      dataIndex: "unit",

      key: "unit",
    },

    {
      title: "Analyzer",

      dataIndex: "analyzer",

      key: "analyzer",
    },

    {
      title: "Analyt Code",

      dataIndex: "code",

      key: "code",
    },

    {
      title: "Heading",

      dataIndex: "heading",

      key: "heading",

      align: "left",

      render: (text, record) => (
        <div className="flex ">
          <Form.Item>
            <Switch
              style={{ backgroundColor: "#f0f0f0" }}
              checkedChildren={<div style={{ backgroundColor: "#000" }}></div>}
            />
          </Form.Item>
        </div>
      ),
    },

    {
      title: "Active",

      dataIndex: "active",

      key: "active",

      render: (text, record) => (
        <div className="flex ">
          <Form.Item>
            <Switch
              style={{ backgroundColor: "#f0f0f0" }}
              checkedChildren={<div style={{ backgroundColor: "#000" }}></div>}
              defaultChecked
            />
          </Form.Item>
        </div>
      ),
    },
  ];

  const rowProps = (record) => ({
    onClick: (event) => {
      const target = event.target;
      const isSwitch = target.tagName === 'SPAN' || target.className.includes('ant-switch');
      if (!isSwitch) {
        handleRowClick(record);
      }
    },
    // onClick: () => handleRowClick(record),
  });

  // React.useEffect(() => {
  //   setFilterData(dataSource);
  // }, [dataSource]);
  const handleAdd = () => {
    document.body.classList.add('modal-open');
    setModalData([]);
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>


      <div className="flex items-center justify-between bg-[#fff] px-4 pt-4 mt-2 pb-2"> 
        <div className="flex items-center gap-6">
          <div>
            <SearchParamaterSetup
              data={data} 
              onFilterData={OnFilterData}
            />
          </div>
       
        </div>
        <div className="item-center flex gap-4">
        <Button
            className="btn text-white mb-1 ml-auto flex items-center justify-center bg-main"
            onClick={handleAdd}
          >
            Add <PlusCircleFilled size={20} />
          </Button>
        </div>
      </div>
      <div className="patientlist mb-5"> 
      <Common.Tables
          spinning={false}
          data={ (param.toString() === '4'? '': filterData)}
          columns={columns}
          className="  cursor-pointer rounded-none pb-5 pt-2"
          pagination={false}
          onRow={rowProps}
          size="small"
        />
      </div>

      {isModalOpen && (
        <ParameterSetupModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          modaldata={modaldata}
        />
      )}
    </>
  );
}

export default ParameterIndex;

const data = [
  {
    key: 1,
    testname: "WBC",
    method: "Blood Counter Cell",
    unit: "/cu mm",
    analyzer: "DXH-500",
    code: "WBC",
    sn: 1,
  },

  {
    key: 2,
    testname: "Neurophils",
    method: "Blood Counter Cell",
    unit: "%",
    analyzer: "NEU%",
    code: "Neuro",
    sn: 2,
  },

  {
    key: 3,
    testname: "MonoCytes",
    method: "Blood Counter Cell",
    unit: "%",
    analyzer: "MON%",
    code: "Mon",
    sn: 3,
  },

  {
    key: 4,
    testname: "Hb",
    method: "Blood Counter Cell",
    unit: "%",
    analyzer: "HGB",
    code: "Hgb",
    sn: 4,
  },

  {
    key: 5,
    testname: "RBC",
    method: "Blood Counter Cell",
    unit: "%",
    analyzer: "RBC",
    code: "Rbc",
    sn: 5,
  },

  {
    key: 6,
    testname: "ESR",
    method: "Phoometric",
    unit: "mm in 1st hour",
    analyzer: "ELITech",
    code: "ESR",
    sn: 6,
  },
];
