import React, { useEffect, useRef, useState } from "react";
import "./proyectos.css";
// import mockupPalacio from "../../../img/mockup-palacio.png";
// import mockupVuelta from "../../../img/mockup-vuelta.png";
import { axiosClient } from "../../../../public/services/axios";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// Default theme
import '@splidejs/react-splide/css';
// or only core styles
import '@splidejs/react-splide/css/core';

function Proyectos() {

  const [dataTrabajos, setDataTrabajos] = useState();
  const divsContainerNameSite = useRef([])

  useEffect(() => {
    axiosClient.get()
    .then(response =>  setDataTrabajos(response.data) )
    .catch(error => setDataTrabajos('Hubo un error al cargar la informacion'))
  }, []);

  const handleMouseOver = (e) => {
    console.dir(e.target);
    let key = e.target.attributes[1].value
    key = Number(key)
    divsContainerNameSite.current[key].classList.add('containerNameSite')

  }

  const handleMouseOut = (e) => {
    let key = e.target.attributes[1].value
    key = Number(key)
    divsContainerNameSite.current[key].classList.remove('containerNameSite')
    
  }

  console.log(dataTrabajos);
  return (
    dataTrabajos  ? 
      <div className="containerCarousel">
        <Splide hasTrack={ false }  aria-label="My Favorite Images" className="containerSplide" options={{
          type: 'loop',
          padding: "25%",
          width:"95%",
          gap: "1rem",
          autoplay: true,
        }} >
          <SplideTrack  >
              {
              dataTrabajos.map((item, i) => (
                
                  <SplideSlide className="containerImg"     key={i} >
                    <a href={item.urlSite} className="containerUrlSite" target="_blank">
                      <img className="imgCarousel"  data-key={i} src={item.imgSite} alt={item.nameSite}/>
                      <div className="containerNameSite" ref={(ref) => (divsContainerNameSite.current[i] = ref)}>
                        <strong>{item.nameSite}</strong>
                      </div>
                    </a>
                  </SplideSlide>
              
              ))
              }
            </SplideTrack>

              <div className="splide__arrows splide__arrows--ltr">
                  <button className="splide__arrow splide__arrow--prev">
                  <ArrowForwardIosIcon/>
                  </button>
                  <button className="splide__arrow splide__arrow--next">
                  <ArrowForwardIosIcon/>

                  </button>
              </div>
        </Splide>
        <div className="galeryMobile">
              {
                dataTrabajos.map((item, i) => (
                  <div key={i} className="containerImgMobile">
                    <a href={item.urlSite}>
                      <img src={item.imgSite} className="imgCarousel" />
                      <div className="containerNameSite">
                        <strong>{item.nameSite}</strong>
                      </div>
                    </a>
                  </div>
                ))
              }
        </div>
      </div>
      :
      <div>
        <p>No hay nada para mostrar</p>
      </div>
  );
}

export default Proyectos;
