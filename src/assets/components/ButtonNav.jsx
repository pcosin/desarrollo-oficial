import React from "react";
import "./buttonNav.css";

function ButtonNav({ text, color, onClick }) {
  return (
    <button
      style={{ backgroundColor: color, textAlign: "left" }}
      className={color === "" ? "navButton" : "navButton selected"}
      onClick={onClick}
    >
      <div style={{ maxWidth: "min(100% - 2rem, 1440px)", margin: "0 auto", color: "#FFF" }}>
        {text}
      </div>
    </button>
  );
}

export default ButtonNav;
