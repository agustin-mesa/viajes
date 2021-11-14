import React from "react";
import styled from "styled-components";

import * as colors from "../components/styles/colors.module.scss";

// IMG
import viajesHero from "../Assets/img/Viajes_Hero.jpg";
import icPin from "../Assets/iconos/ic_pin.svg";
import icArrow from "../Assets/iconos/arrow.svg";

// Importo etiquetas default con estilos propios
import { Parrafo, Span, H3, H5 } from "../components/styles/stylesDefault";

const Home = () => {
  return (
    <ContainerHome id="home">
      <HeroWrapper>
        <div className="hero__title">
          <h1>
            <img src={icPin} alt="Pin" /> AMERICA DEL SUR
          </h1>
          <hr />
          <H3 color="white">Lugares maravillosos por America del Sur</H3>
          <Parrafo>
            Estos son algunos lugares que elijen la mayoría de los turistas que
            visitan America del Sur. Montañas, playas y nieve, forman parte de
            los selectos.
          </Parrafo>
        </div>
        <div className="hero__info">
          <H5>
            PRÓXIMA AVENTURA <img src={icArrow} alt="Arrow" />
          </H5>
          <Span color="white">Europa Meridional</Span>
          <p>
            Forman parte veinte países. <br />
            ej. España, Francia, etc.
          </p>
        </div>
      </HeroWrapper>
      <div className="slider">
        <span>01</span>
      </div>
    </ContainerHome>
  );
};

const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${viajesHero});
  background-size: cover;
  background-position: center;

  .slider {
    position: absolute;
    width: 13%;
    bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 1;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      background: ${colors.white};
      border-radius: 50px;
      font: normal normal bold 0.875em/22px Montserrat;
    }
    span::after {
      content: "";
      position: absolute;
      width: 70px;
      height: 70px;
      background: ${colors.whiteOpac};
      border-radius: 50px;
      z-index: -2;
    }
    span::before {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 5px;
      background: ${colors.pink};
      z-index: -1;
    }
  }
`;

const HeroWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10%;
  right: 10%;
  display: flex;
  align-items: center;

  .hero__title {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    color: ${colors.white};

    h1 {
      font: normal normal bold 3em/42px Montserrat;
    }
    hr {
      width: 50%;
      border-bottom: 2px solid ${colors.white};
      margin: 30px 0 20px;
      background: ${colors.white};
    }
  }

  .hero__info {
    position: absolute;
    right: 0;
    bottom: 70px;
    background: ${colors.darkblueOpac} 0% 0% no-repeat padding-box;
    border: 2px dashed ${colors.whiteOpac};
    border-radius: 6px;
    padding: 25px;

    p {
      font: normal normal 300 0.875em/22px Montserrat;
      color: ${colors.white};
      margin: 10px 0 0;
    }
  }

  @media only screen and (max-width: 800px) {
    .slider {
      width: 16%;
    }
    .hero__info {
      display: none;
    }
    .hero__title p {
      width: 80%;
    }
    .hero__title hr {
      width: 85%;
    }
  }
  @media only screen and (max-width: 650px) {
    .hero__info,
    .hero__title p {
      display: none;
    }
    .hero__title hr {
      width: 85%;
    }
  }
  @media only screen and (max-width: 580px) {
    .hero__title h1 {
      font: normal normal bold 1.7em/42px Montserrat;
    }
    .hero__title h1 img {
      width: 12px;
    }
    .hero__title h3 {
      font: normal normal bold 1.4em/34px Montserrat;
    }
    .hero__title hr {
      width: 100%;
      margin: 15px 0 20px;
    }
  }
`;

export default Home;
