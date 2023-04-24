import React from "react";
import mockupPalacio from "../../../img/mockup-palacio.png";

function Proyectos() {
  return (
    <div>
      <h1 className="title">Proyectos</h1>
      <section className="section-proyects">
        <img src={mockupPalacio} alt="" />
      </section>
    </div>
  );
}

export default Proyectos;
