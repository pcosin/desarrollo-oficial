import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import Home from "./assets/components/Home/Home";
import Contact from "./assets/components/Contact/Contact";
import About from "./assets/components/About/About";
import Proyectos from "./assets/components/Proyectos/Proyectos";
import ButtonNav from "./assets/components/ButtonNav";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {

  const notify = () =>  toast.success('Mail enviado correctamente', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });;

  const [buttons, setButtons] = useState([
    { text: "Soluciones", key: "home", path: "/", backgroundColor: "#1b1b1b" },
    { text: "Nosotros", key: "about", backgroundColor: "#0151b2" },
    { text: "Proyectos", key: "proyectos", backgroundColor: "#ff3d00" },
    { text: "Contacto", key: "contact", path: "/contact", backgroundColor: "#385239" },
  ]);

  const [selectedButton, setSelectedButton] = useState("home");

  const [toast, setToast] = useState(null);

  const [isHome, setIsHome] = useState(true)

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
    mainContent = <Contact setToast={setToast} />;
  } else if (selectedButton === "proyectos") {
    mainContent = <Proyectos />;
  } else {
    mainContent = <Home isHome={isHome} setIsHome={setIsHome} />;
  }

  const handleLogoClick = () => {
    setSelectedButton("home");
    setIsHome(true)
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header
          style={{ backgroundColor }}
          handleButtonClick={handleButtonClick} handleLogoClick={handleLogoClick} 
        />
        <main style={{ backgroundColor }}>
          <div className="mainContent">{mainContent}</div>
          {/* <button onClick={notify}>Notify!</button> */}
          <ToastContainer />
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
    </BrowserRouter>
  );
}

export default App;
