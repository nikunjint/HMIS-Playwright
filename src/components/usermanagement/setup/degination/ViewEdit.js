import { Form } from "antd";
import Common from "../../../common";

const ViewEditdDegination = ({ open, setOpen }) => {
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
                prefix={"Name:"}
                bordered={open?.edit ? false : true}
              />
            </div>

            <div className="col-span-4">
              <Common.Inputs
                name="created_at"
                initialValue={open.data?.created_at}
                readOnly={true}
                hidelabel
                prefix={"Created Date:"}
                bordered={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="updated_at"
                initialValue={open.data?.created_at}
                readOnly={true}
                hidelabel
                prefix={"Updated Date :"}
                bordered={open?.edit ? false : true}
              />
            </div>
          </div>
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
export default ViewEditdDegination;
