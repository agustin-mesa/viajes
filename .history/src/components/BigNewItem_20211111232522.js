import React from "react";
import styled from "styled-components";

// Importo etiquetas default con estilos propios
import { Span, H3 } from "../components/styles/stylesDefault";

const BigNewItem = ({ src, alt }) => {
  return (
    <NewItem>
      <img src={src} alt={alt} />
      <div className="newItem__info">
        <Span color="white">CIUDAD</Span>
        <H3 color="white">Artículo de puente</H3>
      </div>
    </NewItem>
  );
};

const NewItem = styled.div`
  position: relative;

  .newItem__info {
    position: absolute;
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default BigNewItem;
