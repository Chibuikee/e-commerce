import React, { useState } from "react";
import jsonfiles from "../files.json";
export default function Navbar() {
  const [jsonfilesarr] = useState(() => jsonfiles);
  const homemenuobj = jsonfilesarr.find((item) => item.id === "homepagemenu");
  const imgArr = homemenuobj.img;
  const filteredimgArr = imgArr.filter(
    (item) => item.name !== "LOGO"
  ); /*forEach could be used instead but for code clarity flter and find is used */
  const logo = imgArr.find((item) => item.name === "LOGO");
  const menuicons = filteredimgArr.map((item) => (
    <div>
      <img src={item.path} alt={item.name} />
    </div>
  ));
  console.log(imgArr);
  return (
    <section>
      <div className="logoAndmenuIcons-container">
        <div>
          <img src={logo.path} alt={logo.name} />
        </div>
        {menuicons}
      </div>
    </section>
  );
}
