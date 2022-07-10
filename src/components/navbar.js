import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ClotheContext } from "../ClotheContext";
import jsonfiles from "../files.json";
export default function Navbar() {
  const [jsonfilesarr] = useState(() => jsonfiles);
  const { cartitems, Clothesinfo } = useContext(ClotheContext);
  const homemenuobj = jsonfilesarr.find((item) => item.id === "homepagemenu");
  const imgArr = homemenuobj.img;
  const heart = imgArr.find((item) => item.name === "heart");
  const favouriteNo = Clothesinfo.filter((item) => item.isFavourite === true);
  return (
    <section>
      <div className="logoAndmenuIcons-container">
        <Link to="/HomePage" className="logo">
          <img src="/IconsAndImg/shop/LOGO 1.png" alt="LOGO" />
        </Link>
        <div className="menuicons-container">
          <Link to="/HomePage/Notifications" className="notification">
            <img src="/IconsAndImg/shop/notification.png" alt="Notification" />
            <span className="badge">3</span>
          </Link>
          <Link to="/Cart" className="notification">
            <img src="/IconsAndImg/shop/Cart icon.png" alt="Cart" />
            <span className="badge">{cartitems.length}</span>
          </Link>
          <Link to="/HomePage/Favourites" className="notification">
            <img src={heart.path} alt={heart.name} />
            {favouriteNo.length !== 0 && (
              <span className="badge">{favouriteNo.length}</span>
            )}
          </Link>
          <Link to="/HomePage/Search">
            <img src="/IconsAndImg/shop/Search Icon.png" alt="Search icon" />
          </Link>
          <Link to="/HomePage/Sidebar">
            <img src="/IconsAndImg/shop/Menu.png" alt="Menu icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}
