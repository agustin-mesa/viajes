import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled, { keyframes } from "styled-components";

// Colors
import * as colors from "./styles/colors.module.scss";

// LOGO
import logo from "../Assets/logo/logo_01.svg";

// Iconos
import icHamburguer from "../Assets/iconos/hamburguer_menu.svg";
import icTimesExit from "../Assets/iconos/times_exit.svg";

const Header = () => {
  const [hamburguerMenu, changeHamburguerMenu] = useState(false);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 764px)" });

  return (
    <ContainerHeader>
      <nav>
        <div className="nav__logo">
          <a href="#home">
            <img src={logo} alt="Viajes" />
          </a>
        </div>

        <div className="nav__menu">
          {isTabletOrMobile && (
            <img
              src={!hamburguerMenu ? icHamburguer : icTimesExit}
              alt=""
              onClick={() => changeHamburguerMenu(!hamburguerMenu)}
            />
          )}
          {hamburguerMenu && (
            <div
              className="bgAction"
              onClick={() => changeHamburguerMenu(!hamburguerMenu)}
            ></div>
          )}

          <ul
            className={`nav__list ${
              isTabletOrMobile && `${!hamburguerMenu && "off"}`
            }`}
            onClick={() => changeHamburguerMenu(!hamburguerMenu)}
          >
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
        </div>
      </nav>
    </ContainerHeader>
  );
};

const showMenu = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity:1;
  }
`;
const offMenu = keyframes`
  0%{
    opacity:1;
  }
  100%{
    opacity:0;
    display:none;
  }
`;

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
  }
  .header__logo a img {
    width: 100px;
  }
  .nav__list {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
  .nav__list li a {
    padding: 15px 15px;
    font: normal normal normal 1.125em/0.8125em Montserrat;
    color: ${colors.blueRelax};
    transition: all 0.2s ease;
  }
  .nav__list li a:hover {
    color: ${colors.darkblue};
  }
  .nav__list li:last-child a {
    padding: 15px 0 15px 15px;
  }

  @media only screen and (max-width: 768px) {
    nav .nav__logo a img {
      width: 80px;
    }
    .nav__menu img {
      position: fixed;
      top: 15px;
      right: 10%;
      z-index: 999;
    }
    .nav__menu .bgAction {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${colors.darkblueOpac};
      animation: ${showMenu} 0.5s ease forwards;
    }
    .nav__list {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      width: 60%;
      background: ${colors.white};
      flex-direction: column;
      justify-content: flex-start;
      animation: ${showMenu} 0.5s ease forwards;
      align-items: flex-start;
      padding: 70px 0 0;
    }
    .nav__list li {
      padding: 10px;
      width: 100%;
    }
    .nav__list li a {
      padding: 10px;
      color: ${colors.darkblue};
      font: normal normal normal 1.2em/0.9em Montserrat;
    }
    .nav__list li:last-child a {
      padding: 10px;
    }
    .off {
      animation: ${offMenu} 0.2s ease forwards;
    }
    .false {
    }
  }
`;

export default Header;
