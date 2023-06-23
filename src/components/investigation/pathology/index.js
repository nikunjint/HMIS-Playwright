import React from "react";
import { Tabs } from "antd";
import PatientList from "./PatientList";
import Common from "../../common";
import SampleCollections from "./SampleCollection.js";

const Index = () => {
  const [value, setValue] = React.useState('1');

  const onChange = (key) => {
    setValue(key);
  };
  const items = [
    {
      key: "1",
      label: `Patient List`,
      children: <PatientList />,
    },
    {
      key: "2",
      label: `Sample Collection`,
      children: <SampleCollections/>,
    },

    {
      key: "3",
      label: `Collected Sample`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "4",
      label: `Lab Receive`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "5",
      label: `Department Receive`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "6",
      label: `Test Result`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "7",
      label: `Verification`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "8",
      label: `Authorization`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "9",
      label: `Dispatch`,
      children: `Content of Tab Pane 3`,
    },
  ];

  return (
    <div >
      <div>
        <Common.Header  
          name="Go Back"
          mainmodule="Pathology"
          currentmodule={`${items[value - 1]?.label}`}
          headmodule="Investigation"
        />
      </div>
      <div className="w-full">
        <Tabs defaultActiveKey={'1'} items={items} onChange={onChange}  activeKey={value}/>
      </div>
    </div>
  );
};
export default Index;
