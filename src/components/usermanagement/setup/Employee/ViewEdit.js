import { Form } from "antd";
import Common from "../../../common";

const ViewEditdDepartment = ({ open, setOpen }) => {
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
                name="parent_id"
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Parent Id :"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="name"
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Name :"}
                bordered={open?.edit ? false : true}
                initialValue={open.data?.name}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="dob"
                initialValue={open.data?.dob_ad}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"DOB :"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="order"
                initialValue={open.data?.mobile_no}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Phone No :"}
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
                prefix={"Code :"}
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
                type="email"
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
                  label="Sub Organization Id"
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
                  label="Created By"
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
                  label="Updated By"
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
                  prefix={"Created At:"}
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
                  name="position_id"
                  label="Position Id"
                  initialValue={open.data?.position_id}
                  readOnly={true}
                  hidelabel
                  prefix={"Position Id :"}
                  bordered={true}
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="designation_id"
                  initialValue={open.data?.designation_id}
                  readOnly={true}
                  hidelabel
                  prefix={"Designation Id :"}
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
export default ViewEditdDepartment;
