import React, { useState, useEffect } from "react";
import mainContentHome from "./mainContenHome";
import { FiArrowRight } from "react-icons/fi";
import logo from "../../../../public/img/logo-2.png";
import "./home.css";

function Home({isHome, setIsHome}) {
  const defaultMainContent = "Transformá tu página web en una página de ventas";
  const [mainContent, setMainContent] = useState(defaultMainContent);
  const [key, setKey] = useState(Date.now());
  // const [isHome, setIsHome] = useState(true);


  useEffect(() => {
    if (isHome) {
      setMainContent(defaultMainContent);
      setKey(Date.now());
    }
  }, [isHome]);

  const handleButtonClick = (section) => {
    setMainContent(section);
    setKey(Date.now());
    setIsHome(false);
  };

  const handleLogoClick = () => {
    setMainContent(defaultMainContent)
    // setIsHome(true);
  };

  return (
    <main>
      <nav className="nav-home">
        <button
          className={`btn-nav-home${mainContent === "desarrolloWeb" ? " active" : ""}`}
          onClick={() => handleButtonClick("desarrolloWeb")}
        >
          Desarrollo web
        </button>
        <button
          className={`btn-nav-home${mainContent === "copywriting" ? " active" : ""}`}
          onClick={() => handleButtonClick("copywriting")}
        >
          Copywriting
        </button>
        <button
          className={`btn-nav-home${mainContent === "disenoGrafico" ? " active" : ""}`}
          onClick={() => handleButtonClick("disenoGrafico")}
        >
          Diseño gráfico
        </button>
        <button
          className={`btn-nav-home${mainContent === "emailMarketing" ? " active" : ""}`}
          onClick={() => handleButtonClick("emailMarketing")}
        >
          Email marketing
        </button>
      </nav>
      <div className="main-home">
        {mainContent === defaultMainContent ? (
          <>
          <section className="home-principal">
          <div>
           <h1 className="title title-home slide-in-left">{mainContent}</h1>
            <h3 className="sub-title-home">
              Impulsamos tu negocio al próximo nivel
            </h3></div>
            <div>
            <img
            className="logo-home"
            src={logo}
            alt="Logo"
          />
            </div>
          </section>
          </>
        ) : (
          mainContentHome[mainContent].map((parrafo, index) => (
            <div className="container-parrafo" key={index}>
                  <p
              key={`${parrafo}-${index}-${key}`}
              className={`main-parrafo tracking-in-expand delay-${index}`}
            >
              <FiArrowRight />
              {parrafo}
            </p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default Home;
