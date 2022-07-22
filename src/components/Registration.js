import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
export default function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  function onSubmit(data) {
    setUserInfo(data);
  }
  return (
    <section>
      {/* <pre> {JSON.stringify(userInfo, undefined, 2)} </pre>remove this to stop
      displaying form input object  */}
      <div className="reg-container">
        <div id="reg-heading">
          <Link to="/">
            <span id="reg-back">&#60;</span>
          </Link>
          <div id="reg-note">
            <h1>Get's started with Bajuku</h1>
            <p>
              Already have an account?
              <Link to="/Signin">
                <span>Log in</span>
              </Link>
            </p>
          </div>
          <h1 id="reg-note2">REGISTER </h1>
          <Link id="reg-logo-ctn" to="/HomePage">
            <img src="/IconsAndImg/shop/LOGO 1.png" alt="Logo" />
          </Link>
        </div>
        <form id="reg-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="reg-field-name">
            <label className="reg-label-name">NAME</label>

            <input
              className="username"
              type="text"
              name="Username"
              placeholder="name@email.com"
              {...register("Username", { required: "Username is required" })}
            ></input>
          </div>
          <p className="errors" style={{ color: "red" }}>
            {errors.Username?.message}
          </p>
          <div className="reg-field-email">
            <label className="reg-label-email">EMAIL</label>

            <input
              className="email"
              type="email"
              name="Email"
              placeholder="name@email.com"
              {...register("Email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                  message:
                    "this is not a valid email" /*delete pattern later if it doesn't work */,
                },
              })}
            ></input>
          </div>
          <p className="errors" style={{ color: "red" }}>
            {errors.Email?.message}
          </p>
          <div className="reg-field-password">
            <label className="reg-label-password">PASSWORD</label>

            <input
              className="password"
              type="password"
              name="Password"
              placeholder="Password"
              {...register("Password", {
                required: "Password is required",
              })}
            ></input>
          </div>
          <p className="errors-password">{errors.Password?.message}</p>

          <button className="register-btn">REGISTER</button>

          <div>
            <label className="agreement-label">
              By joining I agree to receive emails from Bajuku.
            </label>
            <input
              className="checkbox"
              type="checkbox"
              name="checker"
              {...register("checker")}
            ></input>
          </div>
        </form>
      </div>
    </section>
  );
}
