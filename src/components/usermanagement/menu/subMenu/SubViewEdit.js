import { Form } from "antd";
import Common from "../../../common";

const ViewEditSubMenu = ({ open, setOpen }) => {
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
                name="name"
                label="Name"
                initialValue={open.data?.NAME}
                readOnly={open?.edit ? false : true}
                hidelabel
                prefix={"Name :"}
                bordered={open?.edit ? false : true}
              />
            </div>

            <div className="col-span-4">
              <Common.Inputs
                name="code"
                hidelabel
                prefix={"Code :"}
                bordered={open?.edit ? false : true}
                initialValue={open.data?.CODE}
                readOnly={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="remarks"
                hidelabel
                prefix={"Remarks :"}
                bordered={open?.edit ? false : true}
                initialValue={open.data?.REMARKS}
                readOnly={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="link"
                hidelabel
                prefix={"Link :"}
                bordered={open?.edit ? false : true}
                initialValue={open.data?.LINK}
                readOnly={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="order"
                hidelabel
                prefix={"Order :"}
                bordered={open?.edit ? false : true}
                initialValue={open.data?.ORDER}
                readOnly={open?.edit ? false : true}
              />
            </div>
          </div>
          {!open?.edit && (
            <div className="m-auto grid w-full items-center  md:grid-cols-12">
              <div className="col-span-4">
                <Common.Inputs
                  name="created_by"
                  hidelabel
                  prefix={"Code:"}
                  bordered={true}
                  initialValue={open.data?.created_by}
                  readOnly={true}
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="updated_by"
                  initialValue={open.data?.updated_by}
                  readOnly={true}
                  bordered={true}
                  hidelabel
                  prefix={"Updated By :"}
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="organization_id"
                  initialValue={open.data?.organization_id}
                  readOnly={true}
                  bordered={true}
                  hidelabel
                  prefix={"Organization Id :"}
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="suborganization_id"
                  hidelabel
                  prefix={"Sub Organization :"}
                  bordered={true}
                  initialValue={open.data?.suborganization_id}
                  readOnly={true}
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
                  prefix={"Updated At:"}
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
export default ViewEditSubMenu;
