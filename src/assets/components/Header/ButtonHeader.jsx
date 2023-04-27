import React from "react";
import { Link } from "react-router-dom";
import "./button-header.css";

function ButtonHeader() {
  return (
    <>
      <Link to="/contact">
        <button className="btn-header">
          Tu auditoría <span>gratuita</span>, aquí
        </button>
      </Link>
    </>
  );
}

export default ButtonHeader;
