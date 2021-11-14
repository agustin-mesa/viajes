import React from "react";
import styled from "styled-components";

// Colors
import * as colors from "../components/styles/colors.module.scss";

const Blog = () => {
  return <ContainerBlog></ContainerBlog>;
};

const ContainerBlog = styled.section`
  height: 95vh;
  padding: 80px 10% 0;
  background: ${colors.white};

  .tendencias__body {
    display: flex;
    align-items: center;
    padding: 35px 0 50px;

    div:last-child {
      margin: 0;
    }
  }
`;

export default Blog;
