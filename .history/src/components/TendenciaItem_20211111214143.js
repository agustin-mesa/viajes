import React from "react";
import styled from "styled-components";

// Colors
import * as colors from "./styles/colors.module.scss";

const TendenciaItem = ({ src, alt }) => {
  return (
    <TenItem>
      <div className="tendencia-item__img">
        <img src={src} alt={alt} />
      </div>
      <div className="tendencia-item__descrip">
        <Span color="darkblue">Montañas y magia</Span>
      </div>
    </TenItem>
  );
};

const TenItem = styled.div`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px ${colors.blackOpac};
  border-radius: 6px;
`;

export default TendenciaItem;
