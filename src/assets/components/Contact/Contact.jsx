import React from "react";
import Form from "./Form";
import "./contact.css";

function Contact() {
  return (
    <div className="contacto-main slide-in-fwd-center">
      <div>
        <h1 className="title title-about">Estamos en contacto</h1>
        <h3>Coordinemos un encuentro en el que podamos asesorate mejor :)</h3>
      </div>
      <Form />
    </div>
  );
}

export default Contact;
