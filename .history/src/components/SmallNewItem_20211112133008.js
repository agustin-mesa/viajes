import React from "react";
import styled from "styled-components";

// Importo etiquetas default con estilos propios
import { Span } from "../components/styles/stylesDefault";

// Components
import Time from "./Time";

const SmallNewItem = ({ src, titulo, time }) => {
  return (
    <NewItemSmall>
      <img className="img__bg" src={src} alt={titulo} />
      <Span className="titulo" color="darkblue">
        {titulo}
      </Span>
      <Time time={time} />
    </NewItemSmall>
  );
};

const NewItemSmall = styled.article`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  margin: 0 0 40px;
  max-width: 335px;
  min-width: 50%;
  span.titulo {
    margin: 20px 0 10px;
  }
  .img__bg {
    width: 100%;
    min-width: 300px;
  }
`;

export default SmallNewItem;