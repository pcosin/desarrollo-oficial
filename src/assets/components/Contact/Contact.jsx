import React from "react";
import Form from "./Form";
import "./contact.css";
import FormContact from "./FormContact";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconSocialMedia from "./IconSocialMedia";

function Contact({setToast}) {

  const socialMedia = [
    {
      icon: <InstagramIcon/>,
      url: 'https://www.instagram.com/desarrollos.monigote/'
    },
    {
      icon: <WhatsAppIcon/>,
      url: 'https://www.instagram.com/desarrollos.monigote/'
    },
    {
      icon: <LinkedInIcon/>,
      url: 'https://www.linkedin.com/company/desarrollos-monigote/'
    },
  ]
  
  return (
    <div className="contacto-main slide-in-fwd-center">
          <h1 className="title title-about">Estamos en contacto</h1>
      <div className="containerInfoContact">
        <div style={{margin: 'auto'}}>
          <h3>Coordinemos un encuentro en el que podamos asesorate mejor :)</h3>
        </div>
        <div className="containerSocialMedia">
        {
          socialMedia.map((icon, i) => (
              
              <IconSocialMedia icon={icon} key={i}/>

          ))
        }
        </div>
      </div>
      {/* <Form /> */}
      <FormContact setToast={setToast}></FormContact>
    </div>
  );
}

export default Contact;
