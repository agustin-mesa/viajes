import React, { useState } from "react";
import styled from "styled-components";

// Colors
import * as colors from "../components/styles/colors.module.scss";

// IMG
import card01 from "../Assets/img/card_01.png";
import card02 from "../Assets/img/card_02.png";
import card03 from "../Assets/img/card_03.png";

// Importo etiquetas default con estilos propios
import { H3 } from "../components/styles/stylesDefault";

// Components
import TendenciaItem from "../components/TendenciaItem";

const Tendencias = () => {
  const [tendencias, changeTendencias] = useState();

  const readJson = () => {
    fetch("../tendencias.json")
      .then((response) => return response.json())
      .then((data) => console.log(data));
  };
  readJson();

  // Simulo una base de datos para luego imprimir cada CARD.
  // Aunque también se podría hacer manualmente usando el componente
  // TendenciaItem y usar sus props, pero la manera más eficiente es el de
  // simular una base de datos; tranquilamente se muestra cada CARD con tan solo
  // agregar un objeto más dentro del array.
  /*
  const tendencias = [
    {
      src: card01, // Imagen
      isNew: true, // Para saber si es nueva la tendencia
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
  */

  return (
    <ContainerTendencias id="tendencias">
      <div className="tendencias">
        <div className="tendencias__header">
          <H3 color="darkblue">TENDENCIAS</H3>
        </div>
        <div className="tendencias__body">
          {/* Obtengo el array de objetos simulado como base de datos */}
          {/* {tendencias.map((tendencia, i) => {
            return (
              <TendenciaItem
                src={tendencia.src}
                nuevo={tendencia.isNew}
                titulo={tendencia.titulo}
                descripcion={tendencia.descripcion}
                key={i}
              />
            );
          })} */}
        </div>
      </div>
    </ContainerTendencias>
  );
};

const ContainerTendencias = styled.section`
  padding: 80px 10%;
  background: ${colors.grey};

  .tendencias__body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    row-gap: 40px;
    -moz-column-gap: 15px;
    column-gap: 15px;

    margin: 35px 0 0;
  }
  .tendencias__body div:last-child {
    margin: 0;
  }
  .tendencias__header {
    width: 100%;
  }

  @media only screen and (max-width: 800px) {
    .tendencias__body {
      grid-template-columns: repeat(2, 1fr);
    }
    .tendencias__body .tendencia-item:nth-child(3) {
      display: none;
    }
  }
  @media only screen and (max-width: 600px) {
    .tendencias__body {
      grid-template-columns: repeat(1, 1fr);
    }
    .tendencias__body .tendencia-item:nth-child(2) {
      display: none;
    }
  }
`;

export default Tendencias;
