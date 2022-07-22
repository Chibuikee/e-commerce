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
import Favourites from "./components/Favourite";
import Notifications from "./components/Notifications";
import WelcomePage from "./components/WelcomePage";
import Sidebar from "./components/sidebar";
import PaymentSuccessful from "./components/paymentSuccessful";
import PaymentDeclined from "./components/paymentDeclined";
import Search from "./components/Search";
import CheckoutPopup from "./components/checkoutpopup";
import Filteredbar from "./components/filteredBar";
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
  const [SearchStore, setSearchStore] = useState([]);
  function handleSearchStore(e) {
    const word = e.target.value;
    const marchedSearch = Clothesinfo.filter((item) =>
      item.style.toLowerCase().includes(word.toLowerCase())
    );
    setSearchStore(marchedSearch);
  }
  function handleCart(product) {
    const insideCart = findItemInCart(product);
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
  // favouritearr contains all items that isFavourite is === true
  const favouritearr = Clothesinfo.filter((item) => item?.isFavourite === true);
  //checkss if an item is in the cart and returns it if true
  function findItemInCart(product) {
    return cartitems.find((item) => item.name === product.name);
  }
  //decreases a qty by one and removes the item onces its qty is less one
  function handleRemove(product) {
    const insideCart = findItemInCart(product);
    if (insideCart.qty === 1) {
      setCartitems(cartitems.filter((item) => item.name !== product.name));
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
  //adds all items in favpurite into a cart
  function addAll(prop) {
    const favouriteNotInCart = prop.filter((object1) => {
      return !cartitems.find((object2) => {
        return object1.name === object2.name;
      });
    });

    setCartitems([
      ...cartitems,
      ...favouriteNotInCart.map((item) => ({
        ...item,
        qty: 1,
      })),
    ]);
  }

  //removeItem is for deleting an item instantly from the cart
  function removeItem(product) {
    const inside = findItemInCart(product);
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
          addAll,
          favouritearr,
          Clothesinfo,
          setClothesinfo,
          selected,
          setSelected,
          cartitems,
          setCartitems,
          handleCart,
          handleRemove,
          removeItem,
          handleSearchStore,
          SearchStore,
        }}
      >
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/HomePage" element={<Homepage />}>
            <Route path="Sidebar" element={<Sidebar />} />
            <Route path="filter/:barId" element={<Filteredbar />} />
          </Route>
          <Route path="/HomePage/:id" element={<Clothepreview />} />
          <Route path="/HomePage/Favourites" element={<Favourites />}>
            <Route path="CheckoutPopup" element={<CheckoutPopup />} />
          </Route>
          <Route path="/HomePage/Notifications" element={<Notifications />} />
          <Route path="/HomePage/Search" element={<Search />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Cart/CardMethod" element={<Cardmethod />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/PaymentSuccessful" element={<PaymentSuccessful />} />
          <Route path="/PaymentDeclined" element={<PaymentDeclined />} />
        </Routes>
      </ClotheContext.Provider>
    </div>
  );
}

export default App;
