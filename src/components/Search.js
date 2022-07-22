import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ClotheContext } from "../ClotheContext";
function Search() {
  const { SearchStore, handleSearchStore, setSelected } =
    useContext(ClotheContext);
  return (
    <section>
      <div>
        <div id="search-header">
          <Link to="/HomePage">
            <img src="/IconsAndImg/shopping/goback.png" alt="goback" />
          </Link>
          <h2>Find Products</h2>
          <Link to="/HomePage">
            <img src="/IconsAndImg/shop/LOGO.png" alt="Logo" />
          </Link>
        </div>
        <div className="search-bar-ctn">
          <img src="/IconsAndImg/shop/Search Icon.png" />
          <input placeholder="Hoodies" onChange={handleSearchStore}></input>
        </div>
        <p id="item-found-message">
          <span>{SearchStore.length}</span> Items found for your keyword
        </p>
        <div id="found-items-ctn">
          {SearchStore.map((item) => (
            <div className="found-item" key={item.name}>
              <Link to={`/HomePage/${item.name}`}>
                <div>
                  <img
                    onClick={() => setSelected(item)}
                    src={item.path}
                    alt={item.name}
                  />
                </div>
              </Link>
              <div className="search-item-info">
                <span>{item.name}</span>
                <h3>Rp{item.price}</h3>
              </div>
            </div>
          ))}
        </div>
        {SearchStore.length === 0 && (
          <p id="item-not-found">
            We couldn't find any other items. <span>Looking for another?</span>
          </p>
        )}
      </div>
    </section>
  );
}

export default Search;
