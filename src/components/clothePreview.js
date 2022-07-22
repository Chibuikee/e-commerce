import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ClotheContext } from "../ClotheContext";

export default function Clothepreview() {
  const { selected, handleCart, cartitems, handleRemove } =
    useContext(ClotheContext);
  const [slideIndex, setSlideIndex] = useState(0);
  const size = selected.sizes.map((sizesample) => (
    <button key={sizesample.id}>{sizesample.id}</button>
  ));
  const insidecart = cartitems.find((item) => item.name == selected.name);
  const quantity = insidecart ? insidecart : { qty: 0 };

  function showDivs(n) {
    var x = selected.clotheforms;

    if (n >= x.length) {
      setSlideIndex(0);
    } else if (n < 0) {
      setSlideIndex(x.length - 1); //use the length minus 1 instead of the length only so that you dont get undefined
    } else {
      setSlideIndex(n);
    }
  }

  return (
    <section id="Preview-section">
      <div id="preview-slide">
        <Link id="prev-section-btn" to="/HomePage">
          <img src="/IconsAndImg/shopping/goback.png" alt="goback" />
        </Link>
        {selected.clotheforms && (
          <img id="previewed-clothe" src={selected.clotheforms[slideIndex]} />
        )}
        <div id="toggler">
          <img
            onClick={() => showDivs(slideIndex - 1)}
            src="/IconsAndImg/shopping/goback.png"
            alt="previousclothe"
          />
          <img
            onClick={() => showDivs(slideIndex + 1)}
            src="/IconsAndImg/sidebar/forward.png"
            alt="forward"
          />
        </div>
      </div>
      <div id="preview-title">
        <h2>The Almighty</h2>
        <div>
          <h2>{selected.name}</h2>
          <h2>{selected.price}</h2>
        </div>
        {/* <div>{staricons}</div> */}
      </div>
      <div id="preview-qty">
        <button onClick={() => handleCart(selected)}>
          <span>+</span>
        </button>
        <h2>{quantity.qty}</h2>
        <button onClick={() => handleRemove(selected)}>
          <span>-</span>
        </button>
      </div>
      <div className="description">
        <h2>Description</h2>
        <h2>{selected.name}</h2>
        <p>{selected.description}</p>
      </div>
      <div className="size">
        <h2>Size</h2>
        <div>{size}</div>
      </div>
      <button className="addcart-btn" onClick={() => handleCart(selected)}>
        ADD TO CART
      </button>
    </section>
  );
}

// slide
// showDivs(slideIndex + 1)

// useEffect(() => {
//     setCartitems(
//       cartitems.map((item) =>
//         item.name === selected.name ? { ...item, qty: item.qty } : item
//       )
//     );
//   }, [quantity, cartitems]);
// cartitems.length === 0 ? 0 : qty.qty
