import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div id="sidebar-section">
      <div id="sidebar-container">
        <Link id="sidebar-close-icon-ctner" to="/HomePage">
          <img
            id="sidebar-close-icon"
            src="/IconsAndImg/sidebar/cancel.png"
            alt="close"
          />
        </Link>
        <div className="sidebar-id">
          <img
            className="sidebar-id-img"
            src="/IconsAndImg/sidebar/dpframe.png"
            alt="dpframe"
          />
          <div>
            <h3 className="sidebar-id-name" contentEditable="true">
              Full Name
            </h3>
            <span className="sidebar-id-email">sopewenike@gmail.com</span>
          </div>
          <img
            className="sidebar-id-edit"
            src="/IconsAndImg/sidebar/edit.png"
            alt="edit"
          />
        </div>
        <div className="sidebar-actions-container">
          <div className="sidebar-actions">
            <img src="/IconsAndImg/sidebar/tote.png" alt="tote" />{" "}
            <h3>Orders</h3>
          </div>
          <div className="sidebar-actions">
            <img
              className="sidebar-action-icon"
              src="/IconsAndImg/sidebar/myDetails.png"
              alt="myDetails"
            />
            <h3>My Details</h3>
          </div>
          <div className="sidebar-actions">
            <img
              className="sidebar-action-icon"
              src="/IconsAndImg/sidebar/delivery.png"
              alt="delivery"
            />
            <h3>Delivery Address</h3>
          </div>

          <div className="sidebar-actions">
            <img
              className="sidebar-action-icon"
              src="/IconsAndImg/sidebar/payment.png"
              alt="payment method"
            />
            <h3>Payment Methods</h3>
          </div>
          <div className="sidebar-actions">
            <img
              className="sidebar-action-icon"
              src="/IconsAndImg/sidebar/promo.png"
              alt="promo code icon"
            />
            <h3>Promo Code</h3>
          </div>
          <div className="sidebar-actions">
            <img
              className="sidebar-action-icon"
              src="/IconsAndImg/sidebar/Bell icon.png"
              alt="Bell icon"
            />{" "}
            <h3>Notifications</h3>
          </div>
          <div className="sidebar-actions">
            <img
              className="sidebar-action-icon"
              src="/IconsAndImg/sidebar/help.png"
              alt="payment method"
            />{" "}
            <h3>Help</h3>
          </div>
          <div className="sidebar-actions">
            <img
              className="sidebar-action-icon"
              src="/IconsAndImg/sidebar/About.png"
              alt="About"
            />{" "}
            <h3>About</h3>
          </div>

          <h3>LOG OUT</h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
