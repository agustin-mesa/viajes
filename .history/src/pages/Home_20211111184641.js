import React from "react";
import styled from "styled-components";

// IMG
import viajesHero from "../Assets/img/Viajes_Hero.jpg";
import icPin from "../Assets/iconos/ic_pin.svg";

const Home = () => {
  return (
    <ContainerHome>
      <HeroWrapper>
        <div className="hero__title">
          <h2>
            <img src={icPin} alt="" /> AMÉRICA DEL SUR
          </h2>
          <hr />
          <h3>Lugares maravillosos por América del Sur</h3>
          <p>
            Estos son algunos lugares que elijen la mayoría de los turistas que
            visitan América del Sur.
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
  background: grey;
  .hero__title {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    background: green;

    h3 {
      font: normal normal bold 48px/42px Montserrat;
      letter-spacing: 0px;
      color: #ffffff;
    }
  }
`;

export default Home;
