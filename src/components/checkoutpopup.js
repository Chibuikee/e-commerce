import React from "react";
import { Link } from "react-router-dom";
function CheckoutPopup() {
  return (
    <div className="fav-checkout-popup">
      <div id="fav-checkout-popup-ctn">
        <div className="fav-checkout-header">
          <h3>Checkout</h3>
          <Link to="/HomePage/Favourites">
            <img
              src={process.env.PUBLIC_URL + "/IconsAndImg/shop/cancel.png"}
              alt="cancel"
            />
          </Link>
        </div>
        <div className="fav-payment-options">
          <div id="delivery-option">
            <h3>Delivery</h3>
            <div className="checkout-option-1">
              <h3>Selected Method</h3>
              <img
                src={
                  process.env.PUBLIC_URL + "/IconsAndImg/sidebar/forward.png"
                }
                alt="forward"
              />
            </div>
          </div>
          <div id="card-option">
            <h3>Payment</h3>
            <div className="checkout-option-2">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/IconsAndImg/mastercardicon/card.png"
                }
                alt="card logo"
              />
              <img
                src={
                  process.env.PUBLIC_URL + "/IconsAndImg/sidebar/forward.png"
                }
                alt="forward"
              />
            </div>
          </div>
          <div id="promo-code-option">
            <h3>Promo Code</h3>
            <div className="checkout-option-3">
              <h3>Pick discount</h3>
              <img
                src={
                  process.env.PUBLIC_URL + "/IconsAndImg/sidebar/forward.png"
                }
                alt="forward"
              />
            </div>
          </div>
          <div id="total-cost-option">
            <h3>Total Cost</h3>
            <div className="checkout-option-4">
              <h3>
                Rp<span>350.000</span>
              </h3>
              <img
                src={
                  process.env.PUBLIC_URL + "/IconsAndImg/sidebar/forward.png"
                }
                alt="forward"
              />
            </div>
          </div>
        </div>
        <div id="TandC-ctn">
          <p>By placing an order you agree to our Terms And Conditions.</p>
          <Link to="/Cart/CardMethod">
            <button>PLACE ORDER</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPopup;
