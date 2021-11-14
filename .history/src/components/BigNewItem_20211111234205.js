import React from "react";
import styled from "styled-components";

// Importo etiquetas default con estilos propios
import { Span, H3, Parrafo } from "../components/styles/stylesDefault";
import Time from "./Time";

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
          <Parrafo>
            Un puente es una construcción que permite salvar un accidente
            geográfico como un río.
          </Parrafo>
          <Time time="2m" />
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
  .info__body p {
    width: 100%;
  }
  .info__body span {
    margin: 10px 0 0;
  }
`;

export default BigNewItem;
