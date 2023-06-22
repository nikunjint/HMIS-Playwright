import React from "react";
import Common from "../../../common";
import { Popconfirm } from "antd";

const UndoCollectSample = ({ data }) => {
  const [selectedRows, setSelectedRows] = React.useState([]);

  const onSelectChange = (selectedRowKeys, selectedRows) => {
    console.log("selectedRowKeys", selectedRowKeys);
    setSelectedRows(selectedRows);
  };

  const rowSelection = {
    onChange: onSelectChange,
  };

  const handleButtonClick = () => {
    const names = selectedRows.map((row) => row);
    console.log("Selected Names:", names);
  };

  const columns = [
    { title: "All", dataIndex: "name", key: "name" },
    {
      title: "Collect Sample",
    },

    {
      title: () => (
        <div className="ml-auto">
          <Popconfirm
            title="Undo"
            description="Are you want to sure undo collected sample?"
            onConfirm={handleButtonClick}
          >
            <Common.Buttons
              
              onClick={handleButtonClick}
              className="text-[white] border-white-500 h-fit bg-[#F5204E]"
            >Undo</Common.Buttons>
          </Popconfirm>
        </div>
      ),
    },
  ];
  return (
    <Common.Cards>
      <Common.Tables
        spinning={false}
        data={data}
        columns={columns}
        rowSelection={rowSelection}
        rowKey="key"
        className="my-table"
      />
    </Common.Cards>
  );
};
export default UndoCollectSample;
