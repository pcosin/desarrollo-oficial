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
          <p>Somos una agencia de desarrollo web y software comprometida en la búsqueda constante de la innovación. Nuestro enfoque se basa en establecer un diálogo cercano con nuestros clientes y brindar soluciones a medida para cada caso particular. Nos enorgullece especializarnos en el desarrollo de soluciones personalizadas para abordar problemas comunes. Nos esforzamos por ofrecer productos y servicios que superen las expectativas y aporten valor a nuestros clientes. Confía en nosotros para crear y potenciar tu presencia en línea, optimizar procesos y mejorar la eficiencia de tu negocio. ¡Permítenos ser tu socio en el camino hacia el éxito digital!</p>
        </div>
        <div className="about-container-card-img">
          <div>
            <img src={imgPablo} alt="Imagen de Pablo Cosin" className="card-img-about" />
            <h4 className="about-name">Pablo Cosin</h4>
            <div className="about-container-socialMedia">
              <a href="https://www.linkedin.com/in/pablo-cosin-78ba9a21a/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
              <a href="https://github.com/pcosin" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
            </div>
          </div>
          <div>
            <img src={imgMathias} alt="Imagen de Mathias Barbosa" className="card-img-about" />
            <h4 >Mathias Barbosa</h4>
            <div className="about-container-socialMedia">
              <a href="https://www.linkedin.com/in/mathias-barbosa-439451202/" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
              <a href="https://github.com/mathiasbarbosa" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
