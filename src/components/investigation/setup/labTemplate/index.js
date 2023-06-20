import React from "react";

import { Button,} from "antd";

import { useNavigate } from "react-router";
import Common from "../../../common";
import SearchLabTemplate from "./SearchLabTemplate";
import { PlusCircleFilled } from "@ant-design/icons";

const columns = [
  {
    title: "SN",

    dataIndex: "sn",
  },

  {
    title: "Test Name",
    dataIndex: "testname",
  },

  {
    title: "CPT Code",
    dataIndex: "code",
  },

];

const Index = () => {
  const [filterData, setFilterData] = React.useState([]);

  const navigate = useNavigate();

  const handleRowClick = (record) => {
    console.log("Row clicked:", record); 

    navigate(`/investigation/lab-setup/parameterrangesetup/${record.sn}`);
  };

  const handleClick = () => {
    navigate(`/investigation/lab-setup/parameterrangesetup/4`);
  }

  const rowProps = (record) => ({
    onClick: () => handleRowClick(record),
  });

  const OnFilterData = React.useCallback((item) => {
    setFilterData(item);
  }, []);

  React.useEffect(() => {
    setFilterData(data);
  }, []); 

  return (
    <div className="grid">
      <Common.Header
        headmodule="Investigation"
        currentmodule="Lab Template"
        mainmodule="Lab Setup"
        name="Go Back"
        to="/"
        size={"large"}
      />



      <div className="flex items-center justify-between bg-[#fff] px-4 pt-2 mt-2 pb-2 rounded-tl-[10px] rounded-tr-[10px]"> 
        <div className="flex items-center gap-6">
          <div>
            <SearchLabTemplate
              data={data}
              onFilterData={OnFilterData}
            />
          </div>
      
        </div>
        <div className="item-center flex gap-4">
        <Button
            className="btn text-white mb-1 ml-auto flex items-center justify-center bg-main"
            onClick={handleClick}
          >
            Add <PlusCircleFilled size={20} />
          </Button>
        </div>
      </div>
      <div className="patientlist mb-5"> 
      <Common.Tables
          spinning={false}
          columns={columns}
          data={filterData}
          pagination={false}
          size="small"
          className="cursor-pointer"
          onRow={rowProps}
        />
      </div>

    </div>

    
  );
};

export default Index;

const data = [
  {
    sn: 1,

    testname: "CBC",

    code: "005009",

    blood: "Blood A",
  },

  {
    sn: 2,

    testname: "RFT",

    code: "322777",

    blood: "Blood B",
  },
  {
    sn:3,
    testname:'Blood  C/S',
    code: "445454",
  }
];
