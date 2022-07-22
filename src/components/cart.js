import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ClotheContext } from "../ClotheContext";
import jsonfiles from "../files.json";

export default function Cart() {
  const [jsonfilesarr] = useState(() => jsonfiles);

  const homemenuobj = jsonfilesarr.find((item) => item.id === "homepagemenu");
  const imgArr = homemenuobj.img;
  const { cartitems, handleCart, handleRemove, removeItem } =
    useContext(ClotheContext);
  const productPrice = cartitems.reduce((a, c) => a + c.price * c.qty, 0);
  const logo = imgArr.find((item) => item.name === "LOGO");
  return (
    <section>
      <div id="cart-header">
        <Link to="/HomePage">
          <img src="/IconsAndImg/shopping/goback.png" alt="goback" />
        </Link>
        <h2>Cart</h2>
        <img src="/IconsAndImg/shop/LOGO.png" alt="Logo" />
      </div>
      <div>{cartitems.length === 0 && <h2>Cart is empty</h2>}</div>
      <div className="cart-item-container">
        {cartitems.map((item) => (
          <div className="cart-item" key={item.name}>
            <div className="cart-item-id">
              <img className="cart-item-img" src={item.path} />
              <div>
                <h2>{item.name}</h2> <h2>{item.price}</h2>
              </div>
            </div>

            <div className="cart-action-ctn">
              <img
                className="cart-dlt-btn"
                onClick={() => removeItem(item)}
                src="/IconsAndImg/sidebar/delete-btn.png"
                alt="delete"
              />
              <div className="cart-action-btn">
                <button onClick={() => handleRemove(item)}>
                  <span>-</span>
                </button>
                <h2>{item.qty}</h2>
                <button onClick={() => handleCart(item)}>
                  <span>+</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cartitems.length !== 0 && (
        <div id="checkout-btn">
          <Link to="/Cart/CardMethod">
            <button>
              Go to checkout<span>RP{productPrice}</span>
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}
