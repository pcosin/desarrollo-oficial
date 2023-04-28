import React from "react";
import "./button-header.css";

function ButtonHeader({ handleButtonClick }) {
  return (
    <>
      <button className="btn-header" onClick={() => handleButtonClick("contact")}>
        Tu auditoría <span>gratuita</span>, aquí
      </button>
    </>
  );
}

export default ButtonHeader;
