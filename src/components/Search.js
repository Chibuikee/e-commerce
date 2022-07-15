import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ClotheContext } from "../ClotheContext";
function Search() {
  const { SearchStore, handleSearchStore } = useContext(ClotheContext);
  return (
    <section>
      <div>
        <div>
          <Link to="/HomePage">
            <img src="/IconsAndImg/shopping/goback.png" alt="goback" />
          </Link>
          <h3>Find Products</h3>
          <Link to="/HomePage">
            <img src="/IconsAndImg/shop/LOGO 1.png" alt="Logo" />
          </Link>
        </div>
        <div style={{ border: "solid", width: "400px" }}>
          <img src="/IconsAndImg/shop/Search Icon.png" />
          <input placeholder="Hoodies" onChange={handleSearchStore}></input>
        </div>
        <p>
          <span>{SearchStore.length}</span> Items found for your keyword
        </p>
        {SearchStore.map((item) => (
          <div key={item.name}>
            <Link to={`/HomePage/${item.name}`}>
              <img src={item.path} alt={item.name} />
              <span>{item.name}</span>
            </Link>
            <h3>Rp{item.price}</h3>
          </div>
        ))}
        {SearchStore.length === 0 && (
          <p>
            We couldn't find any other items. <span>Looking for another?</span>
          </p>
        )}
      </div>
    </section>
  );
}

export default Search;
