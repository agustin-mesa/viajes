import React from "react";
import styled from "styled-components";

const BigNewItem = ({ src }) => {
  return (
    <NewItem>
      <img src={src} alt="" srcset="" />
      <div className="newItem"></div>
    </NewItem>
  );
};

const NewItem = styled.div`
  position: relative;
  img {
  }
`;

export default BigNewItem;
