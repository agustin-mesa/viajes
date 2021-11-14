import React from "react";
import styled from "styled-components";

const BigNewItem = ({ image }) => {
  return (
    <NewItem img={image}>
      <div className="newItem"></div>
    </NewItem>
  );
};

const NewItem = styled.div`
  position: relative;
  background: url(${(props) => {
    return props.img;
  }});
`;

export default BigNewItem;
