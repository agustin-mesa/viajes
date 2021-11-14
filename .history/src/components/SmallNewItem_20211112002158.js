import React from "react";
import styled from "styled-components";

const SmallNewItem = ({ src, titulo, time }) => {
  return (
    <NewItemSmall>
      <img src={src} alt={titulo} />
    </NewItemSmall>
  );
};

const NewItemSmall = styled.div``;

export default SmallNewItem;
