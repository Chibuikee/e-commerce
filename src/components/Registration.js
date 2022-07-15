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
  // console.log(register);
  return (
    <section>
      <pre> {JSON.stringify(userInfo, undefined, 2)} </pre>/*remove this to stop
      displaying form input object */
      <div>
        <img
          src="/IconsAndImg/shop/regImg.png"
          alt="Background image of registration"
        />
        <Link to="/">
          <img src="/IconsAndImg/shopping/goback.png" alt="goback" />
        </Link>
        <div>
          <h1>Get's started with Bajuku</h1>
          <p>
            Already have an account?
            <Link to="/Signin">
              <span>Log in</span>
            </Link>
          </p>
        </div>
        <h1>REGISTER </h1>
        <Link to="/HomePage">
          <img src="/IconsAndImg/shop/LOGO 1.png" alt="Logo" />
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">

          <label className="name">NAME</label>
          <br/>
          <input className="username"
            type="text"
            name="Username"
            placeholder="name@email.com"
            {...register("Username", {required: "Username is required" })}
          ></input>
        </div>
        <p className="errors" style={{ color: "red" }}>{errors.Username?.message}</p>
        <div className="field">

          <label className="email-label">EMAIL</label>
          <br/>
          <input className="email"

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
        <p className="errors" style={{ color: "red" }}>{errors.Email?.message}</p>
        <div className="field">

          <label className="password-label">PASSWORD</label>
          <br/>
          <input className="password"

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
          <label className="agreement-label">By joining I agree to receive emails from Bajuku.</label>
          <input className="checkbox"
            type="checkbox"
            name="checker"
            {...register("checker")}
          ></input>
        </div>
      </form>
    </section>
  );
}
