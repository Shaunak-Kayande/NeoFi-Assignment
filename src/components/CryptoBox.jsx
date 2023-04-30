import React from "react";
import "../styles/CryptoBox.css";

const CryptoBox = () => {
  return (
    <div className="box-container">
      <div className="box">
        <div className="current-value">
          <div>Current value</div>
          <div id="value">
            <div id="rupee">&#8377;</div> 24882
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default CryptoBox;
