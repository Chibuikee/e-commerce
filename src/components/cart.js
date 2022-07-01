import React, { useContext } from "react";
import { ClotheContext } from "../ClotheContext";

export default function Cart() {
  const { cartitems, handleCart, handleRemove, removeItem } =
    useContext(ClotheContext);

  return (
    <section>
      <div>
        <img src="" alt="goback" />
        <div>
          <h2>Cart</h2>
          <img src="" alt="Logo" />
        </div>
      </div>
      <div>{cartitems.length === 0 && <h2>Cart is empty</h2>}</div>
      <div>
        {cartitems.map((item) => (
          <div key={item.name}>
            <img onClick={() => removeItem(item)} src="" alt="delete" />
            <img src={item.path} />
            <div>
              <h2>{item.name}</h2> <h2>{item.price}</h2>
            </div>
            <div>
              <button onClick={() => handleRemove(item)}>-</button>
              <h2>{item.qty}</h2>
              <button onClick={() => handleCart(item)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <button>
        Go to checkout<span>Rp750.000</span>
      </button>
    </section>
  );
}
