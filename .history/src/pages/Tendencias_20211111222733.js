import React from "react";
import styled from "styled-components";

import * as colors from "../components/styles/colors.module.scss";

// IMG
import card01 from "../Assets/img/card_01.png";
import card02 from "../Assets/img/card_02.png";
import card03 from "../Assets/img/card_03.png";

// Importo etiquetas default con estilos propios
import { H3 } from "../components/styles/stylesDefault";
import TendenciaItem from "../components/TendenciaItem";

const Tendencias = () => {
  // Simulo una base de datos para luego imprimir cada CARD.
  // Aunque también se podría hacer manualmente usando el componente
  // TendenciaItem y usar sus props, pero la manera más eficiente es el de
  // simular una base de datos; tranquilamente se muestra cada CARD con tan solo
  // agregar un objeto más dentro del array.
  const tendencias = [
    {
      src: card01,
      isNew: true,
      titulo: "Montañas y magia",
      descripcion: (
        <>
          Aquí la descripción para <b>Montañas y magia</b>.
        </>
      ),
    },
    {
      src: card02,
      isNew: false,
      titulo: "Playas y sol",
      descripcion: (
        <>
          La descripción de <b>Playas y sol</b> debe ser esta.
        </>
      ),
    },
    {
      src: card03,
      isNew: false,
      titulo: "Nieve y aventura",
      descripcion: (
        <>
          Contiene la información de <b>Nieve y aventura</b>.
        </>
      ),
    },
  ];

  return (
    <ContainerTendencias id="tendencias">
      <div className="tendencias">
        <div className="section-header">
          <H3 color="darkblue">TENDENCIAS</H3>
        </div>
        <div className="tendencias__body">
          {tendencias.map((tendencia, i) => {
            return (
              <TendenciaItem
                src={tendencia.src}
                nuevo={tendencia.isNew}
                titulo={tendencia.titulo}
                descripcion={tendencia.descripcion}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </ContainerTendencias>
  );
};

const ContainerTendencias = styled.section`
  height: 95vh;
  padding: 80px 10% 0;
  background: ${colors.grey};

  .tendencias__body {
    display: flex;
    align-items: center;
    padding: 35px 0 50px;

    div:last-child {
      margin: 0;
    }
  }
`;

export default Tendencias;
