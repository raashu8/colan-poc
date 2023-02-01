import Image from "next/image";
import React from "react";
import Logo from "../../Asset/Images/colan-logo.png";
import router from "next/router";

const Login = () => {
  return (
    <>
      <div className="header">
        <div className="inner-header flex">
          {/* <!-- CARD SECTION  --> */}
          <div className="card">
            {/* <form> */}
            <Image src={Logo} width={200} height={100} alt="" />
            <div className="textt">
              <input type="text" placeholder="Enter your email adress here" />
            </div>
            <div className="pass">
              <input type="password" placeholder="Enter your password" />
            </div>
            <div className="butn">
              <button
                id="butn1"
                onClick={() => {
                  router.push("/admin/main");
                }}
              >
                LOGIN
              </button>
            </div>
            <a href="#!">
              <span
                id="sp1"
                style={{
                  float: "left",
                  color: "#1491bf",
                  paddingTop: "15px",
                }}
              >
                SingUp
              </span>
            </a>
            &nbsp;
            <span
              style={{
                float: "left",
                // color: "#1491bf",
                paddingTop: "15px",
              }}
            >
              &nbsp;|
            </span>
            <a href="#!">
              <span
                id="sp2"
                style={{
                  float: "left",
                  color: "#1491bf",
                  paddingTop: "15px",
                }}
              >
                &nbsp; Forgot password?
              </span>
            </a>
            {/* </form> */}
          </div>
        </div>
        {/* WAVE THERE */}

        {/* WAVE  END THERE */}
      </div>
    </>
  );
};

export default Login;
