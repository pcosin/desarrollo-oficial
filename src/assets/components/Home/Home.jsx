import React, { useState } from "react";
import mainContentHome from "./mainContenHome";
import { FiArrowRight } from "react-icons/fi";

import "./home.css";

function Home() {
  const [mainContent, setMainContent] = useState(
    "Transformá tu página web en una página de ventas"
  );
  const [key, setKey] = useState(Date.now());

  const handleButtonClick = (section) => {
    setMainContent(section);
    setKey(Date.now());
  };

  return (
    <main>
      <nav className="nav-home">
        <button className="btn-nav-home" onClick={() => handleButtonClick("desarrolloWeb")}>
          Desarrollo web
        </button>
        <button className="btn-nav-home" onClick={() => handleButtonClick("copywriting")}>
          Copywriting
        </button>
        <button className="btn-nav-home" onClick={() => handleButtonClick("disenoGrafico")}>
          Diseño gráfico
        </button>
        <button className="btn-nav-home" onClick={() => handleButtonClick("emailMarketing")}>
          email marketing
        </button>
      </nav>
      <div className="main-home">
        {mainContent === "Transformá tu página web en una página de ventas" ? (
          <h1 className="title title-home slide-in-left">{mainContent}</h1>
        ) : (
          mainContentHome[mainContent].map((parrafo, index) => (
            <p
              key={`${parrafo}-${index}-${key}`}
              className={`main-parrafo tracking-in-expand delay-${index}`}
            >
              <FiArrowRight />
              {parrafo}
            </p>
          ))
        )}
      </div>
    </main>
  );
}

export default Home;
