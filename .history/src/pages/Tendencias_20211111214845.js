import React from "react";
import styled from "styled-components";

import * as colors from "../components/styles/colors.module.scss";

// IMG
import card01 from "../Assets/img/card_01.png"
import card02 from "../Assets/img/card_02.png"
import card03 from "../Assets/img/card_03.png"

// Importo etiquetas default con estilos propios
import { Parrafo, Span, H3, H5 } from "../components/styles/stylesDefault";
import TendenciaItem from "../components/TendenciaItem";

const Tendencias = () => {
    // Simulo una base de datos para luego imprimir cada CARD.
    // Aunque también se podría hacer manualmente usando el componente
    // TendenciaItem y usar sus props, pero la manera más eficiente es el de
    // simular una base de datos; tranquilamente se muestra cada CARD con tan solo
    // agregar un objeto más dentro del array.
    const tendencias = [{
        src: card01,
        alt: "card01",
    },{
        src: card02,
        alt: "card02",
    }];

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
