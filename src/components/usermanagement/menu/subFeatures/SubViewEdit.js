import { Form } from "antd";
import Common from "../../../common";

const ViewEditSubFeatures = ({ open, setOpen }) => {
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
          {open.title}
        </div>
        <Common.Cards>
          <div className="m-auto grid w-full items-center gap-x-4 md:grid-cols-12">
            <div className="col-span-4">
              <Common.Inputs
                name="newtab"
                initialValue={open.data?.newtab}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"New Tab :"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="name"
                initialValue={open.data?.NAME}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Name :"}
                bordered={open?.edit ? false : true}
              />
            </div>

            <div className="col-span-3">
              <Common.Inputs
                name="code"
                initialValue={open.data?.CODE}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Code :"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="remarks"
                initialValue={open.data?.REMARKS}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Remarks :"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-2">
              <Common.Inputs
                name="link"
                initialValue={open.data?.LINK}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Link :"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-3">
              <Common.Inputs
                name="class"
                initialValue={open.data?.CLASS}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Class :"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-3">
              <Common.Inputs
                name="order"
                initialValue={open.data?.ORDER}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Order :"}
                bordered={open?.edit ? false : true}
              />
            </div>
          </div>
          {!open?.edit && (
            <div className="m-auto grid w-full items-center gap-x-4 md:grid-cols-12">
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
                  initialValue={open.data?.updated_by}
                  readOnly={true}
                  hidelabel
                  prefix={"Updated By :"}
                  bordered={true}
                />
              </div>
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
                  name="suborganization_id"
                  label="Sub Organization Id"
                  initialValue={open.data?.suborganization_id}
                  readOnly={true}
                  hidelabel
                  prefix={"Sub Organization Id :"}
                  bordered={true}
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="created_at"
                  label="Created At"
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
        <div className="mt-4 flex justify-end">
          <Common.Buttons
            size={"tiny"}
            htmlType="submit"
            className="my-button btn-primary text-uppercase flex items-center justify-center bg-[#0d2f66] text-[white]"
          >
            Save
          </Common.Buttons>
        </div>
      </Form>
    </Common.AntModal>
  );
};
export default ViewEditSubFeatures;
