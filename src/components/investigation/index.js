// import { Button } from "@material-ui/core";
import { Button, Tabs } from "antd";
import React, { useState } from "react";
import Revenue from "./revenue/Revenue.js";
import Common from "../common";
import { DatePicker } from "antd";
import dayjs from "dayjs";

function Index() {
const { RangePicker } = DatePicker;

  const [value, setValue] = React.useState("1");
  const [dateRange, setDateRange] = useState([]);

  const items = [
    {
      key: "1",
      label: `Revenue`,
      children: <Revenue />,
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

  const ranges = {
    "This Week": [dayjs().startOf("week"), dayjs().endOf("week")],

    "This Month": [dayjs().startOf("month"), dayjs().endOf("month")],

    "Last Month": [
      dayjs().subtract(1, "month").startOf("month"),
      dayjs().subtract(1, "month").endOf("month"),
    ],

    "Last 30 Days": [dayjs().subtract(30, "days"), dayjs()],

    "Last 180 Days": [dayjs().subtract(180, "days"), dayjs()],

    "Last 365 Days": [dayjs().subtract(365, "days"), dayjs()],

    "All Time": [dayjs().startOf("year"), dayjs()],

    "30 Days Up to Today": [dayjs().subtract(30, "days"), dayjs()],

    "30 Days Up to Yesterday": [
      dayjs().subtract(31, "days"),
      dayjs().subtract(1, "days"),
    ],
  };

  const handleDateChange = (dates) => {
    
    setDateRange(dates);
  };
  const onChange = (key) => {
    setValue(key);
  };
  
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <Common.Header
            name="Go Back"
            mainmodule="Investigation"
            currentmodule="Dashboard"
            headmodule=""
          />
        </div>
        <div>
          <RangePicker 
            ranges={ranges}
            onChange={handleDateChange}
            value={dateRange}
            renderExtraFooter={()=> <div className="flex items-end gap-2 m-2 justify-end">
              <Button className='text-main '>Cancel</Button>
              <Button className='text-main '>
                Apply
              </Button>
            </div>}
          />
        </div>
      </div>

      <div className="investigation_dashboard w-full">
        <Tabs
          defaultActiveKey={"1"}
          items={items}
          onChange={onChange}
          activeKey={value}
        />
      </div>
    </div>
  );
}

export default Index;
