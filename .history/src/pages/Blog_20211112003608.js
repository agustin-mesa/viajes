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
    <ContainerBlog>
      <div className="blog" id="blog">
        <div className="blog__header">
          <H3 color="darkblue">BLOG</H3>
        </div>
        <div className="blog__body">
          <article className="blog__article">
            {articulosBig.map((articulo) => {
              return (
                <BigNewItem
                  src={articulo.src}
                  alt={articulo.tipo}
                  tipo={articulo.tipo}
                  titulo={articulo.titulo}
                  descripcion={articulo.descripcion}
                  time={articulo.time}
                />
              );
            })}
          </article>
          <aside className="blog__aside">
            {articulosSmall.map((articulo) => {
              return (
                <SmallNewItem
                  src={articulo.src}
                  titulo={articulo.titulo}
                  time={articulo.time}
                />
              );
            })}
          </aside>
        </div>
      </div>
    </ContainerBlog>
  );
};

const ContainerBlog = styled.section`
  position: relative;
  height: 95vh;
  padding: 80px 10% 0;
  background: ${colors.white};

  .blog {
    position: absolute;
    top: -300px;
    left: 10%;
    right: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 75px 0 50px;
  }
  .blog__body {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    margin: 35px 0 0;
    width: 100%;
  }
  .blog__header {
    width: 100%;
  }
  .blog__article {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    div:first-child {
      margin: 0 0 40px;
    }
  }
  .blog__aside {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 0 0 0 15px;
  }
`;

export default Blog;
