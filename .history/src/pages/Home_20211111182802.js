import React from "react";
import styled from "styled-components";

// IMG
import viajesHero from "../Assets/img/Viajes_Hero.jpg";

const Home = () => {
  return (
    <ContainerHome>
      <div className="home__hero-wrapper"></div>
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

export default Home;
