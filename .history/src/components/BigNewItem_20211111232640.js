import React from "react";
import styled from "styled-components";

// Importo etiquetas default con estilos propios
import { Span, H3, Parrafo } from "../components/styles/stylesDefault";

const BigNewItem = ({ src, alt }) => {
  return (
    <NewItem>
      <img src={src} alt={alt} />
      <div className="newItem__info">
        <div className="info__header">
          <Span color="white">CIUDAD</Span>
        </div>
        <div className="info__body">
          <H3 color="white">Artículo de puente</H3>
          <Parrafo></Parrafo>
        </div>
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
