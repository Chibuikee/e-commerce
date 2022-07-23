import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ClotheContext } from "../ClotheContext";

function Favourites() {
  const { favouritearr, handleCart, addAll } = useContext(ClotheContext);

  return (
    <section>
      <div id="favourite-header">
        <Link to="/HomePage">
          <img
            src={process.env.PUBLIC_URL + "/IconsAndImg/shopping/goback.png"}
            alt="goback"
          />
        </Link>
        <h3>Favourite</h3>
      </div>
      <div id="favourite-ctn">
        {favouritearr.map((item) => (
          <div className="favourite-item" key={item.name}>
            <Link to={`/HomePage/${item.name}`}>
              <img
                className="favourite-item-img"
                src={process.env.PUBLIC_URL + item.path}
                alt={item.name}
              />
              <span className="fav-item-name">{item.name}</span>
            </Link>
            <div>
              <h3>Rp{item.price}</h3>
              <img
                onClick={() => handleCart(item)}
                src={process.env.PUBLIC_URL + "/IconsAndImg/shop/Arrow.png"}
                alt="add to basket icon"
              />
            </div>
          </div>
        ))}
      </div>

      {favouritearr.length !== 0 ? (
        <div id="checkout-btn">
          <Link to="CheckoutPopup">
            <button onClick={() => addAll(favouritearr)}>
              Add all to cart<span>Rp1203</span>
            </button>
          </Link>
        </div>
      ) : (
        <h1>YOU ARE YET TO LIKE ANY ITEM</h1>
      )}
      <Outlet />
    </section>
  );
}

export default Favourites;
