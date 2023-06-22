import React from "react";
import { Statistic } from "antd";
import chartup from "../../../../src/assets/chartup.png";
import chartdown from "../../../../src/assets/chartdown.png";
import CountUp from "react-countup";
const items = [
  {
    key: "1",
    label: `Total Sales`,
    value: `2839`,
    image: chartup,
  },
  {
    key: "2",
    label: `Total Refunds`,
    value: `857`,
    image: chartdown,
  },
  {
    key: "3",
    label: `Discounted Amount`,
    value: `5879`,
    image: chartup,
  },
  {
    key: "4",
    label: `TPA's`,
    value: `1239`,
    image: chartup,
  },
  {
    key: "5",
    label: `Deposits`,
    value: `2839`,
    image: chartdown,
  },
];

function RevenueDetail() {
  const formatter = (value) => <CountUp end={value} separator="," />;
  return (
    <div className="mt-5 grid grid-cols-5 gap-x-3">
      {items.map((item) => (
        <div
          key={item.key}
          className="bg-white shadowdrop relative rounded-[10px] p-3 px-5"
        >
          <div className="font-Poppins text-sm text-[#6B6B6B] xl:text-tiny">
            {item.label}
          </div>
          <div className="flex items-center justify-between">
            <div className="font-Poppins text-[30px] font-bold xl:text-[40px]">
              <Statistic
                formatter={formatter}
                value={item.value}
                precision={2}
                valueStyle={{ color: "#000" }}
                suffix={
                  <img
                    src={item.image}
                    className="absolute right-[10px] top-[10%] w-[40px] xl:right-[100px] xl:top-[50%]"
                    style={{ width: "40px" }}
                    alt="Loading.."
                  />
                }
              />
            </div>

            <div>
              <div
                className={`font-Poppins text-sm font-normal ${
                  item.image === chartup ? "text-[#2CB257]" : "text-red"
                }`}
              >
                16.05%
              </div>{" "}
              <div className="mt-[2px] font-Poppins text-xs font-normal text-[#A8A8A8]">
                vs last 24 hours
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RevenueDetail;
