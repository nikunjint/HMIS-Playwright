import { Form } from "antd";
import React from "react";
import Common from "../common";

function PatientRegistration() {
  return (
    <>
      <Common.Header
        name="Go Back"
        mainmodule="Patient Registration"
        currentmodule="Registration Only"
      />

      <Form>
        <div className="mb-5 mt-3 flex flex-row">
          <div className="border-gray-800 rounded-md">
            <Common.FormLabel className="mb-0" name=" Basic Information" />
            <div className=" w-12/12 grid gap-x-4 p-3 md:grid-cols-12 lg:gap-x-2.5">
              <div className="col-span-3">
                <Common.Inputs name="name" label="Name" required />
              </div>
              <div className="col-span-3">
                <Common.Inputs name="class" label="Class" required />
              </div>
              <div className="col-span-3">
                <Common.Inputs name="link" label="Link" required />
              </div>
              <div className="col-span-3">
                <Common.Inputs name="remarks" label="Remarks" required />
              </div>
              <div className="col-span-2">
                <Common.Inputs name="code" label="Code" required />
              </div>
              <div className="col-span-2">
                <Common.Inputs name="order" label="Order" required />
              </div>
              <div className="col-span-2">
                <Common.Inputs name="order" label="Order" required />
              </div>
              <div className="col-span-2">
                <Common.Inputs name="order" label="Order" required />
              </div>
              <div className="col-span-2">
                <Common.Inputs name="order" label="Order" required />
              </div>
              <div className="col-span-2">
                <Common.Inputs name="order" label="Order" required />
              </div>
            </div>
          </div>
          <div className="patientupload user-media bg-gray-500 relative ml-5  flex w-3/12 items-center justify-center gap-x-2.5 pl-4 md:grid-cols-12">
            <Common.ImageUpload
              className="z-9"
              button="Upload now"
              picture={"picture-circle"}
            />
          </div>
        </div>

        <div className="border-gray-800 mb-5 rounded-md">
          <Common.FormLabel
            className="mb-0"
            name=" Contact Address
"
          />
          <div className=" grid w-full gap-x-4 p-3  pt-0 md:grid-cols-12">
            <div className="col-span-2">
              <Common.Inputs name="name" label="Name" required />
            </div>
            <div className="col-span-2">
              <Common.Inputs name="class" label="Class" required />
            </div>
            <div className="col-span-2">
              <Common.Inputs name="link" label="Link" required />
            </div>
            <div className="col-span-2">
              <Common.Inputs name="remarks" label="Remarks" required />
            </div>
            <div className="col-span-2">
              <Common.Inputs name="code" label="Code" required />
            </div>
            <div className="col-span-2">
              <Common.Inputs name="order" label="Order" required />
            </div>
            <div className="col-span-2">
              <Common.Inputs name="order" label="Order" required />
            </div>
            <div className="col-span-2">
              <Common.Inputs name="order" label="Order" required />
            </div>
            <div className="col-span-2">
              <Common.Inputs name="order" label="Order" required />
            </div>
            <div className="col-span-2">
              <Common.Inputs name="order" label="Order" required />
            </div>
          </div>
        </div>

        <div className="border-gray-800 rounded-md">
          <Common.FormLabel
            className="mb-0"
            name=" Passport & Visa Information
"
          />
          <div className="flex flex-row rounded-md p-3 pt-0">
            <div className=" grid w-6/12 gap-x-4 md:grid-cols-12">
              <div className="col-span-3">
                <Common.Inputs name="name" label="Name" required />
              </div>
              <div className="col-span-3">
                <Common.Inputs name="class" label="Class" required />
              </div>
              <div className="col-span-3">
                <Common.Inputs name="link" label="Link" required />
              </div>
              <div className="col-span-3">
                <Common.Inputs name="remarks" label="Remarks" required />
              </div>
            </div>
            <div className=" grid w-6/12 gap-x-4 pl-4 md:grid-cols-12 ">
              <div className="col-span-3">
                <Common.Inputs name="name" label="Name" required />
              </div>
              <div className="col-span-3">
                <Common.Inputs name="class" label="Class" required />
              </div>
              <div className="col-span-3">
                <Common.Inputs name="link" label="Link" required />
              </div>
              <div className="col-span-3">
                <Common.Inputs name="remarks" label="Remarks" required />
              </div>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
}

export default PatientRegistration;
