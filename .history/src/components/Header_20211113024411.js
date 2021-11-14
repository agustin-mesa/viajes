import React from "react";
import styled from "styled-components";

// Colors
import * as colors from "./styles/colors.module.scss";

// LOGO
import logo from "../Assets/logo/logo_01.svg";

const Header = () => {
  return (
    <ContainerHeader>
      <nav>
        <div className="header__logo">
          <a href="#home">
            <img src={logo} alt="Viajes" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#tendencias">TENDENCIAS</a>
          </li>
          <li>
            <a href="#blog">BLOG</a>
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
  z-index: 999;
  background: red;
  background: ${colors.white};
  box-shadow: 0px 3px 6px ${colors.blackOpac};
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10%;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      li a {
        padding: 15px 15px;
        font: normal normal normal 18px/13px Montserrat;
        color: ${colors.blueRelax};
        transition: all 0.2s ease;
      }
      li a:hover {
        color: ${colors.darkblue};
      }
      li:last-child a {
        padding: 15px 0 15px 15px;
      }
    }
  }
`;

export default Header;
