import React from "react";
import styled from "styled-components";

// Importo etiquetas default con estilos propios
import { Span } from "../components/styles/stylesDefault";

const BigNewItem = ({ src, alt }) => {
  return (
    <NewItem>
      <img src={src} alt={alt} />
      <div className="newItem__info">
        <Span color="white">CIUDAD</Span>
      </div>
    </NewItem>
  );
};

const NewItem = styled.div`
  position: relative;

  .newItem__info {
    position: absolute;
    top: 25px;
    left: 25px;
    right: 25px;
    bottom: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default BigNewItem;
