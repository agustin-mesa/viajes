import React from "react";
import styled from "styled-components";

// IMG
import viajesHero from "../Assets/img/Viajes_Hero.jpg";

const Home = () => {
  return <ContainerHome>s</ContainerHome>;
};

const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${viajesHero});
  background-size: cover;
  background-position: center;
`;

export default Home;
