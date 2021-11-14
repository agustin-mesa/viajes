import React from "react";
import styled from "styled-components";

// Colors
import * as colors from "../components/styles/colors.module.scss";

// IMG
import artBig01 from "../Assets/img/articulo_big_01.png";
import artBig02 from "../Assets/img/articulo_big_02.png";
import artSmall01 from "../Assets/img/articulo_small_01.png";
import artSmall02 from "../Assets/img/articulo_small_02.png";
import artSmall03 from "../Assets/img/articulo_small_03.png";

// Importo etiquetas default con estilos propios
import { H3 } from "../components/styles/stylesDefault";

// Components
import BigNewItem from "../components/BigNewItem";
import SmallNewItem from "../components/SmallNewItem";

const Blog = () => {
  const articulosBig = [
    {
      src: artBig01,
      tipo: "CIUDAD",
      titulo: "Artículo de puente",
      descripcion:
        "Un puente es una construcción que permite salvar un accidente geográfico como un río.",
      time: "2m",
    },
    {
      src: artBig02,
      tipo: "AVENTURA",
      titulo: "Artículo de bosque",
      descripcion:
        "Lugar poblado de árboles y arbustos. Área con una importante densidad de árboles.",
      time: "15m",
    },
  ];

  const articulosSmall = [
    {
      src: artSmall01,
      titulo: "Artículo de elefante",
      time: "3h",
    },
    {
      src: artSmall02,
      titulo: "Artículo de loro",
      time: "4h",
    },
    {
      src: artSmall03,
      titulo: "Artículo de camino",
      time: "8h",
    },
  ];

  return (
    <ContainerBlog id="blog">
      <div className="blog__header">
        <H3 color="darkblue">BLOG</H3>
      </div>
      <div className="blog__body">
        <div className="body__article">
          {articulosBig.map((articulo, i) => {
            return (
              <BigNewItem
                src={articulo.src}
                tipo={articulo.tipo}
                titulo={articulo.titulo}
                descripcion={articulo.descripcion}
                time={articulo.time}
                key={i}
              />
            );
          })}
        </div>
        <div className="body__article2">
          {articulosSmall.map((articulo, i) => {
            return (
              <SmallNewItem
                src={articulo.src}
                titulo={articulo.titulo}
                time={articulo.time}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </ContainerBlog>
  );
};

const ContainerBlog = styled.section`
  position: relative;
  padding: 0 10% 40px;
  background: linear-gradient(180deg, ${colors.grey} 20%, ${colors.white} 0%);

  .blog__body {
    display: grid;
    grid-template-columns: 65% 1fr;
    grid-template-rows: auto;
    row-gap: 40px;
    -moz-column-gap: 15px;
    column-gap: 15px;
    margin: 35px 0 0;
  }
  .body__article {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .body__article2 {
    display: grid;
    grid-template-rows: auto 1fr;
    row-gap: 40px;
  }
  article:last-child {
    margin: 0;
  }

  @media only screen and (max-width: 800px) {
    & {
      padding: 0 0 40px;
    }
    .blog__header {
      padding: 0 10%;
    }

    .blog__body {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    .body__article2 {
      display: none;
    }
  }
`;

export default Blog;
