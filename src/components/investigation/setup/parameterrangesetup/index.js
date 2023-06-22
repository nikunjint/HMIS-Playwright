import { Button, Form, Modal, Tabs, Tooltip } from "antd";
import React, { useMemo, useState } from "react";
import Common from "../../../common";
import ParameterSetup from "./ParameterSetup";
import SensitivityMedicine from "./SensitivityMedicine";
import Prefooter from "./Prefooter";
import Reportfooter from "./Reportfooter";
import { useLocation, useParams } from "react-router-dom";

const NewGroupFilterTable = () => {
  const slug = useParams();
  const param = slug?.slug;

  const location = useLocation();
  const text = <span>How to get started?</span>;
  const [arrow] = useState("Show");
  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }

    if (arrow === "Show") {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  const initialValuefordepartment = location.pathname.includes("/4")
    ? null
    : "Hematology";
  const initialValuefortestname = location.pathname.includes("/4")
    ? null
    : "CBC";
  const initialValueforunit = location.pathname.includes("/4") ? null : "ml";
  const initialValueforcpt = location.pathname.includes("/4") ? null : "004509";
  const initialValueforcontainer = location.pathname.includes("/4")
    ? null
    : "Lavender-Tube(EOTA)";
  const initialValueforspecimen = location.pathname.includes("/4")
    ? null
    : "Blood";
  const initialValueforspecimenvolume = location.pathname.includes("/4")
    ? null
    : "3";
  const methoddata = location.pathname.includes("/4")
    ? null
    : [
        { id: 1, name: "Blood cell counter" },

        { id: 2, name: "Photometric Rhecoscope" },
      ];

  const item = [
    {
      label: "Lab Parameter Setup",
      id: 1,
      name: <ParameterSetup />,
    },
    param.toString() === "3"
      ? {
          label: "Sensitivity Medicine",
          id: 2,
          name: <SensitivityMedicine />,
        }
      : "",
    {
      label: "Prefooter",
      id: 3,
      name: <Prefooter />,
    },
    {
      label: "Report Footer",
      id: 4,
      name: <Reportfooter />,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    document.body.classList.add("modal-open");
    setIsModalOpen(true);
  };

  const handleOk = () => {
    document.body.classList.remove("modal-open");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    document.body.classList.remove("modal-open");
    setIsModalOpen(false);
  };
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  return (
    <div>
      <div className="relative grid grid-flow-row gap-0">
        <div className="mb-2">
          <Common.Header
            headmodule="Investigation"
            currentmodule="Parameter Range Setup"
            mainmodule="Lab Setup"
            linkmainmodule="/investigation/lab-setup/labtemplate"
            name="Go Back"
            to="/"
            size={"large"}
          />
        </div>
        <div>
        <Form {...formItemLayout}>
          <Tooltip placement="top" title={text} arrow={mergedArrow}>
            <Button className="absolute right-0 top-0" onClick={showModal}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2377/2377793.png"
                alt="video"
                width={20}
                height={20}
                className="animate-pulse"
              />
            </Button>
          </Tooltip>

          <Modal
            open={isModalOpen}
            okButtonProps={{ className: "bg-main" }}
            onOk={handleOk}
            onCancel={handleCancel}
            maskClosable={false}
            width={800}
          >
            <video style={{ width: "100%" }} height="500" muted autoplay="true">
              <source
                src="https://player.vimeo.com/external/510534364.sd.mp4?s=ccc0ca48c4b3dd6974e0f2236daef9969ba7a0df&profile_id=164&oauth2_token_id=57447761"
                type="video/ogg"
              />
            </video>
          </Modal>

          <Common.Cards customclass="flex flex-wrap fleximp mt-0 p-2 pt-0 parametercard">
            <div className="w-full grid grid-cols-4 gap-4">
            <div >
              <Common.Selects
                array={[{ id: 1, name: "Hematology" }]}
                label="Department"
                placeholder="Select Department"
                value={"id"}
                description="name"
                initialValue={initialValuefordepartment}
                isfield="true"
                name="employee_id"
                className="mb-0"
              />
            </div>

            <div >
              <Common.Selects
                array={[
                  { id: 1, name: "CBC" },

                  { id: 2, name: "RFT" },
                ]}
                label="Test Name"
                value={"id"}
                placeholder="Select Test Name"
                description="name"
                initialValue={initialValuefortestname}
                isfield="true"
                name="testnameid"
              />
            </div>

            <div >
              <Common.Selects
                array={[{ id: 1, name: "005009" }]}
                label="CPT Code"
                readOnly
                value={"id"}
                initialValue={initialValueforcpt}
                description="name"
                isfield="true"
                name="cpicode"
              />
            </div>

            <div >
              <Common.Selects
                array={[{ id: 1, name: "Lavender-Tube(EOTA)" }]}
                label="Container"
                readOnly
                value={"id"}
                description="name"
                isfield="true"
                name="testnameid"
                initialValue={initialValueforcontainer}
              />
            </div>

            <div >
              <Common.Inputs
                name="specimen"
                placeholder="Select Specimen"
                initialValue={initialValueforspecimen}
                label="Specimen"
              />
            </div>

            <div >
              <Common.Inputs
                name="specimenvolmn"
                label="Specimen Volume"
                placeholder="Select Specimen Volume"
                initialValue={initialValueforspecimenvolume}
              />
            </div>

            <div >
              <Common.Selects
                array={[
                  { id: 1, name: "ml" },

                  { id: 2, name: "l" },
                ]}
                label="Unit"
                value={"id"}
                placeholder="Unit"
                description="name"
                initialValue={initialValueforunit}
                isfield="true"
                name="unit"
              />
            </div>

            <div >
              <Common.Selects
                initialValue={methoddata?.map((item) => item?.id) || []}
                array={methoddata?.map((item) => item)}
                label="Method"
                placeholder="Select Method"
                value={"id"}
                description="name"
                isfield="true"
                name="method"
                mode="multiple"
              />
            </div>
            </div>
          </Common.Cards>
        </Form>
        </div>
        

        <div >
          <Tabs
            centered
            defaultActiveKey="1"
            style={{
              marginBottom: 12,
            }}
            tabBarStyle={{
    
              borderBottom: "1px solid #D3D3D3",
            }}
            items={item
              .map((item, i) => {
                return {
                  label: (
                    <div
                      className="flex items-center gap-2 font-Poppins"
                      key={item.id}
                    >
                      <div>{item.label}</div>
                    </div>
                  ),
                  key: item.id,
                  children: item.name,
                };
              })
              .filter((item, i) => (param.toString() === "3" ? item : i !== 1))}
          />
        </div>
      </div>
    </div>
  );
};

export default NewGroupFilterTable;
