import React from "react";
import { Button, Form, Input, Switch } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import Common from "../../../../common";
import TextArea from "antd/es/input/TextArea";

const FrequentRequest = () => {
  const inputRefs = React.useRef([]);
  const [data, setData] = React.useState([
    {
      id: 1,
      abbreviation: "",
      name: "nikesh",
    },
    {
      id: 2,
      abbreviation: "",
      name: "nikesh",
    },
  ]);

  const columns = [
    {
      title: "Frequent Result",
      data: "Frequent Result",
      key: "Frequent Result",
      render: (text, record, index) => (
        <div>
          <TextArea
            initialValue={text.cl}
            value={record.frequentresult}
            onChange={(e) => handleFieldChange(e.target.value, record.id, "cl")}
            rows={2}
            maxLength={4}
          />
        </div>
      ),
    },
    {
      title: "Abbreviation",
      width: 300,
      data: "Abbreviation",
      key: "Abbreviation",
      render: (text, record, index) => (
        <div>
          <Input
            ref={(el) => (inputRefs.current[index] = el)}
            placeholder=""
            onChange={(e) => handleFieldChange(e.target.value, record.id, "hl")}
          />
        </div>
      ),
    },
    {
      title: "Active",
      data: "Active",
      key: "Active",
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
      title: "Default",
      data: "Default",
      key: "Default",
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

  const handleAddRow = () => {
    const newRow = {
      id: data.length + 1,
      name: "",
      abbreviation: "",
    };
    setData((prevData) => [newRow, ...prevData]);
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  };

  const handleFieldChange = (value, recordId, fieldName) => {
    const newData = data.map((item) => {
      if (item.id.toString() === recordId.toString()) {
        return { ...item, [fieldName]: value };
      } else {
        return item;
      }
    });
    setData(newData);
  };

  return (
    <div className='bg-white  pb-2'>
    <div>
        <Button className="btn text-white mb-1 ml-auto flex items-center justify-center bg-main" onClick={handleAddRow}>
            Add <PlusCircleFilled size={20} />
        </Button>
    </div>
      <div>
        <Common.Tables
          spinning={false}
          columns={columns}
          data={data}
          bordered
          pagination={false}
          size="small"
        />
      </div>
    </div>
  );
};
export default FrequentRequest;
