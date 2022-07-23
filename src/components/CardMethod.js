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
      return { ...prevInfo, [name]: value };
    });
  }

  return (
    <div className="Cardmethod">
      <div className="Cardmethod-container">
        <div className="Cardmethod-header">
          <Link to="/Cart">
            <img
              src={process.env.PUBLIC_URL + "/IconsAndImg/shopping/goback.png"}
              alt="goback"
            />
          </Link>
          <h3>Credit / Debit card</h3>
        </div>
        <div className="Cardmethod-card">
          <img
            id="master-card-logo-1"
            src={
              process.env.PUBLIC_URL +
              "/IconsAndImg/mastercardicon/mastercardlogo-grey.png"
            }
            alt="mastercard logo"
          />
          <img
            id="master-card-logo-2"
            src={
              process.env.PUBLIC_URL +
              "/IconsAndImg/mastercardicon/mastercard-logo.png"
            }
            alt="mastercard logo"
          />
          <img
            id="master-card-logo-3"
            src={
              process.env.PUBLIC_URL + "/IconsAndImg/mastercardicon/Tm-icon.svg"
            }
            alt="Tm logo"
          />

          <h2 id="card-number">{cardInfo.CardNumber}</h2>
          <div id="nameandexp-ctn">
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
        <h3 id="camera-position">Camara goes here</h3>
        <div className="Cardmethod-inputs-section">
          <form className="Cardmethod-inputs-ctn">
            <div className="card-info-input-a">
              <label>Card Number</label>
              <input
                type="text"
                name="CardNumber"
                placeholder="Input your card number"
                onChange={handleChange}
                value={cardInfo.CardNumber}
              ></input>
            </div>
            <div className="card-info-input-b">
              <label>Expiration Date</label>
              <input
                type="text"
                name="cardExpDate"
                placeholder="card exp date"
                onChange={handleChange}
                value={cardInfo.cardExpDate}
              ></input>
            </div>
            <div className="card-info-input-c">
              <label>Security Code</label>
              <input
                type="text"
                name="cardSecuritycode"
                placeholder="card security code"
                onChange={handleChange}
                value={cardInfo.cardSecuritycode}
              ></input>
            </div>
            <div className="card-info-input-d">
              <label>Card Holder</label>
              <input
                type="text"
                name="CardHoldersName"
                placeholder="Card holder's name"
                onChange={handleChange}
                value={cardInfo.CardHoldersName}
              ></input>
            </div>
          </form>
        </div>
        <Link id="usecard-btn-ctn" to="/PaymentSuccessful">
          <button id="usecard-btn">Use this card</button>
        </Link>
      </div>
    </div>
  );
}
