import React, { useEffect, useState } from "react";
import "./App.css";
import jsonfiles from "./files.json";
import { ClotheContext } from "./ClotheContext";
import Cardmethod from "./components/CardMethod";
import FilterSection from "./components/filtersection";
import Homepage from "./components/HomePage";
import Navbar from "./components/navbar";
import Clothepreview from "./components/clothePreview";
import Cart from "./components/cart";
import Registration from "./components/Registration";
import Signin from "./components/Signin";

function App() {
  const [Clothesinfo, setClothesinfo] = useState(
    []
  ); /*initialized state will empty array to avoid undefined error */
  const clothesInfoObj = jsonfiles.find((item) => item.id === "clothesinfo");
  useEffect(() => {
    setClothesinfo(clothesInfoObj.imgInfo);
  }, []);
  const [selected, setSelected] = useState(false);
  const [cartitems, setCartitems] = useState([]);
  function handleCart(product) {
    const insideCart = cartitems.find((item) => item.name === product.name);
    if (insideCart) {
      setCartitems(
        cartitems.map((item) =>
          item.name === product.name
            ? { ...insideCart, qty: insideCart.qty + 1 }
            : item
        )
      );
    } else {
      setCartitems([...cartitems, { ...product, qty: 1 }]);
    }
  }
  function handleRemove(product) {
    const insideCart = cartitems.find((item) => item.name === product.name);
    if (insideCart.qty === 1) {
      setCartitems(cartitems.filter((item) => item.name === !product.name));
    } else {
      setCartitems(
        cartitems.map((item) =>
          item.name === product.name
            ? { ...insideCart, qty: insideCart.qty - 1 }
            : item
        )
      );
    }
  }
  function removeItem(product) {
    const inside = cartitems.find((item) => item.name === product.name);
    switch (inside.name) {
      case product.name:
        setCartitems(cartitems.filter((item) => item.name !== product.name));
        break;
    }
  }
  return (
    <div className="App">
      <Registration />
      <Signin />
      <Cardmethod />

      <ClotheContext.Provider
        value={{
          Clothesinfo,
          setClothesinfo,
          selected,
          setSelected,
          cartitems,
          setCartitems,
          handleCart,
          handleRemove,
          removeItem,
        }}
      >
        <Navbar />
        <FilterSection />
        <Homepage />
        {selected && <Clothepreview />}
        <Cart />
      </ClotheContext.Provider>
    </div>
  );
}

export default App;
