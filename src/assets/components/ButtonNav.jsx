import React from "react";
import "./buttonNav.css";
import { BiDownArrowCircle } from "react-icons/bi";

function ButtonNav({ text, color, onClick }) {
  return (
    <button
      style={{ backgroundColor: color, textAlign: "left" }}
      className={color === "" ? "navButton" : "navButton selected"}
      onClick={onClick}
    >
      <div
        className="btn-nav-text-svg"
        style={{ maxWidth: "min(100% - 2rem, 1440px)", margin: "0 auto", color: "#FFF" }}
      >
        {text} <BiDownArrowCircle />
      </div>
    </button>
  );
}

export default ButtonNav;
