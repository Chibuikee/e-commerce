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
      <div className="filter-options">
        <ul className="filter-list">
          <li>Popular</li>
          <li>Men</li>
          <li>Women</li>
          <li>Sale</li>
        </ul>
      </div>
      <hr className="line"></hr>
      <div className="filtermenuIcons-container">
        <div className="filter-sort">
          <h4 className="filter-text">FILTER & SORT</h4>
          <img className="filter-icon" src={filtericon.path} alt={filtericon.name} />
        </div>
        <div className="view-icons">
        {viewicons}
        </div>
      </div>
    </section>
  );
}
