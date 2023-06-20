// LoginScreen.js
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MidasLight from "../../assets/midas-light.svg";
import MidasLogoSvg from "../../assets/midas-logo.svg";
import { Form } from "antd";
import { userLogin } from "../../services/auth/authActions";
import Common from "../common";
import { HiOutlineKey, HiUserCircle } from "react-icons/hi";
import React from "react";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);

  const submitForm = async (data) => {
    setIsLoading(true);
    try {
      const response = await userLogin(data, setIsLoading)(dispatch).unwrap();
     
      if (response?.status ==='success') {
        navigate("/");
      } else {
        alert("invalid");
        navigate("/login");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="login-section position-relative flex h-screen">
        <div className="login-section-left bg-login-pattern p-3 bg-cover flex flex-col justify-between w-1/3">
          <div className="midaslight text-start">
            <img src={MidasLight} style={{ width: "140px" }} alt="MidasLight" />
          </div>
          <div className="login-section-left_footer text-light text-start items-end">
            <h2 className="mb-3 text-white" style={{ fontSize: "24px" }}>
              Check The Status
            </h2>
            <p className="mb-4 text-white" style={{ fontSize: "15px", fontWeight: "400" }}>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
              distinctio et ratione reprehenderit, libero sapiente animi
              explicabo similique placeat iure!{" "}
            </p>
            <div className="social-links flex pb-5 pt-4 ">
              <div className="mr-4">
                <i className="fab fa-facebook text-white text-base duration-200 ease-out cursor-pointer hover:opacity-50"></i>
              </div>
              <div className="mr-4">
                <i className="fab fa-linkedin text-white text-base duration-200 ease-out cursor-pointer hover:opacity-50"></i>
              </div>
              <div className="mr-4">
                <i
                  className="fab fa-whatsapp text-white text-base duration-200 ease-out cursor-pointer hover:opacity-50"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
            {/* <Button variant="outlined" style={{ backgroundColor: "white", color:"black" }}>Outlined</Button> */}
            <div
              className="version-text text-base"
              style={{ letterspacing: "1px", fontsize: "14px", color: "white" }}
            >
              MIDAS DR. HOMS V5.1.2.5
            </div>
          </div>
        </div>
        <div className="login-section-right flex items-center justify-center w-2/3 bg-login-pattern-right bg-no-repeat bg-right-bottom	">
          <div className="login-wrapper shadow self-center m-auto rounded-sm bg-white">
            <div className="text-center">
              <p className="pb-1">
                <img
                  src={MidasLogoSvg}
                  className="mx-auto"
                  style={{ width: "140px" }}
                  alt="MidasLogoSvg"
                />
              </p>
              <h5 className="font-weight-bolder text-info text-gradient pt-3 pb-3 ">
                {" "}
                Welcome back{" "}
              </h5>
              <p className="text-muted text-sm">
                Enter your username and password to sign in
              </p>

              <Form className="mt-3" onFinish={submitForm}>
                <div className="m-auto grid w-full items-center gap-x-4 md:grid-cols-12 parametercard">
                  <div className="col-span-12">
                    <Common.Inputs
                      name="username"
                      className="p-0"
                      hidelabel
                      prefix={<HiUserCircle size={15} />}
                    />
                  </div>
                  <div className="col-span-12 mt-2">
                    <Common.Passwords
                      name="password"
                      className="p-0"
                      hidelabel
                      prefix={<HiOutlineKey size={15} />}
                    />
                  </div>
                </div>
                <div className="mt-2 flex justify-end">
                  <Common.Buttons
                    
                    loading={isLoading}
                    htmlType="submit"
                    className="my-button hover:bgmain h-full btn-primary text-uppercase flex w-full items-center justify-center text-[white] bg-[#0d2f66]"
                  >Submit</Common.Buttons>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginScreen;
