import React from "react";
import styled from "styled-components";

// Colors
import * as colors from "../components/styles/colors.module.scss";

// IMG
import articuloBig01 from "../Assets/img/articulo_big_01.png";
import articuloBig02 from "../Assets/img/articulo_big_02.png";

// Importo etiquetas default con estilos propios
import { Parrafo, Span, H3 } from "../components/styles/stylesDefault";

// Components
import BigNewItem from "../components/BigNewItem";

const Blog = () => {
  return (
    <ContainerBlog>
      <div className="blog" id="blog">
        <div className="blog__header">
          <H3 color="darkblue">BLOG</H3>
        </div>
        <article className="blog__article">
          <BigNewItem image={articuloBig01} />
        </article>
        <aside className="blog__aside"></aside>
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
    background: red;
    padding: 75px 0 50px;
  }
`;

export default Blog;
