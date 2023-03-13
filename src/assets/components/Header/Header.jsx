import React from "react";
import ButtonHeader from "./ButtonHeader";
import "./header.css";
import logo from "../../../img/logo.png";

function Header() {
  return (
    <>
      <nav className="main-header">
        <img className="logo-header" src={logo} alt="Logo de la empresa" />
        <h2>Impulsamos tu negocio</h2>
        <h2>Diseñamos y desarrollamos </h2>
        <ButtonHeader />
      </nav>
    </>
  );
}

export default Header;
