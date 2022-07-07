import React from "react";
import { Link } from "react-router-dom";
function PaymentDeclined() {
  return (
    <section>
      <div>
        <h1>Oh Snap! Order Failed</h1>
        <p>Looks like something went wrong while processing your request.</p>
        <img src="/IconsAndImg/shop/declined.png" />
        <Link to="/Cart/CardMethod">
          <button>TRY AGAIN</button>
        </Link>
        <h2>BACK</h2>
      </div>
    </section>
  );
}

export default PaymentDeclined;
