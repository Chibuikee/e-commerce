import React, { useState } from "react";

export default function Cardmethod() {
  const [cardInfo, setcardInfo] = useState({
    CardHoldersName: "Chibuike",
    cardSecuritycode: "098",
    CardNumber: 729,
    cardExpDate: ["02 / ", 2024],
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
        <div className="Cardmethod-path">
          <a>
            <img src="" alt="go back icon" />
          </a>
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
          <img src="" alt="mastercard logo" />
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
            ></input>
            <input
              type="text"
              name="cardExpDate"
              placeholder="card exp date"
              onChange={handleChange}
            ></input>
            <input
              type="text"
              name="cardSecuritycode"
              placeholder="card security code"
              onChange={handleChange}
            ></input>
            <input
              type="text"
              name="CardHoldersName"
              placeholder="Card holder's name"
              onChange={handleChange}
            ></input>
          </form>
        </div>
        <button>Use this card</button>
      </div>
    </div>
  );
}
