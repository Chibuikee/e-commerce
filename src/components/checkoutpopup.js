import React from "react";
import { Link } from "react-router-dom";
function CheckoutPopup() {
  return (
    <section>
      <div>
        <div>
          <h3>Checkout</h3>
          <img src="/IconsAndImg/shop/cancel.png" alt="cancel" />
        </div>
        <div>
          <div>
            <h3>Delvery</h3>
            <div>
              <h3>Selected Method</h3>
              <img src="/IconsAndImg/sidebar/forward.png" alt="forward" />
            </div>
          </div>
          <div>
            <h3>Payment</h3>
            <div>
              <img src="/IconsAndImg/mastercardicon/card.png" alt="card logo" />
              <img src="/IconsAndImg/sidebar/forward.png" alt="forward" />
            </div>
          </div>
          <div>
            <h3>Promo Code</h3>
            <div>
              <h3>Pick discount</h3>
              <img src="/IconsAndImg/sidebar/forward.png" alt="forward" />
            </div>
          </div>
          <div>
            <h3>Total Cost</h3>
            <div>
              <h3>
                Rp<span>350.000</span>
              </h3>
              <img src="/IconsAndImg/sidebar/forward.png" alt="forward" />
            </div>
          </div>
        </div>
        <div>
          <p>By placing an order you agree to our Terms And Conditions.</p>
          <Link to="/Cart/CardMethod">
            <button>PLACE ORDER</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CheckoutPopup;
