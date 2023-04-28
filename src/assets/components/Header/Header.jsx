import React from "react";
import ButtonHeader from "./ButtonHeader";
import logo from "../../../img/logo-2.png";
import "./header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <nav style={props.style}>
      <div className="main-header">
        <Link to="/">
          <img
            className="logo"
            src={logo}
            alt="Logo"
            onClick={() => {
              props.handleLogoClick();
              props.handleButtonClick("home");
            }}
          />
        </Link>

        <h2 className="nav-text">
          Impulsamos tu negocio <br /> al pŕoximo nivel
        </h2>
        <h2 className="nav-text">
          Diseñamos y desarrollamos <br /> tu página a medida
        </h2>
        <ButtonHeader handleButtonClick={props.handleButtonClick} />
      </div>
    </nav>
  );
}

export default Header;
