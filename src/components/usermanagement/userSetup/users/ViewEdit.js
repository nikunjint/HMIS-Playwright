import { Form } from "antd";
import Common from "../../../common";
import { memo } from "react";

const ViewEditdUser = ({ open, setOpen }) => {
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  const onFinish = (values) => {
    console.log("values", values);
  };
  return (
    <Common.AntModal open={open} setOpen={setOpen}>
      <Form onFinish={onFinish} {...formItemLayout}>
        <div
          className={`fixedwidth setuptitle relative mx-auto  w-[100%] text-left font-Poppins text-lg font-medium`}
        >
          {open?.title}
        </div>

        <Common.Cards>
          <div className="m-auto grid w-full items-center gap-x-4 md:grid-cols-12">
            <div className="col-span-4">
              <Common.Inputs
                name="name"
                initialValue={open.data?.name}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Name :"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="email"
                initialValue={open.data?.email}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Email :"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="password"
                initialValue={open.data?.password}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Password :"}
                bordered={open?.edit ? false : true}
                type="password"
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="email-verified_at"
                initialValue={open.data?.email_verified_at}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Email Verified At :"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.AntSwitch
                name="is-active"
                label={`${open.data?.is_active ? "Is Active" : "Default"}`}
                hidelabel
                initialValue={open.data.is_active}
                checked={open.data.is_active}
              />
            </div>
          </div>
          {!open?.edit && (
            <div className="m-auto grid w-full items-center gap-x-4 md:grid-cols-12">
              <div className="col-span-4">
                <Common.Inputs
                  name="organization_id"
                  initialValue={open.data?.organization_id}
                  readOnly={true}
                  hidelabel
                  prefix={"Organization Id :"}
                  bordered={true}
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="sub_organization_id"
                  initialValue={open.data?.sub_organization_id}
                  readOnly={true}
                  hidelabel
                  prefix={"Sub Organization Id :"}
                  bordered={true}
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="created_by"
                  initialValue={open.data?.created_by}
                  readOnly={true}
                  hidelabel
                  prefix={"Created By :"}
                  bordered={true}
                />
              </div>

              <div className="col-span-4">
                <Common.Inputs
                  name="updated_by"
                  initialValue={open.data?.updated_by}
                  readOnly={true}
                  hidelabel
                  prefix={"Updated By :"}
                  bordered={true}
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="created_at"
                  initialValue={open.data?.created_at}
                  readOnly={true}
                  hidelabel
                  prefix={"Created At :"}
                  bordered={true}
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="updated_at"
                  initialValue={open.data?.updated_at}
                  readOnly={true}
                  hidelabel
                  prefix={"Updated At :"}
                  bordered={true}
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="employee_id"
                  initialValue={open.data?.employee_id}
                  readOnly={true}
                  hidelabel
                  prefix={"Employee Id :"}
                  bordered={true}
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
export default memo(ViewEditdUser);
