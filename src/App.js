import React, { useEffect, useState } from "react";
import "./App.css";
import jsonfiles from "./files.json";
import { ClotheContext } from "./ClotheContext";
import Cardmethod from "./components/CardMethod";

import Homepage from "./components/HomePage";

import Clothepreview from "./components/clothePreview";
import Cart from "./components/cart";
import Registration from "./components/Registration";
import Signin from "./components/Signin";
import { Route, Routes } from "react-router-dom";
function App() {
  const [Clothesinfo, setClothesinfo] = useState(
    []
  ); /*initialized state will empty array to avoid undefined error */
  const clothesInfoObj = jsonfiles.find((item) => item.id === "clothesinfo");
  useEffect(() => {
    setClothesinfo(clothesInfoObj.imgInfo);
  }, []);
  const [selected, setSelected] = useState({
    name: "Aphrodite",
    path: "/IconsAndImg/clothes/Aphrodite 1.png",
    isFavourite: false,
    price: "200.000",
    rating: "5",
    sizes: [
      {
        id: "S",
      },
      {
        id: "M",
      },
      {
        id: "L",
      },
      {
        id: "XXL",
      },
      {
        id: "XXXL",
      },
    ],
    quantity: 0,
    description:
      "God of Thunder and the Almighty Ruler of Skies who went mad; psychotic. He raped then ate his beloved childrens, and even some of his loyal servants who was predicted to betray and deceive him oneday. A distorted god.",
  });
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
        <Routes>
          <Route path="/HomePage" element={<Homepage />} />
          <Route path="/HomePage/:id" element={<Clothepreview />} />
          <Route path="/" element={<Registration />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Cart/CardMethod" element={<Cardmethod />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </ClotheContext.Provider>
    </div>
  );
}

export default App;
