import Image from "next/image";
import React from "react";
import Logo from "../../Asset/Images/colan-logo.png";
import router from "next/router";

const NewLogin = () => {
  return (
    <>
      <div class="area">
        <ul class="circles">
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
      <div class="context">
        <div className="login-body">
          <div class="login-card">
            <Image src={Logo} width={300} height={100} alt="" />
            <h2>Login</h2>
            <h3>Enter your credentials</h3>
            {/* <form class="login-form"> */}
            <div class="username">
              <input
                spellcheck="false"
                class="control"
                type="text"
                placeholder="Username"
                onkeyup="handleChange(event)"
                onkeydown="handleStartTyping()"
              />
              <div id="spinner" class="spinner"></div>
            </div>
            <input
              spellcheck="false"
              class="control"
              id="password"
              type="password"
              placeholder="Password"
            />
            <button
              className="sign-btn"
              onClick={() => {
                router.push("/admin/main");
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

