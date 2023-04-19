import React from "react";
import ButtonHeader from "./ButtonHeader";
import logo from "../../../img/logo-2.png";
import "./header.css";

function Header(props) {
  return (
    <nav style={props.style}>
      <div className="main-header">
        <img className="logo-header" src={logo} alt="Logo de la empresa" />
        <h2>Impulsamos tu negocio</h2>
        <h2>Diseñamos y desarrollamos </h2>
        <ButtonHeader />
      </div>
    </nav>
  );
}

export default Header;
