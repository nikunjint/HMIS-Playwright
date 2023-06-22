import { Form } from "antd";
import Common from "../../../common";
import { useAddOrganization, useEditOrganization } from "../../../../services/userManagement/SetUp";
import { useForm } from "antd/es/form/Form";

const ViewEditdOrganization = ({ open, setOpen }) => {
  const addOrganization=useAddOrganization()
  const editOrganization=useEditOrganization()
  const [form]=useForm()
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };
  const onFinish = (values) => {
    if(open?.add){
      addOrganization.mutate(values)

    }else if(open?.edit){
      editOrganization.mutate({id:open?.data?.id,payload:values})
    }
    form.resetFields()
    if(!editOrganization.isLoading || !addOrganization.isLoading ){
      setOpen({ open: false })

    }
  
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
            {
              (!open?.edit || open.add )&&(
                <div className="col-span-4">
                <Common.Inputs
                  name="global_id"
                  hidelabel
                  prefix={'Global Id :'}
                  bordered={open?.edit ? false : true}
                  readOnly={open?.edit ? false : true}
                  type="number"
                />
              </div>
              )
            }
           
            <div className="col-span-4">
              <Common.Inputs
                name="name"
                bordered={open?.edit ? false : true}
                hidelabel
                prefix={'Name:'}
                initialValue={open.data?.name}
                readOnly={open?.edit ? false : true}
              />
            </div>

            <div className="col-span-4">
              <Common.Inputs
                name="address"
                hidelabel
                prefix={'Address :'}
                bordered={open?.edit ? false : true}
                initialValue={open.data?.address}
                readOnly={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="phoneno"
                hidelabel
                prefix={'Phone No :'}
                bordered={open?.edit ? false : true}
                initialValue={open.data?.phoneno}
                readOnly={open?.edit ? false : true}
                type="phone"
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="code"
                hidelabel
                prefix={'Code:'}
                bordered={open?.edit ? false : true}
                initialValue={open.data?.code}
                readOnly={open?.edit ? false : true}
              />
            </div>
            <div className="col-span-4">
              <Common.Inputs
                name="email"
                hidelabel
                prefix={'Email:'}
                bordered={open?.edit ? false : true}
                initialValue={open.data?.email}
                readOnly={open?.edit ? false : true}
                type="email"
              />
            </div>
          </div>
          {!open?.edit && (
            <div className="m-auto grid w-full items-center gap-x-4 md:grid-cols-12">
              <div className="col-span-4">
                <Common.Inputs
                  name="created_by"
                  initialValue={open.data?.created_by}
                  readOnly={open?.edit ? false : true}
                  type="email"
                  bordered={true}
                  hidelabel
                  prefix={'Created By:'}
                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="updated_by"
                  initialValue={open.data?.updated_by}
                  readOnly={open?.edit ? false : true}
                  type="email"
                  bordered={true}
                  hidelabel
                  prefix={'Updated By:'}

                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="created_at"
                  initialValue={open.data?.created_at}
                  readOnly={open?.edit ? false : true}
                  type="email"
                  bordered={true}
                  hidelabel
                  prefix={'Created At:'}

                />
              </div>
              <div className="col-span-4">
                <Common.Inputs
                  name="updated_at"
                  initialValue={open.data?.updated_at}
                  readOnly={open?.edit ? false : true}
                  type="email"
                  bordered={true}
                  hidelabel
                  prefix={'Updated At:'}

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
              loading={addOrganization.isLoading || editOrganization.isLoading}
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
export default ViewEditdOrganization;
