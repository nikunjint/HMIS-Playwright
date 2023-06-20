import {
  CloseCircleOutlined,
  MinusCircleOutlined,
  PlusCircleFilled,
  PlusCircleOutlined,
} from "@ant-design/icons";
import Common from "../../../../common";
import setting from "../../../../../assets/setting.png";
import { Input } from "antd";
const { TextArea } = Input;
const CalculationFormula = () => {
  return (
    <div
      className={`calculationformula fixedwidth border-5 mx-auto mt-3 w-[100%] rounded-[10px] border-[#fff] bg-shadow px-4 pb-5 pt-6 shadow-sm relative`}
    >
      <div className="grid gap-5 grid-cols-[60%,36%]">
        <div>
          <div>
            <label className="text-[#292561] font-medium">Lab Parameters & Values</label>
          </div>

          <div className="mt-4 flex items-center gap-2 sm:w-[60%] lg:w-[40%]"> 
            <Common.Selects
              array={[
                { id: 1, name: "XYZ" },
                { id: 2, name: "QWE" },
                { id: 3, name: "Xdd" },
                { id: 4, name: "XSS" },
                { id: 5, name: "MMM" },
                { id: 6, name: "SDA" },
              ]}
              label="Parameters"
              hidelabel
              value={"id"}
              description="name"
              isfield="true"
              name="employee_id"
              className="w-full"
            />

            <PlusCircleFilled
              style={{
                color: "#032D7B",
                fontSize: "20px",
                marginBottom: "15px",
              }}
            />
          </div>

          <div className="flex items-center gap-2 sm:w-[60%] lg:w-[40%]">
            <Common.Inputs
              name="value"
              hidelabel
              placeholder="Select vales"
              className="w-full"
            />
            <PlusCircleFilled
              style={{
                color: "#032D7B",
                fontSize: "20px",
                marginBottom: "15px",
              }}
            />
          </div>

          <div className="mt-4 rounded-md border border-[#A8A8A8] p-4">
            <label className="text-[#292561] font-medium"> Operators & Parenthesis</label>

            <div className="mt-3 grid grid-cols-3 gap-5">
              <div className="bg-white flex cursor-pointer items-center justify-center gap-1 rounded-full px-2 text-center shadow-md">
                Plus{" "}
                <PlusCircleOutlined
                  style={{ fontSize: "10px", marginTop: "2px" }}
                />
              </div>
              <div className="bg-white flex cursor-pointer items-center justify-center gap-1 rounded-full px-2 text-center shadow-md">
                <div>Minus </div>{" "}
                <MinusCircleOutlined
                  style={{ fontSize: "10px", marginTop: "2px" }}
                />
              </div>
              <div className="bg-white flex cursor-pointer items-center justify-center gap-1 rounded-full px-2 text-center shadow-md">
                Multiply{" "}
                <CloseCircleOutlined
                  style={{ fontSize: "10px", marginTop: "2px" }}
                />
              </div>
              <div className="bg-white flex cursor-pointer items-center justify-center gap-1 rounded-full px-2 text-center shadow-md">
                Divide /
              </div>
              <div className="bg-white flex cursor-pointer items-center justify-center gap-1 rounded-full px-2 text-center shadow-md">
                Open Paranthesis (
              </div>
              <div className="bg-white flex cursor-pointer items-center justify-center gap-1 rounded-full px-2 text-center shadow-md">
                Close Paranthesis )
              </div>
            </div>
          </div>
        </div>
        <div>
          <label className="mb-2 text-[#292561] font-medium">Formula Variables & Values</label>
          <TextArea
            rows={11} 
            placeholder="Description"
            maxLength={250}
            className="mt-3 h-[87%]"
          />
        </div>
        <div className='w-full flex items-end justify-end'>
            <img
              src={setting} className="absolute right-5 top-5 w-[20px]"
        
              alt="Setting"
              
            />
            </div>
      </div>
    </div>
  );
};
export default CalculationFormula;
