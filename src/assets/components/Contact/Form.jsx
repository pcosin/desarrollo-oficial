import React from "react";
import "./form.css";

export default function Form() {
  return (
    <div>
      <form className="contact-form" action="" method="post">
        <div className="form-group">
          <label htmlFor="nombre">nombre</label>
          <input
            className="contact-input"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">teléfono</label>
          <input
            className="contact-input"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="telefono"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">mail</label>
          <input
            className="contact-input"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="mail"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">mensaje</label>
          <input
            className="contact-input"
            type="text"
            id="mensaje"
            name="mensaje"
            placeholder="mensaje"
          />
        </div>
        <div className="btn-wrapper">
          <button className="btn-contact">Enviar</button>
          <p>Te responderemos a la brevedad!</p>
        </div>
      </form>
    </div>
  );
}
