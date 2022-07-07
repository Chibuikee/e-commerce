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
          <label>NAME</label>
          <input
            type="text"
            name="Username"
            placeholder="Name"
            {...register("Username", { required: "Username is required" })}
          ></input>
        </div>
        <p style={{ color: "red" }}>{errors.Username?.message}</p>
        <div className="field">
          <label>EMAIL</label>
          <input
            type="email"
            name="Email"
            placeholder="Valid Email"
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
        <p style={{ color: "red" }}>{errors.Email?.message}</p>
        <div className="field">
          <label>PASSWORD</label>
          <input
            type="password"
            name="Password"
            placeholder="Password"
            {...register("Password", {
              required: "Password is required",
            })}
          ></input>
        </div>
        <p style={{ color: "red" }}>{errors.Password?.message}</p>

        <button>REGISTER</button>

        <div>
          <label>By joining I agree to receive emails from Bajuku.</label>
          <input
            type="checkbox"
            name="checker"
            {...register("checker")}
          ></input>
        </div>
      </form>
    </section>
  );
}
