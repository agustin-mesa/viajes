import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="#">
            <img src={logo} alt="Viajes" />
          </NavLink>
        </div>
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
  background: ${colors.white};
  box-shadow: 0px 3px 6px ${colors.blackOpac};
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 8%;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      li a {
        padding: 15px 15px;
        font: normal normal normal 18px/13px;
        letter-spacing: 0px;
        color: ${colors.blueRelax};
      }
      li a:hover {
        background: red;
        color: ${colors.darkBlue};
      }
    }
  }
`;

export default Header;
