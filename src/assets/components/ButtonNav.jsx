import React from "react";
import "./buttonNav.css";
import { BiDownArrowCircle } from "react-icons/bi";
import Fade from "react-awesome-reveal";

function ButtonNav({ text, color, onClick, index }) {
  return (
    <Fade className="fade" key={index} direction="left" delay={index * 200}>
      <button
        style={{ backgroundColor: color, textAlign: "left",}}
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
    </Fade>
  );
}

export default ButtonNav;
