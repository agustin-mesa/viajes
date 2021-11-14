import React from "react";
import styled from "styled-components";

const BigNewItem = ({ src, alt }) => {
  return (
    <NewItem>
      <img src={src} alt={alt} />
      <div className="newItem"></div>
    </NewItem>
  );
};

const NewItem = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`;

export default BigNewItem;
