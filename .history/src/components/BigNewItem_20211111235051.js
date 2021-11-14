import React from "react";
import styled from "styled-components";

// Colors
import * as colors from "./styles/colors.module.scss";

// Importo etiquetas default con estilos propios
import { Span, H3, Parrafo } from "../components/styles/stylesDefault";

// IMG
import icTime from "../Assets/iconos/time.svg";

const BigNewItem = ({ src, alt, time }) => {
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
            geográfico
          </Parrafo>
          <span>
            <img src={icTime} alt="Time" /> Hace 2m
          </span>
        </div>
      </div>
    </NewItem>
  );
};

const NewItem = styled.div`
  position: relative;

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
    margin: 0;
  }
  .info__body span {
    display: flex;
    align-items: center;
    font: normal normal normal 13px/26px Montserrat;
    color: ${colors.blueRelax};
    margin: 25px 0 0;
    img {
      margin: 0 5px 0 0;
    }
  }
`;

export default BigNewItem;
