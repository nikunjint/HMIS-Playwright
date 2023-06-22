// import { Button } from "@material-ui/core";
import { Tabs } from "antd";
import React from "react";
import Revenue from "./revenue/Revenue.js";
import Common from "../common";


function Index() {

  const [value, setValue] = React.useState('1');

  const onChange = (key) => {
    setValue(key);
  };
  const items = [
    {
      key: "1",
      label: `Revenue`,
      children: <Revenue />
    },
    {
      key: "2",
      label: `Performance`,
      children: `Content of Tab Pane 2`,
    },

    {
      key: "3",
      label: `Human Resource`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "4",
      label: `Demography`,
      children: `Content of Tab Pane 4`,
    },

  ];
 
  return (
    <div >
    <div> 
      <Common.Header
        name="Go Back"
        mainmodule="Investigation"
        currentmodule="Dashboard"
        headmodule=""
      />
    </div>
    <div className="w-full investigation_dashboard">
      <Tabs defaultActiveKey={'1'} items={items} onChange={onChange}  activeKey={value}/>
    </div>
  </div>
  );
}

export default Index; 
