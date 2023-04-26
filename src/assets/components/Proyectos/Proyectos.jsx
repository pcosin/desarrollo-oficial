import React from "react";
import "./proyectos.css";
import mockupPalacio from "../../../img/mockup-palacio.png";
import mockupVuelta from "../../../img/mockup-vuelta.png";

function Proyectos() {
  return (
    <div>
      <h1 className="title">Proyectos</h1>
      <section className="section-proyects">
        <div className="card-proyects">
          <img className="img-proyects" src={mockupPalacio} alt="" />
          <a href="http://">Archivo Histórico Palacio San José</a>
        </div>
        <div className="card-proyects">
          <img className="img-proyects" src={mockupVuelta} alt="" />
          <a href="http://">Vuelta Canela</a>
        </div>
      </section>
    </div>
  );
}

export default Proyectos;
