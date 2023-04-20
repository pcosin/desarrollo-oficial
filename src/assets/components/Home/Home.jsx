import React, { useState } from "react";
import "./home.css";
import mainContentHome from "./mainContenHome";

function Home() {
  const [mainContent, setMainContent] = useState(
    "Transformá tu página web en una página de ventas"
  );

  const handleButtonClick = (section) => {
    setMainContent(section);
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
          <h1 className="title title-home">{mainContent}</h1>
        ) : (
          mainContentHome[mainContent].map((parrafo, index) => (
            <p key={index} className="main-parrafo">
              {parrafo}
            </p>
          ))
        )}
      </div>
    </main>
  );
}

export default Home;
