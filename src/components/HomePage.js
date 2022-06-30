import React, { useContext } from "react";
import { ClotheContext } from "../ClotheContext";
export default function Homepage() {
  const { Clothesinfo, setClothesinfo, selected, setSelected } =
    useContext(ClotheContext);

  console.log(selected);
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
    <div className="">
      <img onClick={() => setSelected(item)} src={item.path} alt="clothe" />
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
      <div className="">
        <a href="#">
          <img src={Clothesinfo.Aphrodite} alt="logo" />
        </a>
        <div>
          <img src="" alt="notification icon" />
          <img src="" alt="basket icon" />
          <img src="" alt="favourite icon" />
          <img src="" alt="search icon" />
          <img src="" alt="hamburger icon" />
        </div>
      </div>

      <div className="">
        <div>
          <img src="" alt="filter icon" />
        </div>
        <div>
          <img src="" alt="grid view icon" />
          <img src="" alt="full view icon" />
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {clothelist}
      </div>
    </section>
  );
}
