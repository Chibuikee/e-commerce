import React, { useContext, useState } from "react";
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
      <div>
        <img src="" alt="goback" />
        <div>
          <h2>Cart</h2>
          <img src={logo.path} alt="Logo" />
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
      {cartitems.length !== 0 && (
        <div>
          <button>
            Go to checkout<span>{productPrice}</span>
          </button>
        </div>
      )}
    </section>
  );
}
