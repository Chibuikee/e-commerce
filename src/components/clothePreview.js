import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ClotheContext } from "../ClotheContext";

export default function Clothepreview() {
  const { selected, handleCart, cartitems, handleRemove } =
    useContext(ClotheContext);

  const size = selected.sizes.map((sizesample) => (
    <button key={sizesample.id}>{sizesample.id}</button>
  ));
  const insidecart = cartitems.find((item) => item.name == selected.name);
  const quantity = insidecart
    ? insidecart
    : { qty: 0 }; /*check for the item inside the cart first */
  console.log(ClotheContext);
  return (
    <section>
      {/* <div className="clotheimgs">{clotheimgPreview}</div> */}
      <Link to="/HomePage">
        <img src="/IconsAndImg/shopping/goback.png" alt="goback" />
      </Link>
      <div>
        <h2>The Almighty</h2>
        <div>
          <h2>{selected.name}</h2>
          <h2>{selected.price}</h2>
        </div>
        {/* <div>{staricons}</div> */}
      </div>
      <div>
        <div>
          <i onClick={() => handleCart(selected)}>Add</i>
          <h2>{quantity.qty}</h2>
          <i onClick={() => handleRemove(selected)}>remove</i>
        </div>
        <i></i>
      </div>
      <div className="description">
        <h2>Description</h2>
        <h2>{selected.name}</h2>
        <p>{selected.description}</p>
      </div>
      <div className="size">
        <h2>Size</h2>
        {size}
      </div>
      <button onClick={() => handleCart(selected)}>add to cart</button>
    </section>
  );
}
// useEffect(() => {
//     setCartitems(
//       cartitems.map((item) =>
//         item.name === selected.name ? { ...item, qty: item.qty } : item
//       )
//     );
//   }, [quantity, cartitems]);
// cartitems.length === 0 ? 0 : qty.qty
