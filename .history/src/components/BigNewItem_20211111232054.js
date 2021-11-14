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
  width: 100%;
`;

export default BigNewItem;
