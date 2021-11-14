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
        <div className="blog__body">
          <article className="blog__article">
            <BigNewItem src={articuloBig01} alt="asd" />
          </article>
          <aside className="blog__aside">asdsa</aside>
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
    background: green;
  }
  .blog__body {
    display: flex;
    align-items: center;
    flex-direction: row;
    background: yellow;
    width: 100%;
  }
  .blog__header {
    width: 100%;
  }
  .blog__article {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 35px 0 0;
    background: red;
  }
  .blog__aside {
    width: 100%;
    background: grey;
  }
`;

export default Blog;
