import React from "react";
import { Link } from "react-router-dom";
function PaymentSuccessful() {
  return (
    <section>
      <div id="tansaction-succssful-ctn">
        <div id="successfulcheck">
          <span>&#10003;</span>
        </div>
        <h1>Congrats! Your Order has been placed</h1>
        <p>Your items has been placed and is on it's way to being processed</p>
        <button>TRACK ORDER</button>
        <Link to="/HomePage">
          <button>CONTINUE SHOPPING</button>
        </Link>
        <Link to="/PaymentDeclined">
          <h2>BACK</h2>
        </Link>
      </div>
    </section>
  );
}

export default PaymentSuccessful;
