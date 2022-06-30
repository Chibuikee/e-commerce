import React, { useContext, useState } from "react";
import { ClotheContext } from "../ClotheContext";

export default function Clothepreview() {
  const [quantity, setQuantity] = useState(1);
  const { selected } = useContext(ClotheContext);

  const size = selected.sizes.map((sizesample) => (
    <button>{sizesample.id}</button>
  ));
  return (
    <section>
      {/* <div className="clotheimgs">{clotheimgPreview}</div> */}
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
          <i onClick={() => setQuantity(quantity + 1)}>Add</i>
          <h2>{quantity}</h2>
          <i onClick={() => setQuantity(quantity - 1)}>remove</i>
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
      <button>add to cart</button>
    </section>
  );
}
