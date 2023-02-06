import Image from "next/image";
import React from "react";
import Logo from "../../Asset/Images/colan-logo.png";
import router from "next/router";
import Head from "next/head";

const NewLogin = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="context">
        <div className="login-body">
          <div className="login-card">
            <Image src={Logo} width={300} height={100} alt="" />
            <h2>Login</h2>
            <h3>Enter your credentials</h3>
            {/* <form className="login-form"> */}
            <div className="username">
              <input
                // spellcheck="false"
                className="control"
                type="text"
                placeholder="Username"
                // onkeyup="handleChange(event)"
                // onKeyDown="handleStartTyping()"
              />
              <div id="spinner" className="spinner"></div>
            </div>
            <input
              // spellcheck="false"
              className="control"
              id="password"
              type="password"
              placeholder="Password"
            />
            <button
              className="sign-btn"
              onClick={() => {
                router.push("/admin/dashboard");
              }}
            >
              Login
            </button>
            {/* </form> */}
          </div>
        </div>
        {/* <h1>Pure Css Animated Background</h1> */}
      </div>
    </>
  );
};

export default NewLogin;
