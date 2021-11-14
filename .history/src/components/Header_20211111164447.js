import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <ContainerHeader>
      <nav>
        <div className="header__logo"></div>
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
      </nav>
    </ContainerHeader>
  );
};

const ContainerHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: red;
  background: #ffffff;
  box-shadow: 0px 3px 6px #00000029;
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: red;
  }
`;

export default Header;
