import React from "react";
import styled from "styled-components";

import * as colors from "../components/styles/colors.module.scss";

// IMG
import viajesHero from "../Assets/img/Viajes_Hero.jpg";
import icPin from "../Assets/iconos/ic_pin.svg";
import icArrow from "../Assets/iconos/arrow.svg";

// Importo etiquetas default con estilos propios
import { Parrafo, Span, H5 } from "../components/styles/stylesDefault";

const Home = () => {
  return (
    <ContainerHome>
      <HeroWrapper>
        <div className="hero__title">
          <h2>
            <img src={icPin} alt="Pin" /> AMERICA DEL SUR
          </h2>
          <hr />
          <h3>Lugares maravillosos por America del Sur</h3>
          <Parrafo>
            Estos son algunos lugares que elijen la mayoría de los turistas que
            visitan America del Sur.
          </Parrafo>
        </div>
        <div className="hero__info">
          <H5>
            PRÓXIMA AVENTURA <img src={icArrow} alt="Arrow" />
          </H5>
          <Span>Europa Meridional</Span>
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
    width: 15%;
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
      font: normal normal bold 14px/22px Montserrat;
    }
    span::after {
      content: "";
      position: absolute;
      width: 70px;
      height: 70px;
      background: ${colors.whiteOpac};
      border-radius: 50px;
      z-index: -1;
    }
    span::before {
      content: "";
      position: absolute;
      left: 0;
      width: 100%;
      height: 10px;
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

    h2 {
      font: normal normal bold 48px/42px Montserrat;
    }
    hr {
      width: 75%;
      border-bottom: 2px solid ${colors.white};
      margin: 30px 0 20px;
    }
    h3 {
      font: normal normal bold 24px/34px Montserrat;
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
      font: normal normal 300 14px/22px Montserrat;
      color: ${colors.white};
      margin: 10px 0 0;
    }
  }
`;

export default Home;
