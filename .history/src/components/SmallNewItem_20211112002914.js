import React from "react";
import styled from "styled-components";

// Colors
import * as colors from "../components/styles/colors.module.scss";

// Importo etiquetas default con estilos propios
import { Span } from "../components/styles/stylesDefault";

const SmallNewItem = ({ src, titulo, time }) => {
  return (
    <NewItemSmall>
      <img src={src} alt={titulo} />
      <Span color="darkblue">{titulo}</Span>
      <Time time={time} />
    </NewItemSmall>
  );
};

const NewItemSmall = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    width: 100%;
    margin: 0 0 10px;
  }
`;

export default SmallNewItem;
