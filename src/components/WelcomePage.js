import React from "react";
import { Link } from "react-router-dom";
function WelcomePage() {
  return (
    <section>
      <img
        src="/IconsAndImg/shop/welcomeimg.png"
        alt="welcome background image"
      />
      <h1>Welcome to bajuku.com</h1>
      <p>
        Bajuku was born as a medium to showcase anxieties and humanoid paranoia
        in an art form, in which each creation contains evil and terrifying
        concept to it. However, each masterpiece also holds a deeper meaning to
        it that needs to be told. Therefore, Bajuku is The Art of Fear and
        Anxiety.
      </p>
      <Link to="/Signin">
        <button>Log in</button>
      </Link>
      <Link to="/Registration">
        <button>Register</button>
      </Link>
    </section>
  );
}

export default WelcomePage;
