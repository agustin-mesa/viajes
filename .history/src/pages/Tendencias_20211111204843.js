import React from "react";
import styled from "styled-components";

import * as colors from "../components/styles/colors.module.scss";

// IMG

// Importo etiquetas default con estilos propios
import { Parrafo, Span, H3, H5 } from "../components/styles/stylesDefault";

const Tendencias = () => {
  return (
    <ContainerTendencias id="tendencias">
      <div className="tendencias__content">
        <H3 color="darkblue">TENDENCIAS</H3>
      </div>
    </ContainerTendencias>
  );
};

const ContainerTendencias = styled.section`
  width: 100%;
  height: 95vh;
  padding: 90px 10% 35px;
  background: ${colors.grey};
`;

export default Tendencias;
