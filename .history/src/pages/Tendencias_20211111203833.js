import React from "react";
import styled from "styled-components";

import * as colors from "../components/styles/colors.module.scss";

// IMG

// Importo etiquetas default con estilos propios
import { Parrafo, Span, H3, H5 } from "../components/styles/stylesDefault";

const Tendencias = () => {
  return (
    <ContainerTendencias id="tendencias">
      <H3 color="darkblue">TENDENCIAS</H3>
    </ContainerTendencias>
  );
};

const ContainerTendencias = styled.div`
  background: #ebebeb 0% 0% no-repeat padding-box;
`;

export default Tendencias;
