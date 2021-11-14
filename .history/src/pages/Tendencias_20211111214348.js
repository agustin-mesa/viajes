import React from "react";
import styled from "styled-components";

import * as colors from "../components/styles/colors.module.scss";

// IMG

// Importo etiquetas default con estilos propios
import { Parrafo, Span, H3, H5 } from "../components/styles/stylesDefault";
import TendenciaItem from "../components/TendenciaItem";

const Tendencias = () => {
    const tendencias = [{

    },{}];

  return (
    <ContainerTendencias id="tendencias">
      <div className="tendencias">
        <div className="section-header">
          <H3 color="darkblue">TENDENCIAS</H3>
        </div>
        <div className="tendencias__body">
            <TendenciaItem src={} alt={}/>
        </div>
      </div>
    </ContainerTendencias>
  );
};

const ContainerTendencias = styled.section`
  width: 100%;
  height: 95vh;
  padding: 0 10%;
  background: ${colors.grey};

  .tendencias__content {
  }
`;

export default Tendencias;
