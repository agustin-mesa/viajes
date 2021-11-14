import React from "react";
import styled from "styled-components";

// Importo etiquetas default con estilos propios
import { Span, H3, Parrafo } from "../components/styles/stylesDefault";
import Time from "./Time";

const BigNewItem = ({ src, tipo, titulo, descripcion, time }) => {
  return (
    <NewItemBig>
      <img className="img__bg" src={src} alt={titulo} />
      <div className="newItem__info">
        <div className="info__header">
          <Span color="white">{tipo}</Span>
        </div>
        <div className="info__body">
          <H3 color="white">{titulo}</H3>
          <Parrafo>{descripcion}</Parrafo>
          <Time time={time} />
        </div>
      </div>
    </NewItemBig>
  );
};

const NewItemBig = styled.div`
  position: relative;
  border-radius: 6px;
  width: 100%;

  .img__bg {
    width: 100%;
    min-width: 1000px;
  }
  .newItem__info {
    position: absolute;
    top: 40px;
    left: 35px;
    right: 35px;
    bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .info__body p {
    width: 100%;
    margin: 0 0 25px;
  }
`;

export default BigNewItem;
