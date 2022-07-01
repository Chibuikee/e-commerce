import React, { useState } from "react";
import jsonfiles from "../files.json";
export default function FilterSection() {
  const [jsonfilesarr] = useState(() => jsonfiles);
  const filterAndDisplayobj = jsonfilesarr.find(
    (item) => item.id === "filterAndDisplay"
  );
  const imgArr = filterAndDisplayobj.img;
  const filteredimgArr = imgArr.filter(
    (item) => item.name !== "filter"
  ); /*forEach could be used instead but for code clarity flter and find is used */
  const filtericon = imgArr.find((item) => item.name == "filter");
  const viewicons = filteredimgArr.map((item) => (
    <div key={item.name}>
      <img src={item.path} alt={item.name} />
    </div>
  ));

  return (
    <section>
      <div className="filteroptions">
        <ul>
          <li>Popular</li>
          <li>Men</li>
          <li>Women</li>
          <li>Sale</li>
        </ul>
      </div>
      <div className="logoAndmenuIcons-container">
        <div>
          <h3>FILTER & SORT</h3>
          <img src={filtericon.path} alt={filtericon.name} />
        </div>
        {viewicons}
      </div>
    </section>
  );
}
