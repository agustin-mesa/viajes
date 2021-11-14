import React from "react";
import styled from "styled-components";

// IMG
import viajesHero from "../Assets/img/Viajes_Hero.jpg";

const Home = () => {
  return (
    <ContainerHome>
      <HeroWrapper>
        <div className="hero__title"></div>
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
  background: red;
`;

export default Home;
