import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
      <img src="/IconsAndImg/shop/loginImg.png" alt="loginImg" />
      <Link to="/">
        <img src="/IconsAndImg/shopping/goback.png" alt="goback" />
      </Link>
      <h1>Welcome Back</h1>
      <p>
        Yay! You're back! Thanks for shopping with us. We have excited deals and
        promotions going on, grab your pick now!
      </p>
      <Link to="/HomePage">
        <img src="/IconsAndImg/shop/LOGO 1.png" alt="Logo" />
      </Link>
      <form onSubmit={handleSubmit}>
        <h1>LOG IN</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>EMAIL</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>PASSWORD</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <Link to="/HomePage">
            <button className="sign-button ">LOG IN</button>
          </Link>
        </div>
      </form>
      <p>
        Not registered yet?<Link to="/">Create Account</Link>
      </p>
    </div>
  );
}

export default App;
