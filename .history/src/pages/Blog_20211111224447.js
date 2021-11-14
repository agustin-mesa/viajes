import React from "react";
import styled from "styled-components";

// Colors
import * as colors from "../components/styles/colors.module.scss";

// Importo etiquetas default con estilos propios
import { Parrafo, Span, H3 } from "../components/styles/stylesDefault";

const Blog = () => {
  return (
    <ContainerBlog>
      <div className="blog">
        <div className="blog__header">
          <H3 color="darkblue">BLOG</H3>
        </div>
        <article className="blog__article"></article>
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
    background: red;
    position: absolute;
  }

  .blog__header {
    display: flex;
    align-items: center;
    padding: 35px 0 50px;
    background: red;
    div:last-child {
      margin: 0;
    }
  }
`;

export default Blog;
