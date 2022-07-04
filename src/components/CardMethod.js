import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Cardmethod() {
  const [cardInfo, setcardInfo] = useState({
    CardHoldersName: "ewenike Chibuike",
    cardSecuritycode: "098",
    CardNumber: "Input your card number",
    cardExpDate: ["02 / " + 2024],
  });
  function handleChange(event) {
    setcardInfo((prevInfo) => {
      const name = event.target.name;
      const value = event.target.value;
      return { prevInfo, [name]: value };
    });
  }

  return (
    <div className="Cardmethod">
      <div className="Cardmethod-container">
        <div style={{ display: "flex" }} className="Cardmethod-path">
          <Link to="/Cart">
            <img src="/IconsAndImg/shopping/goback.png" alt="goback" />
          </Link>
          <h3>Credit / Debit card</h3>
        </div>
        <div
          style={{
            width: "500px",
            heigth: "300px",
            backgroundColor: "black",
            color: "white",
          }}
          className="Cardmethod-card"
        >
          <div>
            <img
              src="/IconsAndImg/mastercardicon/mastercardlogo-grey.png"
              style={{ blend: "Passthrough", width: "36px", height: "22px" }}
              alt="mastercard logo"
            />
            <img
              src="/IconsAndImg/mastercardicon/mastercard-logo.png"
              style={{ width: "64.71px", heigth: "40px" }}
              alt="mastercard logo"
            />
            <img
              src="/IconsAndImg/mastercardicon/Tm-icon.svg"
              style={{ width: "64.71px", heigth: "40px" }}
              alt="Tm logo"
            />
          </div>
          <h2>{cardInfo.CardNumber}</h2>
          <div>
            <ul id="cardholder">
              <li>CARD HOLDER</li>
              <li>{cardInfo.CardHoldersName}</li>
            </ul>
            <ul id="cardExp">
              <li>CARD SAVE</li>
              <li>{cardInfo.cardExpDate}</li>
            </ul>
          </div>
        </div>
        <h3>Camara goes here</h3>
        <div className="Cardmethod-inputs">
          <form>
            <input
              type="text"
              name="CardNumber"
              placeholder="Input your card number"
              onChange={handleChange}
              value={cardInfo.CardNumber}
            ></input>
            <input
              type="text"
              name="cardExpDate"
              placeholder="card exp date"
              onChange={handleChange}
              value={cardInfo.cardExpDate}
            ></input>
            <input
              type="text"
              name="cardSecuritycode"
              placeholder="card security code"
              onChange={handleChange}
              value={cardInfo.cardSecuritycode}
            ></input>
            <input
              type="text"
              name="CardHoldersName"
              placeholder="Card holder's name"
              onChange={handleChange}
              value={cardInfo.CardHoldersName}
            ></input>
          </form>
        </div>
        <button>Use this card</button>
      </div>
    </div>
  );
}
