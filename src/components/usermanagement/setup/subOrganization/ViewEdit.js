import React from 'react'
import { Form } from "antd";
import Common from "../../../common";
import { useAddSubOrganization } from "../../../../services/userManagement/SetUp";
import { useForm } from "antd/es/form/Form";

const ViewEditdSubOrganization = ({ open, setOpen }) => {
  const [switchvalue,handleSwitch]=React.useState()
  const [form]=useForm()
  const addsubOrganization=useAddSubOrganization()
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  const onFinish = (values) => {
    values.is_default=switchvalue?switchvalue:open.data?.isDefault
    addsubOrganization.mutate(values)
    form.resetFields()
    setOpen({open:false})
  };
  return (
    <Common.AntModal open={open} setOpen={setOpen}>
      <Form onFinish={onFinish} {...formItemLayout} form={form}>
        <div
          className={`fixedwidth setuptitle relative mx-auto  w-[100%] text-left font-Poppins text-lg font-medium`}
        >
          {open?.title}
        </div>

        <Common.Cards>
          <div className="m-auto grid w-full items-center gap-x-4 md:grid-cols-12">
          <div className="col-span-4">
              <Common.Inputs
                name="organization_id"
                initialValue={open?.data?.parentOrganization}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Organization Id:"}
                bordered={open?.edit ? false : true}
                type="number"
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="name"
                initialValue={open.data?.name}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Name:"}
                bordered={open?.edit ? false : true}
              />
            </div>

            <div className="col-span-4">
              <Common.Inputs
                name="address"
                initialValue={open.data?.address}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Address:"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="phone_no"
                initialValue={open.data?.mobileNo}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Phone No:"}
                bordered={open?.edit ? false : true}
                type="number"
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="code"
                initialValue={open.data?.code}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Code:"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="email"
                initialValue={open.data?.email}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Email:"}
                bordered={open?.edit ? false : true}
                type="email"
              />
            </div>
            <div className="col-span-4">
              <Common.AntSwitch
                name="is_default"
                label="Default"
                hidelabel
                defaultChecked={open.data?.isDefault === 1 ?true:false}
                initialValue={open.data?.isDefault ===1?true:false}
                handleSwitch={(e)=>handleSwitch(e)}
                checked={open.data?.isDefault ===1?true:false}
              />
            </div>
          </div>
          {!open?.edit && (
            <div className="m-auto grid w-full items-center gap-x-4 md:grid-cols-12">
              <div className="col-span-4">
                <Common.Inputs
                  name="created_by"
                  initialValue={open.data?.created_by}
                  readOnly={true}
                  hidelabel
                  prefix={"Created By :"}
                  bordered={true}
                  type="email"
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="updated_by"
                  initialValue={open.data?.updated_by}
                  readOnly={true}
                  hidelabel
                  prefix={"Update By:"}
                  bordered={true}
                  type="email"
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="created_at"
                  initialValue={open.data?.created_at}
                  readOnly={true}
                  hidelabel
                  prefix={"Created At:"}
                  bordered={true}
                  type="email"
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="updated_at"
                  initialValue={open.data?.updated_at}
                  readOnly={true}
                  hidelabel
                  prefix={"Updated At:"}
                  bordered={true}
                  type="email"
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="organization_id"
                  initialValue={open.data?.organization_id}
                  readOnly={true}
                  hidelabel
                  prefix={"Organization Id:"}
                  bordered={true}
                  type="email"
                />
              </div>
            </div>
          )}
        </Common.Cards>
        {open?.edit && (
          <div className="mt-4 flex justify-end">
            <Common.Buttons
              size={"tiny"}
              htmlType="submit"
              loading={addsubOrganization.isLoading}
              className="my-button btn-primary text-uppercase flex items-center justify-center bg-[#0d2f66] text-[white]"
            >
              Save
            </Common.Buttons>
          </div>
        )}
      </Form>
    </Common.AntModal>
  );
};
export default ViewEditdSubOrganization;
