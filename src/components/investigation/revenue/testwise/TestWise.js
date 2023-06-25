import React from "react";
import Common from "../../../common";

const columns = [
  {
    title: "Test ID",

    dataIndex: "sn",
  },

  {
    title: "Test Name",
    dataIndex: "testname",
  },

  {
    title: "Dummy Head",
    dataIndex: "code",
  },

  {
    title: "Purchase",
    dataIndex: "code",
  },
];

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
    sn: 3,
    testname: "Blood  C/S",
    code: "445454",
  },
  {
    sn: 4,
    testname: "Blood  C/S",
    code: "445454",
  },
  {
    sn: 5,
    testname: "Blood  C/S",
    code: "445454",
  },
  {
    sn: 6,
    testname: "Blood  C/S",
    code: "445454",
  },
  {
    sn: 7,
    testname: "Blood  C/S",
    code: "445454",
  },
  {
    sn: 8,
    testname: "Blood  C/S",
    code: "445454",
  },
  {
    sn: 9,
    testname: "Blood  C/S",
    code: "445454",
  },
  {
    sn: 10,
    testname: "Blood  C/S",
    code: "445454",
  },
];

function TestWise() {
  const [filterData, setFilterData] = React.useState([]);

  React.useEffect(() => {
    setFilterData(data);
  }, []);

  return (
    <Common.Cards>
      <div className="flex items-center justify-between bg-[#fff]">
        <div className="flex items-center gap-6 pl-2">
          <div class=" grid grid-flow-row-dense grid-rows-1 py-2 pt-0">
            <div class="flex items-center justify-between">
              <div
                class="flex items-center gap-1
             font-Poppins font-medium"
              >
                Test Wise
              </div>
              <div></div>
            </div>
            <div class="flex justify-start font-Poppins text-sm font-medium text-[#6B6B6B] ">
              Top performing test lists
            </div>
          </div>
        </div>
      </div>
      <div className="patientlist">
        <Common.Tables
          spinning={false}
          columns={columns}
          data={filterData}
          pagination={false}
          size="small"
          className="cursor-pointer"
        />
      </div>
    </Common.Cards>
  );
}

export default TestWise;
