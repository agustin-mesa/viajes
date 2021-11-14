import React from "react";
import styled from "styled-components";

// Colors
import * as colors from "../components/styles/colors.module.scss";

// IMG
import logo from "../Assets/logo/logo_02.svg";
import icFacebook from "../Assets/iconos/facebook.svg";
import icInstagram from "../Assets/iconos/instagram.svg";

const Footer = () => {
  return (
    <ContainerFooter>
      <div>
        <img src={logo} alt="Viajes" />
      </div>
      <div className="redes">
        <img src={icInstagram} alt="Instagram" />
        <img src={icFacebook} alt="Facebook" />
      </div>
    </ContainerFooter>
  );
};

const ContainerFooter = styled.footer`
  background: ${colors.darkblue};
  padding: 40px 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .redes img:first-child {
    margin: 0 20px;
  }
  @media only screen and (max-width: px) {
    & {
      padding: 40px 10%;
    }
  }
`;

export default Footer;
