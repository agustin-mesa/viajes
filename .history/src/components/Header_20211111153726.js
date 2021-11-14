import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <ContainerHeader>
      <ul>
        <li>HOME</li>
        <li>TENDENCIAS</li>
        <li>BLOG</li>
      </ul>
    </ContainerHeader>
  );
};

const ContainerHeader = styled.header`
  background: red;
`;

export default Header;
