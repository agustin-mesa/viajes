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

const NewItemSmall = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  margin: 0 0 40px;
  span.titulo {
    margin: 20px 0 10px;
  }
  .img__bg {
    width: 100%;
  }
`;

export default SmallNewItem;
