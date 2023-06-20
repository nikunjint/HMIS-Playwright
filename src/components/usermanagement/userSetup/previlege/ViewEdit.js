import { Form } from "antd";
import Common from "../../../common";

const ViewEditdPrevilege = ({ open, setOpen }) => {
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
                name="parient_id"
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Parient Id :"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="name"
                label="Name"
                initialValue={open.data?.name}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Name :"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="reporttitle"
                initialValue={open.data?.report_title}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Report Title :"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="order"
                initialValue={open.data?.order}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Order :"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="code"
                label="Code"
                initialValue={open.data?.code}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Code :"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="type"
                initialValue={open.data?.type}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Type :"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.AntSwitch
                name="is-ward"
                label="Ward"
                hidelabel
                initialValue={open.data.is_ward}
                checked={open.data.is_ward}
              />
            </div>
            <div className="col-span-4">
              <Common.AntSwitch name="is-clinical" label="Clinical" hidelabel />
            </div>{" "}
            <div className="col-span-4">
              <Common.AntSwitch
                name="is-hr-department"
                label="Hr Department"
                hidelabel
              />
            </div>{" "}
            <div className="col-span-4">
              <Common.AntSwitch name="is-account" label="Account" hidelabel />
            </div>{" "}
            <div className="col-span-4">
              <Common.AntSwitch name="is-lab" label="Lab" hidelabel />
            </div>{" "}
            <div className="col-span-4">
              <Common.AntSwitch
                name="is-inventory"
                label="Inventory"
                hidelabel
                checked
              />
            </div>
          </div>
          {!open?.edit && (
            <div className="m-auto grid w-full items-center gap-x-4 md:grid-cols-12">
              <div className="col-span-4">
                <Common.Inputs
                  name="organization_id"
                  label="Organization Id"
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
export default ViewEditdPrevilege;
