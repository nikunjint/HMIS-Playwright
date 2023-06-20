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

        <Common.Cards customclass={`${ !open.edit ? 'deptable' : ''}`}>

          <div className="m-auto grid w-full items-center gap-x-4 md:grid-cols-12">
            <div className="col-span-4">
              <Common.Inputs
                name="patient_id"
                hidelabel
                prefix={"Patient Id :"}
                readOnly={open?.edit ? false : true}
                bordered={open?.edit ? false : true} 
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="name"
                hidelabel
                prefix={"Name:"}
                initialValue={open.data?.name}
                readOnly={open?.edit ? false : true}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                bordered={open?.edit ? false : true}
                name="reporttitle"
                hidelabel
                prefix={"Report Title:"}
                initialValue={open.data?.report_title}
                readOnly={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="order"
                hidelabel
                prefix={"Order:"}
                initialValue={open.data?.order}
                readOnly={open?.edit ? false : true}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="code"
                hidelabel
                prefix={"Code:"}
                initialValue={open.data?.code}
                readOnly={open?.edit ? false : true}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="type"
                hidelabel
                prefix={"Type:"}
                initialValue={open.data?.type}
                readOnly={open?.edit ? false : true}
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
                  hidelabel
                  prefix={"Organization Id:"}
                  initialValue={open.data?.organization_id}
                  readOnly={open?.edit ? false : true}
                  bordered={true}
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="sub_organization_id"
                  hidelabel
                  prefix={"Sub Organization Id:"}
                  initialValue={open.data?.sub_organization_id}
                  readOnly={open?.edit ? false : true}
                  bordered={true}
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="created_by"
                  hidelabel
                  prefix={"Created By:"}
                  initialValue={open.data?.created_by}
                  readOnly={open?.edit ? false : true}
                  bordered={true}
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="updated_by"
                  hidelabel
                  prefix={"Updated By:"}
                  initialValue={open.data?.updated_by}
                  readOnly={open?.edit ? false : true}
                  bordered={true}
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="created_at"
                  hidelabel
                  prefix={"Created At:"}
                  initialValue={open.data?.created_at}
                  readOnly={open?.edit ? false : true}
                  bordered={true}
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="updated_at"
                  hidelabel
                  prefix={"Updated At:"}
                  initialValue={open.data?.updated_at}
                  readOnly={open?.edit ? false : true}
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
