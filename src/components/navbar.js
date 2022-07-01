import React, { useContext, useState } from "react";
import { ClotheContext } from "../ClotheContext";
import jsonfiles from "../files.json";
export default function Navbar() {
  const [jsonfilesarr] = useState(() => jsonfiles);
  const { cartitems, Clothesinfo } = useContext(ClotheContext);
  const homemenuobj = jsonfilesarr.find((item) => item.id === "homepagemenu");
  const imgArr = homemenuobj.img;
  const filteredimgArr = imgArr
    .filter((item) => item.name !== "LOGO")
    .filter((item) => item.name !== "Cart")
    .filter((item) => item.name !== "heart")
    .filter(
      (item) => item.name !== "notification"
    ); /*filtered out the individual icons and used find to reassign them */
  const logo = imgArr.find((item) => item.name === "LOGO");
  const Cart = imgArr.find((item) => item.name === "Cart");
  const heart = imgArr.find((item) => item.name === "heart");
  const notification = imgArr.find((item) => item.name === "notification");
  const favouriteNo = Clothesinfo.filter((item) => item.isFavourite === true);
  const menuicons = filteredimgArr.map((item) => (
    <div key={item.name}>
      <img src={item.path} alt={item.name} />
    </div>
  ));

  return (
    <section>
      <div className="logoAndmenuIcons-container">
        <div>
          <img src={logo.path} alt={logo.name} />
        </div>

        <a href="#" className="notification">
          <img src={notification.path} alt={notification.name} />
          <span className="badge">3</span>
        </a>
        <a href="#" className="notification">
          <img src={Cart.path} alt={Cart.name} />
          <span className="badge">{cartitems.length}</span>
        </a>
        <a href="#" className="notification">
          <img src={heart.path} alt={heart.name} />
          <span className="badge">{favouriteNo.length}</span>
        </a>

        {menuicons}
      </div>
    </section>
  );
}
