import React from "react";
import ButtonHeader from "./ButtonHeader";
import logo from "../../../img/logo-2.png";
import "./header.css";

function Header(props) {
  return (
    <nav style={props.style}>
      <div className="main-header">
        <img className="logo-header" src={logo} alt="Logo de la empresa" />
        <h2 className="nav-text">
          Impulsamos tu negocio <br /> al pŕoximo nivel
        </h2>
        <h2 className="nav-text">
          Diseñamos y desarrollamos <br /> tu página a medida
        </h2>
        <ButtonHeader />
      </div>
    </nav>
  );
}

export default Header;
