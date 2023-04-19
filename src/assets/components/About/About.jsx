import React from "react";
import "./about.css";
import imgPablo from "../../../img/imgPabloAvatarPeq.jpeg";

function About() {
  return (
    <>
      <h1 className="title title-about">nuestro equipo</h1>
      <section className="main-about">
        <div className="card-about">
          <img className="card-img-about" src={imgPablo} alt="Imagen de Pablo Cosin" />
          <div className="card-info">
            <h3 className="card-title">Pablo Cosin</h3>
            <h4 className="card-subtitle">Licenciado en ingenieria de software</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aperiam expedita
              blanditiis quo explicabo sunt dolore, maiores numquam tempora voluptates, quis totam?
              Nulla veritatis atque, sed voluptate ex dolorum placeat.
            </p>
            <button className="btn-card-about">Ver perfil</button>
          </div>
        </div>
        <div className="card-about">
          <img className="card-img-about" src={imgPablo} alt="Imagen de Pablo Cosin" />
          <div className="card-info">
            <h3 className="card-title">Pablo Cosin</h3>
            <h4 className="card-subtitle">Licenciado en ingenieria de software</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aperiam expedita
              blanditiis quo explicabo sunt dolore, maiores numquam tempora voluptates, quis totam?
              Nulla veritatis atque, sed voluptate ex dolorum placeat.
            </p>
            <button className="btn-card-about">Ver perfil</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
