import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <ContainerHeader>
      <ul>
        <li>
          <NavLink to="#">HOME</NavLink>
        </li>
        <li>
          <NavLink to="#">TENDENCIAS</NavLink>
        </li>
        <li>
          <NavLink to="#">BLOG</NavLink>
        </li>
      </ul>
    </ContainerHeader>
  );
};

const ContainerHeader = styled.header`
  background: red;
`;

export default Header;
