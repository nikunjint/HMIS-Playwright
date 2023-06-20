import { Form, Switch } from "antd";
import React from "react";
import Common from "../../../common";
import PatientInfoEditSave from "./PatientInfoEditSave";
import { HiCalculator, HiPrinter } from "react-icons/hi";

const PatientInfo = () => {
  const formItemLayout = {
    wrapperCol: { span: 32 },
  };
  return (

    
    <div>


      <h5 className="text-md mb-0 text-left text-md font-medium text-[#292561]">
        Patient Information
      </h5>
      <div className="mt-3">
        <PatientInfoEditSave />
      </div>
      <Common.Cards>
        <Form {...formItemLayout}>
          <div className="w-full grid-flow-row items-center justify-between gap-10 md:flex">
             <div className="w-full text-left">
             <Common.Inputs
              name="name"
              label="Lab No."
            />
              </div> 
           
              
          <div className="w-full">

            <Common.Inputs
              name="name"
              label="Collection No. "
            />
            </div>
          </div>
          <div className="w-full grid-flow-row items-center justify-between gap-10 md:flex">
            <div className="flex items-center gap-3 w-full">
              <div>
                <div className="mb-5 flex items-center">
                  <span className="mr-2">Preview</span>

                  <Switch style={{ backgroundColor: "#f0f0f0" }} />
                </div>
              </div>
              <div className="mb-5 flex items-center">
                <Switch style={{ backgroundColor: "#f0f0f0" }} defaultChecked/>

                <span className="ml-2">Stat</span>
              </div>
            </div>
            <div className="flex gap-5 justify-start items-center justify-items-start w-full">
              <div>
                <Common.Buttons icon={<HiPrinter/>}>Print Sticker</Common.Buttons>
              </div>
              <div>
                <Common.Buttons icon={<HiPrinter/>}>Re-Print</Common.Buttons>
              </div>
              <div>
                <Common.Buttons icon={<HiCalculator/>}>Worklist</Common.Buttons>
              </div>
            </div>
          </div>
        </Form>
      </Common.Cards>
    </div>
  );
};
export default PatientInfo;
