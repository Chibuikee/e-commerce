import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <section style={{ background: "black", color: "white" }}>
      <div>
        <Link to="/HomePage">
          <img src="/IconsAndImg/sidebar/cancel.png" alt="close" />
        </Link>
        <div>
          <img src="/IconsAndImg/sidebar/dpframe.png" alt="dpframe" />
          <div>
            <h3>Full Name</h3>
            <span>sopewenike@gmail.com</span>
          </div>
          <img src="/IconsAndImg/sidebar/edit.png" alt="edit" />
        </div>
        <div>
          <img src="/IconsAndImg/sidebar/tote.png" alt="tote" /> <h3>Orders</h3>
        </div>
        <div>
          <img src="/IconsAndImg/sidebar/myDetails.png" alt="myDetails" />
          <h3>My Details</h3>
        </div>
        <div>
          <img src="/IconsAndImg/sidebar/delivery.png" alt="delivery" />
          <h3>Delivery Address</h3>
        </div>
        <div>
          <img src="/IconsAndImg/sidebar/payment.png" alt="payment method" />{" "}
          <h3>Payment Methods</h3>
        </div>
        <div>
          <img src="/IconsAndImg/sidebar/promo.png" alt="promo code icon" />{" "}
          <h3>Promo Code</h3>
        </div>
        <div>
          <img src="/IconsAndImg/sidebar/Bell icon.png" alt="Bell icon" />{" "}
          <h3>Notifications</h3>
        </div>
        <div>
          <img src="/IconsAndImg/sidebar/help.png" alt="payment method" />{" "}
          <h3>Help</h3>
        </div>
        <div>
          <img src="/IconsAndImg/sidebar/About.png" alt="About" />{" "}
          <h3>About</h3>
        </div>

        <h3>LOG OUT</h3>
      </div>
    </section>
  );
}

export default Sidebar;
