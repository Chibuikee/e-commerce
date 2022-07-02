import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
        <div>
          <h1>Get's started with Bajuku</h1>
          <p>
            Already have an account?
            <a href="#">
              <span>Log in</span>
            </a>
          </p>
        </div>
        <h1>Registration </h1>
        <img src="" alt="Logo" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            name="Username"
            placeholder="Username"
            {...register("Username", { required: "Username is required" })}
          ></input>
        </div>
        <p style={{ color: "red" }}>{errors.Username?.message}</p>
        <div className="field">
          <label>Email</label>
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
          <label>Password</label>
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
