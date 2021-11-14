import React, { useState } from "react";
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

  const handleMenu = () => {
    return changeHamburguerMenu(!hamburguerMenu);
  };

  return (
    <ContainerHeader>
      <nav>
        <div className="nav__logo">
          <a href="#home">
            <img src={logo} alt="Viajes" />
          </a>
        </div>

        <div className="nav__menu">
          {!hamburguerMenu ? (
            <img src={icHamburguer} alt="" onClick={handleMenu} />
          ) : (
            <img src={icTimesExit} alt="" onClick={handleMenu} />
          )}
          <ul className="noMobile">
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
    .header__logo a img {
      width: 100px;
    }
    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      li a {
        padding: 15px 15px;
        font: normal normal normal 1.125em/13px Montserrat;
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

  @media only screen and (max-width: 768px) {
    nav .nav__logo a img {
      width: 80px;
    }
    .nav__mobile {
      display: flex;
      img {
        animation: ${showMenu} 0.5s ease;
      }
    }
    .nav__menu img:hover < ul {
      display: none;
    }
    .noMobile {
    }
  }
`;

export default Header;
