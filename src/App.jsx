import React, { useState } from "react";
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
    { text: "Soluciones", key: "home", backgroundColor: "#FFF" },
    { text: "About", key: "about", backgroundColor: "#0151b2" },
    { text: "Proyectos", key: "proyectos", backgroundColor: "#ff3d00" },
    { text: "Contact", key: "contact", backgroundColor: "#385239" },
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

  let backgroundColor = buttons.find((b) => b.key === selectedButton)?.backgroundColor || "#FFF";
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

  return (
    <div className="container">
      <Header style={{ backgroundColor }} />
      <main style={{ backgroundColor }}>
        <div className="mainContent">{mainContent}</div>
      </main>
      <nav className="navButtons">
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
  );
}

export default App;
