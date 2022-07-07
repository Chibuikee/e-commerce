import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ClotheContext } from "../ClotheContext";

function Favourites() {
  const { favouritearr, handleCart, addAll } = useContext(ClotheContext);

  return (
    <section>
      <div>
        <Link to="/HomePage/Cart">
          <img src="/IconsAndImg/shopping/goback.png" alt="goback" />
        </Link>
        <h3>Favourite</h3>
      </div>
      {favouritearr.map((item) => (
        <div key={item.name}>
          <Link to={`/HomePage/${item.name}`}>
            <img src={item.path} alt={item.name} />
            <span>{item.name}</span>
          </Link>
          <h3>Rp{item.price}</h3>
          <img
            onClick={() => handleCart(item)}
            src="/IconsAndImg/shop/Arrow.png"
            alt="add to basket icon"
          />
        </div>
      ))}

      {favouritearr.length !== 0 ? (
        <button onClick={() => addAll(favouritearr)}>
          Add all to cart<span>Rp1203</span>
        </button>
      ) : (
        <h1>YOU ARE YET TO LIKE ANY ITEM</h1>
      )}
    </section>
  );
}

export default Favourites;
