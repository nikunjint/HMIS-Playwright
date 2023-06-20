import React from "react";
import { Divider, Form, Modal, Switch } from "antd";
import Common from "../../../../common";
import AgeWiseSetup from "./AgeWiseSetup";
import FrequentRequest from "./FrequentRequest";
import CalculationFormula from "./CalculationFormula";
import { Input } from "antd";
const { TextArea } = Input;
function ParameterSetupModal(props) {
  const handleOk = () => {
    props.setIsModalOpen(false);
  };

  const handleCancel = () => {
    document.body.classList.remove("modal-open");
    props.setIsModalOpen(false);
  };

  return (
    <Modal
      centered={false}
      maskClosable={false}
      wrapClassName="custom-modal"
      open={props.isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Save"
      okButtonProps={{
        className: "bg-main",
      }}
      width="70vw"
      style={{
        top: "20px",
      }}
    >
      <Form>
        <div className="mb-5 mt-0">
          <div
            className={`fixedwidth setuptitle text- relative mx-auto mt-0 w-[100%] pt-0 text-left font-Poppins font-semibold text-[#292561]`}
          >
            Parameter Setup
          </div>
          <div
            className={`calculationformula fixedwidth border-5 mx-auto mt-3 w-[100%] rounded-[10px] border-[#fff] bg-shadow px-4 pb-6 pt-5 shadow-sm`}
          >
            <div className="w-1/4">
              <Common.Selects
                array={[
                  { id: 1, name: "MonoCytes" },
                  { id: 2, name: "QWE" },
                  { id: 3, name: "Xdd" },
                  { id: 4, name: "XSS" },
                  { id: 5, name: "MMM" },
                  { id: 6, name: "SDA" },
                ]}
                initialValue={props.modaldata?.testname}
                label="Patient test"
                hidelabel
                value={"id"}
                description="name"
                isfield="true"
                name="employee_id"
              />
            </div>

            <div className="lg:item-center grid justify-around gap-4 lg:flex  ">
              <div className="w-full">
                <Common.Selects
                  array={[
                    { id: 1, name: "XYZ" },
                    { id: 2, name: "QWE" },
                    { id: 3, name: "Xdd" },
                    { id: 4, name: "XSS" },
                    { id: 5, name: "MMM" },
                    { id: 6, name: "SDA" },
                  ]}
                  initialValue={props.modaldata?.testname}
                  label="Test"
                  hidelabel
                  value={"id"}
                  description="name"
                  isfield="true"
                  name="text"
                />
              </div>
              <div className="w-full">
                <Common.Selects
                  array={[
                    { id: 1, name: "Nikesh" },
                    { id: 2, name: "Bhandari" },
                    { id: 3, name: "Sangoj" },
                    { id: 4, name: "Kaji" },
                    { id: 5, name: "Piya" },
                    { id: 6, name: "Hello" },
                  ]}
                  label="Method"
                  hidelabel
                  value={"id"}
                  description="name"
                  isfield="true"
                  name="testnameid"
                  initialValue={props.modaldata?.method}
                />
              </div>

              <div className="w-full">
                <Common.Selects
                  array={[
                    { id: 1, name: "Nikesh" },
                    { id: 2, name: "Bhandari" },
                    { id: 3, name: "Sangoj" },
                    { id: 4, name: "Kaji" },
                    { id: 5, name: "Piya" },
                    { id: 6, name: "Hello" },
                  ]}
                  label="Unit"
                  hidelabel
                  value={"id"}
                  description="name"
                  isfield="true"
                  initialValue={props.modaldata?.unit}
                  name="unit"
                />
              </div>

              <div className="w-full">
                <Common.Selects
                  array={[
                    { id: 1, name: "Nikesh" },
                    { id: 2, name: "Bhandari" },
                    { id: 3, name: "Sangoj" },
                    { id: 4, name: "Kaji" },
                    { id: 5, name: "Piya" },
                    { id: 6, name: "Hello" },
                  ]}
                  initialValue={props.modaldata?.analyzer}
                  label="Analyzer"
                  hidelabel
                  value={"id"}
                  description="name"
                  isfield="true"
                  name="analyzer"
                />
              </div>

              <div className="w-full">
                <Common.Selects
                  array={[
                    { id: 1, name: "Nikesh" },
                    { id: 2, name: "Bhandari" },
                    { id: 3, name: "Sangoj" },
                    { id: 4, name: "Kaji" },
                    { id: 5, name: "Piya" },
                    { id: 6, name: "Hello" },
                  ]}
                  initialValue={props.modaldata?.code}
                  label="Code"
                  hidelabel
                  value={"id"}
                  description="name"
                  isfield="true"
                  name="code"
                />
              </div>
            </div>

            <div className="flex items-center">
              <div className="flexnine fixedwidth">
                <TextArea rows={2} placeholder="Description" maxLength={4} />
              </div>

              <div className="ml-8">
                <div className="mb-5 flex items-center">
                  <Switch style={{ backgroundColor: "#f0f0f0" }} />

                  <span className="ml-2">Heading</span>
                </div>

                <div className="flex items-center">
                  <Switch
                    style={{ backgroundColor: "#f0f0f0" }}
                    checkedChildren={
                      <div style={{ backgroundColor: "#000" }}></div>
                    }
                    defaultChecked
                  />

                  <span className="ml-2">Active</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`fixedwidth setuptitle relative mx-auto w-[100%] pt-5 text-left font-Poppins text-sm font-medium `}
          >
            <Divider
              orientation="left"
              orientationMargin="0"
              className="m-0 p-0 text-[12px]"
              style={{ margin: "0", fontSize: "14px", color:"#292561" }}
            >
              Reference Range Setup
            </Divider>
          </div>
          <AgeWiseSetup />
          <div
            className={`fixedwidth setuptitle relative mx-auto mt-3 w-[100%] text-left font-Poppins text-sm font-medium`}
          >
            <Divider
              orientation="left"
              orientationMargin="0"
              className="m-0 p-0 text-[12px]"
              style={{ margin: "0", fontSize: "14px", color:"#292561" }}
            >
              Frequent Result
            </Divider>
          </div>
          <FrequentRequest />

          <div
            className={`fixedwidth setuptitle relative mx-auto mt-3 w-[100%] text-left font-Poppins text-sm font-medium`}
          >
            <Divider
              orientation="left"
              orientationMargin="0"
              className="m-0 p-0 text-[12px]"
              style={{ margin: "0", fontSize: "14px", color:"#292561" }}
            >
              Calculation Formula
            </Divider>
          </div>
          <CalculationFormula />
        </div>
      </Form>
    </Modal>
  );
}

export default ParameterSetupModal;
