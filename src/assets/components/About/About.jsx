import React from "react";
import "./about.css";
import imgPablo from "../../../img/imgPabloAvatarPeq.jpeg";
import imgMathias from "../../../img/imgMathiasAvatar.jpg";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function About() {
  return (
    <>
      <h1 className="title title-about">¿Que es Desarrollos Monigote?</h1>
      <section className="main-about slide-in-fwd-center">
        <div className="about-container-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tenetur dolor nesciunt tempore. Consequuntur porro molestiae quaerat iste sapiente inventore ipsam veritatis excepturi obcaecati dicta! Dolorum harum sint ipsum unde!</p>
          <button>Aprende con nosotros</button>
        </div>
        <div className="about-container-card-img">
          <div>
            <img src={imgPablo} className="card-img-about" />
            <h4>Pablo Cosin</h4>
            <div className="about-container-socialMedia">
              <a href=""><LinkedInIcon /></a>
              <a href=""><GitHubIcon/></a>
            </div>
          </div>
          <div>
            <img src={imgMathias} className="card-img-about" />
            <h4>Mathias Barbosa</h4>
            <div className="about-container-socialMedia">
              <a href=""><LinkedInIcon /></a>
              <a href=""><GitHubIcon/></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
