import React, { useEffect, useState } from "react";
import "./App.css";
import jsonfiles from "./files.json";
import { ClotheContext } from "./ClotheContext";
import Cardmethod from "./components/CardMethod";
import FilterSection from "./components/filtersection";
import Homepage from "./components/HomePage";
import Navbar from "./components/navbar";
import Clothepreview from "./components/clothePreview";

function App() {
  const [Clothesinfo, setClothesinfo] = useState(
    []
  ); /*initialized state will empty array to avoid undefined error */
  const clothesInfoObj = jsonfiles.find((item) => item.id === "clothesinfo");
  useEffect(() => {
    setClothesinfo(clothesInfoObj.imgInfo);
  }, []);
  const [selected, setSelected] = useState(false);
  return (
    <div className="App">
      <Cardmethod />
      <Navbar />
      <FilterSection />
      <ClotheContext.Provider
        value={{ Clothesinfo, setClothesinfo, selected, setSelected }}
      >
        <Homepage />
        {selected && <Clothepreview />}
      </ClotheContext.Provider>
    </div>
  );
}

export default App;
