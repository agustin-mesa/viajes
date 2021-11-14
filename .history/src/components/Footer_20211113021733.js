import React from "react";
import styled from "styled-components";

// Colors
import * as colors from "../components/styles/colors.module.scss";

// IMG
import icFacebook from "../Assets/iconos/facebook.svg";
import icInstagram from "../Assets/iconos/instagram.svg";

const Footer = () => {
  return <ContainerFooter></ContainerFooter>;
};

const ContainerFooter = styled.footer`
  background: ${colors.darkblue};
`;

export default Footer;
