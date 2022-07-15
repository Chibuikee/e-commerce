import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import jsonfiles from "../files.json";
export default function FilterSection() {
  const [jsonfilesarr] = useState(() => jsonfiles);
  const filterAndDisplayobj = jsonfilesarr.find(
    (item) => item.id === "filterAndDisplay"
  );
  const imgArr = filterAndDisplayobj.img;
  const filteredimgArr = imgArr.filter((item) => item.name !== "filter");
  const filtericon = imgArr.find((item) => item.name == "filter");
  const viewicons = filteredimgArr.map((item) => (
    <div key={item.name}>
      <img src={item.path} alt={item.name} />
    </div>
  ));
  const activebar = ({ isActive }) => {
    return {
      color: isActive ? "red" : "black",
    };
  };
  return (
    <section>
      <div className="filter-options">
        <ul className="filter-list">
          <NavLink
            to="/HomePage/Popular"
            style={activebar}
            className="filterbar"
          >Popular </NavLink>
           <NavLink to="/HomePage/Men" style={activebar} className="filterbar">
            Men
          </NavLink>
          <NavLink to="/HomePage/Women" style={activebar} className="filterbar">
            Women
          </NavLink>
          <NavLink to="/HomePage/Sale" style={activebar} className="filterbar">
            Sale
          </NavLink>
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
