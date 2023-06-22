import React from "react";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Spin,
  Table,
  Tag,
  Upload,
  message,
  notification,
  Breadcrumb,
  Skeleton,
  Card,
  Checkbox,
  Modal,
  Dropdown,
  Menu,
  Switch,
  Popconfirm,
} from "antd";
import _ from "lodash";
import { Link } from "react-router-dom";
import {
  HiArrowNarrowLeft,
  HiChevronLeft,
  HiChevronRight,
  HiDotsHorizontal,
  HiSearch,
} from "react-icons/hi";
import Loader from "../../assets/loader.gif";

import activegrid from "../../assets/activegrid.png";
import { AiOutlineClose } from "react-icons/ai";

const { Option } = Select;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const FormItem = (props) => {
  const localFormStyle = props.formStyle || {};
  const hiddenStyle = props.hidden ? { height: 0, width: 0, margin: 0 } : {};
  const localStyle = props.overflowHidden
    ? { overflowX: "hidden", overflowY: "hidden", ...localFormStyle }
    : { ...localFormStyle };
  return (
    <Form.Item
      {...props}
      name={props.name}
      label={
        props.hidelabel ? null : (
          <span className=" font-Poppins text-sm font-medium text-[#292561]">
            {props.label}
          </span>
        )
      }
      valuePropName={props.valuePropName}
      validateFirst
      shouldUpdate={props.shouldUpdate}
      getValueFromEvent={props.getValueFromEvent}
      initialValue={
        props.initialValue ||
        typeof props.initialValue === "boolean" ||
        props.initialValue === "" ||
        props.initialValue === 0 ||
        Array.isArray(props.initialValue)
          ? props.initialValue
          : null
      }
      style={{ ...localStyle, ...hiddenStyle }}
      {...props.formItemProps}
      rules={props.localrules}
      // {...props.formItemLayout}
      colon={props.colon || false}
    >
      {props.children}
    </Form.Item>
  );
};

const Inputs = (props) => {
  const handleWhiteSpaceValidation = (rules, value) => {
    if (value && typeof value !== "number") {
      if (value?.split("")?.[0] !== " ") {
        return Promise.resolve();
      } else {
        return Promise.reject(`${props.label} cannot start with space`);
      }
    } else {
      return Promise.resolve();
    }
  };

  const positiveNumberValidation = (rules, value) => {
    if (value) {
      if (value >= 0) {
        return Promise.resolve();
      } else {
        return Promise.reject(`${props.label} should be positive`);
      }
    } else {
      return Promise.resolve();
    }
  };
  const validatePhone = (_, value) => {
    const phoneRegex = /^\d{10}$/; // regular expression to validate phone number
    if (!phoneRegex.test(value)) {
      return Promise.reject("Please enter a valid phone number");
    } else if (value >= 0) {
      return Promise.resolve();
    } else if (value <= 0) {
      return Promise.reject(`${props.label} should be positive`);
    } else {
      return Promise.resolve();
    }
  };

  const emailPattern = {
    pattern: new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"),
    message: "Please enter in example@email.com format",
  };

  const whiteSpacePattern = {
    validator: handleWhiteSpaceValidation,
  };

  const positive = {
    validator: positiveNumberValidation,
  };
  const phonenumber = {
    validator: validatePhone,
  };
  const pattern =
    props.type === "email"
      ? [emailPattern]
      : props.type === "pnumber"
      ? [phonenumber]
      : props.type === "number"
      ? [positive]
      : [whiteSpacePattern];

  const tempRule = [
    {
      required: props.required,
      message: (
        <div className="flex gap-1">
          <div>{"Please Enter"}</div>
          <div>{props.label}</div>
        </div>
      ),
    },
    ...pattern,
  ];

  const localrules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;
  return (
    <FormItem {...props} localrules={localrules}>
      {!props.viewDetails || props.isfield ? (
        <Input
          min={props.minlength}
          hidden={props.hidden || false}
          type={props.type}
          onBlur={props.onBlur}
          autoFocus={props.autoFocus || false}
          style={{
            ...props.style,
          }}
          readOnly={props.readOnly}
          bordered={props.bordered ? false : true}
          onClick={props.onClick}
          maxLength={props.maxlength}
          value={props.value}
          disabled={props.disabled}
          onChange={props.onChange}
          className={props.className}
          ref={props.ref}
          allowClear={props.allowclear || false}
          prefix={
            <div className="mb-1 mt-1 font-Poppins text-sm font-medium text-[#4C4C4C]">
              {props.prefix}
            </div>
          }
          suffix={props.type === "search" ? <HiSearch /> : props.suffix}
          placeholder={props.placeholder}
          {...props.fieldProps}
        />
      ) : (
        <div className="break flex justify-center break-words align-middle">
          <b>{props.initialValue || "-"}</b>
        </div>
      )}
    </FormItem>
  );
};

const Selects = (props) => {
  const tempRule = [
    {
      required: props.required,
      message: `Please select ${props.label}`,
    },
  ];

  const localrules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;
  return (
    <FormItem {...props} localrules={localrules}>
      <Select
        mode={props.mode}
        dropdownStyle={props.dropdownstyle}
        showSearch={props.nosearch}
        onBlur={props.onBlur}
        autoFocus={false}
        onClick={props.onClick}
        disabled={props.disabled}
        onChange={props.onChange}
        onSelect={props.onSelect}
        className={props.className}
        allowClear={!props.noclear}
        loading={props.loading}
        notFoundContent={props.waitFor}
        placeholder={props.placeholder || `${props.label}`}
        style={{
          ...props.style,
          width: "100%",
          borderRadius: "20px",
          height:'100%' // Set the width to props.width if it is defined, otherwise set it to '100%'
        }}
        {...props.fieldProps}
      >
        {_.isArray(props.array) &&
          props.array.map((item, index) => {
            return (
              <Option key={index + 1} value={item[props.value]}>
                {item[props?.description]}
              </Option>
            );
          })}
      </Select>
    </FormItem>
  );
};

const DatePickers = (props) => {
  const tempRule = [
    {
      required: props.required,
      message: `Please select ${props.label}`,
    },
  ];
  const localrules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;

  return (
    <FormItem {...props} localrules={localrules}>
      <DatePicker
        {...props}
        onChange={props.onChange}
        className={props.className}
        // format={"YYYY-MM-DD"}
        disabled={props.disabled}
        mode={props.mode}
        suffixIcon={props.suffixIcon || null}
        style={{
          ...props.style,
          height: "32px",
        }}
      />
    </FormItem>
  );
};

const Tables = (props) => {
  const showPaginationButtons = props.total >= 10;
  const handlePaginationChange = (paginationData) => {
    props.setQueryParams instanceof Function &&
      props.setQueryParams({
        page: paginationData.current,
        limit: paginationData.pageSize,
      });
  };
  const rowClassName = () => {
    return "color-tablerow";
  };
  return (
    <Table
      {...props}
      loading={{
        spinning: props.spinning,
        indicator: (
          <Spin
            indicator={
              <img src={Loader} style={{ width: "200px" }} alt="Loading.." />
            }
          />
        ),
      }}
      dataSource={props.data}
      sortDirections={props.sortDirections}
      columns={props.columns}
      expandable={props.expandable}
      onChange={handlePaginationChange}
      rowSelection={props.rowSelection || null}
      bordered={false}
      tableLayout="auto"
      scroll={{ x: `${props.X}`, scrollToFirstRowOnChange: true }}
      pagination={
        showPaginationButtons
          ? {
              current: props.current,
              pageSize: props.pageSize || 10,
              total: props.total,
              showQuickJumper: true,
              showLessItems: true,
              prevIcon: (
                <div className="mr-2 flex items-center ">
                  <HiChevronLeft />
                  <span>Prev</span>
                </div>
              ),
              nextIcon: (
                <div className="ml-2 flex items-center">
                  <span>Next</span> <HiChevronRight />
                </div>
              ),
            }
          : false
      }
      style={{
        borderBottom: "none",
        padding: "10px 0px",
        backgroundColor: "white",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        overflowX:'auto'
      }}
      rowClassName={rowClassName}
      className="cursor-pointer overflow-x-auto w-full"
    />
  );
};

const notifications = (title, message, type) => {
  notification.open({
    message: (
      <span
        style={{
          color:
            type === "success"
              ? "#10c469"
              : type === "error"
              ? "red"
              : "#f2994a",
        }}
      >
        {title}!
      </span>
    ),
    description: message,
    icon:
      type === "success" ? (
        <CheckCircleOutlined style={{ color: "#10c469" }} />
      ) : type === "error" ? (
        <CloseCircleOutlined style={{ color: "red" }} />
      ) : (
        <ExclamationCircleOutlined style={{ color: "#f2994a" }} />
      ),
    placement: "topRight",
  });
};

const ImageUpload = (props) => {
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  const [imageUrl, setImageUrl] = React.useState(null);
  const [updateImage, setUpdateImage] = React.useState(null);
  const tempRule = [
    {
      required: props.required,
      message: `Please select ${props.label}`,
    },
  ];
  const localrules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;

  const uploadButton = (
    <div className="  p-[60px] rounded-[50%] w-[70px] h-[70px] flex items-center justify-center flex-col font-medium border-dashed border-2"> 

      <PlusOutlined className="plusBtn" />
      <div className="uploadBtn">Upload</div>
    </div>
  );

  const handleChange = (info) => {
    getBase64(info.file.originFileObj, (img) => {
      setUpdateImage(img);
      props.onChange instanceof Function && props.onChange(info, img);
    });
  };
  React.useEffect(() => {
    setImageUrl(props.initialimageurl);
  }, [props.initialimageurl]);

  return (
    <FormItem {...props} localrules={localrules}>
      <Upload
        name="avatar"
        listType={props.picture}
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        className={`h-${props.H} w-${props.W} mx-auto flex items-center justify-center`}
      >
        {imageUrl || updateImage ? (
          <img
            src={updateImage}
            alt="avatar"
            className={`h-${props.H} w-${
              props.W
            } flex max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-[50%] object-fill object-center ${
              props.picture === "picture-card"
                ? "h-[40px] w-[40px] rounded-none"
                : ""
            }`}
          />
        ) : (
          uploadButton
        )}
        {props.button ? (
          <Button
            className={`my-button btn-primary text-uppercase text-white color-switcher flex  items-center justify-center`}
          >
            {props.button}
          </Button>
        ) : (
          ""
        )}
      </Upload>
    </FormItem>
  );
};

const Passwords = (props) => {
  const {
    label,
    style,
    rules,
    onBlur,
    onClick,
    required,
    onChange,
    className,
    allowClear,
    validate,
  } = props;

  const lengthValidator = {
    validator: (rules, value) => {
      if (value?.length >= 8) {
        return Promise.resolve();
      } else {
        return Promise.reject(`Should be at least 8 characters long`);
      }
    },
  };

  const upperCaseValidator = {
    pattern: new RegExp("^(?=.*[A-Z]).+$"),
    message: "Should contain a uppercase alphabet",
  };

  const lowerCaseValidator = {
    pattern: new RegExp("^(?=.*[a-z]).+$"),
    message: "Should contain a lowercase alphabet",
  };

  const numberValidor = {
    pattern: new RegExp("^(?=.*[0-9]).+$"),
    message: "Should contain a number",
  };

  const specialChar = {
    pattern: new RegExp("^(?=.*[!@#$%^&*]).+$"),
    message: "Should contain a special character",
  };

  const tempRules = rules instanceof Array ? rules : [];
  const localrules =
    validate && required
      ? [
          ...tempRules,
          {
            required: required,
            message: "Please enter your password",
          },
          lowerCaseValidator,
          upperCaseValidator,
          numberValidor,
          specialChar,
          lengthValidator,
        ]
      : required
      ? [
          ...tempRules,
          {
            required: required,
            message: "Please enter your password",
          },
        ]
      : tempRules;

  return (
    <FormItem {...props} localrules={localrules}>
      <Input
        allowClear={allowClear}
        onBlur={onBlur}
        autoFocus={false}
        onClick={onClick}
        onChange={onChange}
        className={className}
        placeholder={label}
        autoComplete="new-password"
        prefix={
          <div className="mb-1 mt-1 font-Poppins text-sm font-medium text-[#4C4C4C]">
            {props.prefix}
          </div>
        }
        style={{
          ...style,
        }}
        type="password"
      />
    </FormItem>
  );
};
const Buttons = (props) => {
  return (
    <Button
      size={props.size}
      htmlType={props.htmlType}
      onClick={props.onClick}
      className={props.className}
      loading={props.loading}
    >
  <div
    className={`from-neutral-100 flex items-center justify-center gap-x-2 text-center text-sm font-normal ${
      props.size ? "text-" + props.size : ""
    } ${props.hovertext ? "hover:text-dark" + props.hovertext : ""}`}
  >
        {props.icon}
        {props.children}
      </div>
    </Button>
  );
};
const LinkButton = (props) => {
  return (
    <Link to={props.to}>
      <Tag
        icon={<HiArrowNarrowLeft className="mr-1" />}
        className=" bg-transparent  flex cursor-pointer items-center justify-center p-1 px-3"
      >
        {props.name}
      </Tag>
    </Link>
  );
};

const Header = (props) => {
  return (
    <div className="m-auto mb-2 grid w-full grid-cols-1 items-center space-y-4 md:space-y-0">
      {/* <div className="text-left">
        <Button onClick={() => navigate(-1)} className="text-dark">
          {props.name}
        </Button>
      </div> */}

      <div className="item-center flex">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: (
                <Link to="/">
                  {" "}
                  <img
                    src={activegrid}
                    style={{ width: "15px", marginTop: "4px" }}
                    alt="MidasLight"
                  />
                </Link>
              ),
            },
            {
              title: <Link to={props.headmodule}>{props.headmodule}</Link>,
            },
            {
              title: <Link to={props.linkmainmodule}>{props.mainmodule}</Link>,
            },
            {
              title: (
                <Link to="" className="font-medium text-[#292561]" style={{color: "#292561"}}>
                  {props.currentmodule}
                </Link>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

const FormLabel = (props) => {
  return (
    <div className="bg-gray-500 m-auto grid w-full grid-cols-3 items-center space-y-4 p-2 px-3 md:space-y-0">
      <div className="text-left">
        <h5 className="text-sm font-normal">{props.name}</h5>
      </div>
    </div>
  );
};

const CustomSkeleton = (props) => {
  return (
    <div>
      {props.loading ? (
        <div>
          {Array(props.value)
            .fill()
            .map((item, index) => (
              <div>
                <div className={"mb-10 flex grid-cols-2 gap-6 md:grid"}>
                  <div className="md:col-span-1">
                    <Skeleton
                      loading={props.loading}
                      avatar={props.avatar || null}
                      paragraph={{ rows: props.row }}
                    >
                      <div>{props.children}</div>
                    </Skeleton>
                  </div>
                  <div className="md:col-span-1">
                    <Skeleton
                      loading={props.loading}
                      avatar={props.avatar || null}
                      paragraph={{ rows: props.row }}
                    ></Skeleton>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div>{props.children}</div>
      )}
    </div>
  );
};

const AntdCard = (props) => {
  return (
    <Card className="shadowdrop p-3"
      size="small"
      title={
        <div className=" grid grid-flow-row-dense grid-rows-1 py-2 pt-0">
          <div className="flex items-center justify-between">
            <div className={`flex font-Poppins font-medium
             items-center gap-1 text-[${props.tc}]`}>
              {props.icon || null}
              {props.title || null}
            </div>
            <div>{props.buttonType}</div>
          </div>

          <div className="text-[#6B6B6B] flex justify-start font-Poppins text-sm font-medium ">
            {props.subtitle || null}
          </div>
        </div>
      }
      headStyle={{ backgroundColor: props.bg }}
    >
      {props.children}
    </Card>
  );
};
const Cards = (props) => {
  return (
    <Skeleton loading={props.loading}>
   <div className="lg:item-center mx-auto p-2  w-full rounded-[10px] border-[4px] border-[white] bg-[white]   shadow-bottom shadow-gray">
  {props.children}
</div>


    </Skeleton>
  );
};

const AntdCheckbox = (props) => {
  const tempRule = [
    {
      required: props.required,
      message: `Please check ${props.placeholder}`,
    },
  ];

  const localrules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;
  return (
    <FormItem {...props} valuePropName="checked" localrules={localrules}>
      <div className="flex items-center gap-0">
        {props.placeholder && (
          <div className="mr-2 font-Poppins text-xs font-bold">
            {props.placeholder}
          </div>
        )}
        <div className="flex items-center gap-0">
          <Checkbox.Group>
            {props.options?.map((item) => (
              <div key={item.value}>
                <Checkbox value={item.value}>{item.option}</Checkbox>
              </div>
            ))}
          </Checkbox.Group>
        </div>
      </div>
    </FormItem>
  );
};

const AntRadio = (props) => {
  const [value, setValue] = React.useState(1);

  const OnChange = (e) => {
    setValue(e.target.value);
    props.handleRadioChange instanceof Function &&
      props.handleRadioChange(e.target.value);
  };
  const tempRule = [
    {
      required: props.required,
      message: `Please select ${props.label}`,
    },
  ];
  const localrules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;
  return (
    <FormItem {...props} localrules={localrules}>
      <Radio.Group onChange={OnChange} value={value}>
        <div className="flex items-center gap-0">
          {props.options?.map((item) => (
            <div key={item.value}>
              <Radio value={item.value}>{item.option}</Radio>
            </div>
          ))}
        </div>
      </Radio.Group>
    </FormItem>
  );
};

const AntModal = (props) => {
  const handleCancel = () => {
    props.setOpen({ open: false });
  };
  return (
    <div className="overflow-hidden">
      <Modal
        className="rounded-[130px] p-10"
        title={
          props.title ? (
            <div>
              <h5 className="top-0 mb-0  text-start text-base font-semibold uppercase text-[white]">
                {props.title}
              </h5>
            </div>
          ) : null
        }
        open={props.open?.open}
        footer={false}
        getContainer={false}
        onCancel={handleCancel}
        centered={false}
        maskClosable={props?.open?.mask || false}
        wrapClassName="custom-modal"
        // onOk={handleOk}
        closeIcon={props.open?.icon || <AiOutlineClose />}
        okText="Save"
        okButtonProps={{
          className: "bg-main",
        }}
        width="70vw"
        style={{
          top: "20px",
        }}
      >
        {props.children}
      </Modal>
    </div>
  );
};

const AntAction = (props) => {
  const onSetViewEdit = (e) => {
    if (Number(e.key) <= 2) {
      return props.setOpen({
        open: true,
        data: props?.data,
        edit: Number(e.key) === 2 ? true : false,
        title:
          Number(e.key) === 2
            ? `Edit ${props.title}`
            : `${props.title} Details`,
      });
    }
  };
  const handelConfirm=()=>{
    props.delet.mutate(props.id)
  }
  return (
    <div className="flex items-center gap-2">
      <Dropdown
        placement="topCenter"
        arrow
        overlay={
          <Menu onClick={onSetViewEdit}>
            {props?.action?.map((item) => (
              <Menu.Item key={item.key}>
                <div>
                  {item.key === 3 ? (
                    <Popconfirm
                      placement="bottomLeft"
                      title="Are you want to sure delete!"
                      description={
                        <div className="flex justify-center text-center">
                          {props.title}
                        </div>
                      }
                      // onConfirm={confirm}
                      okText={
                        <div className="text-red hover:text-[red] ">OK</div>
                      }
                      cancelText={<div className="hover:text-main text-sm font-Poppins ">Cancel</div>}
                      // onOpenChange={() => console.log("open change")}
                      onConfirm={handelConfirm}
                    >
                      <div className="flex w-full items-center gap-1 text-red">
                        {props?.action[2].icon} {props?.action[2].label}
                      </div>
                    </Popconfirm>
                  ) : (
                    <div
                      className={`flex w-full items-center gap-1  ${
                        item.key === 1 ? "text-[green]" : "text-main"
                      }`}
                    >
                      {item.icon} {item.label}
                    </div>
                  )}
                </div>
              </Menu.Item>
            ))}
          </Menu>
        }
      >
        <HiDotsHorizontal className="text-2xl" />
      </Dropdown>
    </div>
  );
};

const AntSwitch = (props) => {
  const [value, setValue] = React.useState(props.checked || false);

  const onChangeSwitch = (checked) => {
    setValue(checked);
    props.handleSwitch instanceof Function && props.handleSwitch(checked);
  };
  const tempRule = [
    {
      required: props.required,
      message: `Please select ${props.label}`,
    },
  ];
  const localrules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule;

  return (
    <FormItem {...props} localrules={localrules}>
      <div className="flex items-center gap-1">
        <div>
          <Switch onChange={onChangeSwitch} checked={props.check || value} size="small" defaultChecked={props.defaultChecked}/>
        </div>
        <div className="mt-1 font-Poppins text-sm font-medium text-[#4C4C4C]">
          {props.label}
        </div>
      </div>
    </FormItem>
  );
};
const Common = {
  LinkButton,
  Inputs,
  Selects,
  Buttons,
  Passwords,
  ImageUpload,
  notifications,
  Tables,
  DatePickers,
  normFile,
  AntRadio,
  Header,
  CustomSkeleton,
  AntdCard,
  FormLabel,
  Cards,
  AntdCheckbox,
  AntModal,
  AntAction,
  AntSwitch,
};
export default Common;
