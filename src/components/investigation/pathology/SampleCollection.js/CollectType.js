import { Divider, Popconfirm } from "antd";
import React from "react";
import Common from "../../../common";
import TextArea from "antd/es/input/TextArea";
import UndoCollectSample from "./UndoCollectSample";

const CollectType = () => {
  const [selectedRows, setSelectedRows] = React.useState([]);

  const onSelectChange = (selectedRowKeys, selectedRows) => {
    setSelectedRows(selectedRows);
  };

  const rowSelection = {
    onChange: onSelectChange,
  };

  const handleButtonClick = () => {
    const names = selectedRows.map((row) => row);
    console.log("Selected Names:", names);
  };

  const columnCollect = [
    { title: "All", dataIndex: "name", key: "name" },
    {
      render: (record, data) => {
        return <div>Test Name</div>;
      },
      title: "Test Name", // set background color for View column
    },

    {
      render: (record) => {
        return <div>Color</div>;
      },
      title: "Color",
    },
    {
      render: (record) => {
        return <div>Instruction</div>;
      },
      title: "Instruction",
    },

    {
      title: () => (
        <div className="flex items-center gap-3">
          <div>Remarks</div>
          <div className="ml-auto">
            <Popconfirm
              title="Collect"
              description="Are you want to sure collect?"
              onConfirm={handleButtonClick}
            >
              <Common.Buttons className="border-white-500 h-fit bg-[#00BD9C] text-[white] hover:text-[white]">
                Collect
              </Common.Buttons>
            </Popconfirm>
          </div>
        </div>
      ),
      render: (record) => {
        return (
          <div>
            <TextArea rows={2} placeholder="Remarks" maxLength={6} />
          </div>
        );
      },
      align: "center",
    },
  ];

  const data = [
    {
      key: "1",
      name: "User Management",
    },
    {
      key: "2",
      name: "Account",
    },
  ];
  return (
    <div className="grid-flow-row  justify-between gap-4 pb-4 lg:flex">
      <div>
        <div>
          <Divider orientation="left">
            <div className="font-Poppins text-sm font-normal text-[#292561]">
              Sample Collection
            </div>
          </Divider>
        </div>
        <div className="w-full">
          <Common.Tables
            spinning={false}
            data={data}
            columns={columnCollect}
            rowSelection={rowSelection}
            rowKey="key"
            className="my-table"
          />
        </div>
      </div>

      <div className="w-full">
        <div>
          <div>
            <Divider orientation="left">
              <div className="font-Poppins text-sm font-normal text-[#292561]">
                Collected Samples
              </div>
            </Divider>
          </div>
          <div>
            <UndoCollectSample data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CollectType;
