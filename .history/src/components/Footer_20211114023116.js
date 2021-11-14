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
        <a href="#">
          <img src={icInstagram} alt="Instagram" />
        </a>
        <a href="#">
          <img src={icFacebook} alt="Facebook" />
        </a>
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

  .redes a:first-child {
    margin: 0 20px;
  }
  @media only screen and (max-width: 600px) {
    & {
      padding: 30px 10%;
    }
  }
`;

export default Footer;
