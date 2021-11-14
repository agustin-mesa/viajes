import React from "react";
import styled from "styled-components";

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
            geográfico como un río.
          </Parrafo>
          <Timer>
            <img src={icTime} alt="Time" /> Hace {time}
          </Timer>
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
    display: flex;
    align-items: center;
    font: normal normal normal 13px/26px Montserrat;
    color: ${colors.blueRelax};
    img {
      margin: 0 5px 0 0;
    }
    margin: 10px 0 0;
  }
`;

export default BigNewItem;
