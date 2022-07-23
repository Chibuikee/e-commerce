import React, { useContext } from "react";
import { ClotheContext } from "../ClotheContext";
import Navbar from "./navbar";
import FilterSection from "./filtersection";
import { Link, Outlet } from "react-router-dom";
export default function Homepage() {
  const { Clothesinfo, setClothesinfo, setSelected } =
    useContext(ClotheContext);
  function toggleIsFavourite(item) {
    setClothesinfo((prev) =>
      prev.map((clothe) =>
        clothe.name === item.name
          ? { ...clothe, isFavourite: !clothe.isFavourite }
          : clothe
      )
    );
  }

  const clothelist = Clothesinfo.map((item) => (
    <div key={item.name} className="">
      <Link to={`/HomePage/${item.name}`}>
        <div className="item-img-holder">
          <img
            className="item-img"
            onClick={() => setSelected(item)}
            src={process.env.PUBLIC_URL + item.path}
            alt="clothe"
          />
        </div>
      </Link>
      <div className="item-list">
        <ul>
          <li className="item-name">{item.name}</li>
          <li className="item-price">{item.price}</li>
        </ul>
        <img
          className="favourite-icon"
          onClick={() => {
            toggleIsFavourite(item);
          }}
          style={{
            backgroundColor: `${item.isFavourite ? "red" : "white"}`,
            backgroundClip: "border-box",
          }}
          src={process.env.PUBLIC_URL + "/IconsAndImg/shop/heart.svg"}
          alt="favourite icon"
        />
      </div>
    </div>
  ));

  return (
    <section className="Homepage">
      <Navbar />
      <Outlet />
      <FilterSection />
      <div className="clothe-list">{clothelist}</div>
    </section>
  );
}
