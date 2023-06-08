import React from "react";
import ButtonHeader from "./ButtonHeader";
import logo from "../../../../public/img/logo-2.png";
import "./header.css";
import { Link } from "react-router-dom";

function Header(props) {
  const { isHome, handleLogoClick, handleButtonClick } = props;

  return (
    <nav style={props.style}>
      <div className="main-header">
        <Link to={isHome ? "#" : "/"}>
          <img
            className="logo"
            src={logo}
            alt="Logo"
            onClick={() => {
              handleLogoClick();
              handleButtonClick("home");
            }}
          />
        </Link>

        {/* <h2 className="nav-text">
          Impulsamos tu negocio <br /> al pŕoximo nivel
        </h2>
        <h2 className="nav-text">
          Diseñamos y desarrollamos <br /> tu página a medida
        </h2> */}
        <ButtonHeader handleButtonClick={handleButtonClick} />
      </div>
    </nav>
  );
}

export default Header;
