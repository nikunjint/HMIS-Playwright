import { Form } from "antd";
import React from "react";
import Common from "../../../common";
import { HiPencilAlt } from "react-icons/hi";

const PatientInfoEditSave = () => {
  const [isEdit, setEdit] = React.useState(true);
  const handelEdit = () => {
    setEdit(!isEdit);
  };
  return (
    <Common.Cards>
      <Form className="justify-content-center flex items-center">
        <div className="grid w-full lg:grid-cols-5 gap-3 md:grid-cols-3">
          <div className="row-span-3 flex items-center justify-center">
            <Common.ImageUpload  className="w-[100px] h-[100px]" />
          </div>

          <Common.Inputs
            name="name"
            hidelabel
            initialValue="Sanjog"
            prefix="Patient Weight (KG):"
          />
          <Common.Inputs
            name="age"
            hidelabel
            initialValue="25 Years"
            prefix="Age :"
          />
          <Common.Inputs
            name="gender"
            hidelabel
            initialValue="Male"
            prefix="Gender :"
          />
          <Common.Inputs
            name="address"
            hidelabel
            initialValue="Sindhupalchowk"
            prefix="Address :"
          />
          <Common.Inputs
            name="phone"
            hidelabel
            className="mb-0"
            initialValue="1234567890"
            prefix="Phone No. :"
          />
          <Common.Inputs
            name="height"
            hidelabel
            initialValue="123 cm"
            prefix="Height :"
          />
          <Common.Inputs
            name="weight"
            hidelabel
            initialValue="45 KG"
            prefix="Weight : "
          />
          <Common.Inputs
            name="patientid"
            hidelabel
            initialValue="80000037"
            prefix="Patient ID :"
          />
          <Common.Inputs
            name="patienttype"
            hidelabel
            initialValue="OPD"
            prefix="Patient Type :"
          />
          <Common.Inputs
            name="billno"
            hidelabel
            initialValue="CS79/80-0001585"
            prefix="Bill No. :"
          />

          <div className="row-span-2">
            {isEdit ? (
              <Common.Buttons
                className="mb-0 bg-[#292561] text-[white]"
                icon={<HiPencilAlt />}
                onClick={handelEdit}
              >
                Edit
              </Common.Buttons>
            ) : (
              <Common.Buttons className="mb-0 bg-[#292561] text-[white]">
                Save
              </Common.Buttons>
            )}
          </div>
        </div>
      </Form>
    </Common.Cards>
  );
};
export default PatientInfoEditSave;
