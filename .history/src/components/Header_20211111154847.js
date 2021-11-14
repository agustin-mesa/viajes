import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <ContainerHeader>
      <ul>
        <NavLink to="#home">HOME</NavLink>
        <NavLink to="#tendencias">TENDENCIAS</NavLink>
        <NavLink to="#blog">BLOG</NavLink>
      </ul>
    </ContainerHeader>
  );
};

const ContainerHeader = styled.header`
  background: red;
`;

export default Header;
