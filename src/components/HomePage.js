import React, { useContext } from "react";
import { ClotheContext } from "../ClotheContext";
import Navbar from "./navbar";
import FilterSection from "./filtersection";
import { Link } from "react-router-dom";
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
  console.log(ClotheContext);
  const clothelist = Clothesinfo.map((item) => (
    <div key={item.name} className="">
      <Link to={`/HomePage/${item.name}`}>
        <img onClick={() => setSelected(item)} src={item.path} alt="clothe" />
      </Link>
      <div>
        <ul>
          <li>{item.name}</li>
          <li>{item.price}</li>
        </ul>
        <img
          onClick={() => {
            toggleIsFavourite(item);
          }}
          style={{
            backgroundColor: `${item.isFavourite ? "red" : "white"}`,
            backgroundClip: "border-box",
            border: "2px solid rgba(0, 0, 0, 1)",
          }}
          src="/IconsAndImg/shop/heart.svg"
          alt="favourite icon"
        />
      </div>
    </div>
  ));

  return (
    <section className="Homepage">
      <Navbar />
      <FilterSection />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {clothelist}
      </div>
    </section>
  );
}
