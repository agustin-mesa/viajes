import React from "react";
import styled from "styled-components";

import * as colors from "../components/styles/colors.module.scss";

// IMG
import viajesHero from "../Assets/img/Viajes_Hero.jpg";
import icPin from "../Assets/iconos/ic_pin.svg";
import icArrow from "../Assets/iconos/arrow.svg";

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
          <p>
            Estos son algunos lugares que elijen la mayoría de los turistas que
            visitan America del Sur.
          </p>
        </div>
        <div className="hero__info">
          <h4>
            PRÓXIMA AVENTURA <img src={icArrow} alt="Arrow" />
          </h4>
          <span>Europa Meridional</span>
          <p>
            Forman parte veinte países. <br />
            ej. España, Francia, etc.
          </p>
        </div>
      </HeroWrapper>
    </ContainerHome>
  );
};

const ContainerHome = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${viajesHero});
  background-size: cover;
  background-position: center;
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
    p {
      margin: 15px 0 0;
      font: normal normal normal 16px/26px Montserrat;
      width: 80%;
    }
  }

  .hero__info {
    position: absolute;
    right: 0;
    bottom: 70px;
    background: ${colors.darkblue} 0% 0% no-repeat padding-box;
    border: 2px dashed ${colors.white};
    border-radius: 6px;
    padding: 20px;
    opacity: 0.5;

    p {
      font: normal normal 300 14px/22px Montserrat;
      color: ${colors.white};
    }
  }
`;

export default Home;
