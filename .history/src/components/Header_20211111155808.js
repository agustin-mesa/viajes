import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <ContainerHeader>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">TENDENCIAS</a>
        </li>
        <li>
          <a href="#">BLOG</a>
        </li>
      </ul>
    </ContainerHeader>
  );
};

const ContainerHeader = styled.header`
  background: red;
`;

export default Header;
