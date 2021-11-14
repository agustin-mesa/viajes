import React from "react";
import styled from "styled-components";

// Colors
import * as colors from "../components/styles/colors.module.scss";

// Importo etiquetas default con estilos propios
import { Span } from "../components/styles/stylesDefault";

// Components
import Time from "./Time";

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
  align-items: start;
  justify-content: center;
  flex-direction: column;
  margin: 0 0 40px;
  span::first-child {
    margin: 20px 0 10px;
  }
`;

export default SmallNewItem;
