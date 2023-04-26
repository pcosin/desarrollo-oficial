import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import Home from "./assets/components/Home/Home";
import Contact from "./assets/components/Contact/Contact";
import About from "./assets/components/About/About";
import Proyectos from "./assets/components/Proyectos/Proyectos";
import ButtonNav from "./assets/components/ButtonNav";

import "./App.css";

function App() {
  const [buttons, setButtons] = useState([
    { text: "Soluciones", key: "home", path: "/", backgroundColor: "#1b1b1b" },
    { text: "Nosotros", key: "about", backgroundColor: "#0151b2" },
    { text: "Proyectos", key: "proyectos", backgroundColor: "#ff3d00" },
    { text: "Contacto", key: "contact", path: "/contact", backgroundColor: "#385239" },
  ]);

  const [selectedButton, setSelectedButton] = useState("home");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    const index = buttons.findIndex((b) => b.key === button);
    const buttonCopy = buttons[index];
    const newButtons = [...buttons];
    newButtons.splice(index, 1);
    newButtons.splice(0, 0, buttonCopy);
    setButtons(newButtons);
  };

  let backgroundColor = buttons.find((b) => b.key === selectedButton)?.backgroundColor || "#1b1b1b";
  let mainContent = null;

  if (selectedButton === "about") {
    mainContent = <About />;
  } else if (selectedButton === "contact") {
    mainContent = <Contact />;
  } else if (selectedButton === "proyectos") {
    mainContent = <Proyectos />;
  } else {
    mainContent = <Home />;
  }

  const handleLogoClick = () => {
    setSelectedButton("home");
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header style={{ backgroundColor }} handleLogoClick={handleLogoClick} />
        <main style={{ backgroundColor }}>
          <div className="mainContent">{mainContent}</div>
        </main>
        <nav className="navButtons slide-in-left">
          {buttons.map((button) => (
            <ButtonNav
              key={button.key}
              text={button.text}
              color={button.backgroundColor}
              onClick={() => handleButtonClick(button.key)}
            />
          ))}
        </nav>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
