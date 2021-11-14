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
              src={icHamburguer}
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
          >
            {isTabletOrMobile && (
              <li>
                <img
                  src={icTimesExit}
                  alt=""
                  onClick={() => changeHamburguerMenu(!hamburguerMenu)}
                />
              </li>
            )}

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
    font: normal normal normal 1.125em/13px Montserrat;
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
      display: flex;
      z-index: 999;
      animation: ${showMenu} 0.5s ease;
    }
    .nav__menu .bgAction {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${colors.darkblueOpac};
      animation: ${showMenu} 0.5s ease;
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
      animation: ${showMenu} 0.5s ease;
      align-items: flex-start;
    }
    .nav__list li {
      padding: 10px;
      width: 100%;
    }
    .nav__list li a {
      padding: 10px;
    }
    .nav__list li:first-child {
      background: red;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 15px 0 35px 0;
    }
    .nav__list li:first-child img {
      padding: 0 10%;
    }
    .nav__list li:last-child a {
      padding: 10px;
    }
    .off {
      display: none;
    }
  }
`;

export default Header;
