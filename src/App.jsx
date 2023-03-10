import React, { useState } from "react";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import Home from "./assets/components/Home/Home";
import Contact from "./assets/components/Contact/Contact";
import About from "./assets/components/About/About";
import "./App.css";

function App() {
  const [selectedButton, setSelectedButton] = useState("home");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  let backgroundColor = "#E8E8E8";
  let mainContent = null;

  if (selectedButton === "about") {
    backgroundColor = "#A9A9A9";
    mainContent = <About />;
  } else if (selectedButton === "contact") {
    backgroundColor = "#9ACD32";
    mainContent = <Contact />;
  } else {
    mainContent = <Home />;
  }

  return (
    <div className="container">
      <Header />
      <main style={{ backgroundColor }}>{mainContent}</main>
      <nav className="navButtons">
        <button
          className={selectedButton === "home" ? "selected" : ""}
          onClick={() => handleButtonClick("home")}
        >
          Soluciones
        </button>
        <button
          className={selectedButton === "about" ? "selected" : ""}
          onClick={() => handleButtonClick("about")}
        >
          About
        </button>
        <button
          className={selectedButton === "contact" ? "selected" : ""}
          onClick={() => handleButtonClick("contact")}
        >
          Contact
        </button>
      </nav>
      <Footer />
    </div>
  );
}

export default App;
