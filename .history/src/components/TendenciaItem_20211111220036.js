import React from "react";
import styled from "styled-components";

// Colors
import * as colors from "./styles/colors.module.scss";

import { Span } from "./styles/stylesDefault";

const TendenciaItem = ({ src, alt }) => {
  return (
    <TenItem>
      <div className="tendencia-item__img">
        <img src={src} alt={alt} />
      </div>
      <div className="tendencia-item__new">
        <span>NUEVO</span>
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

  .tendencia-item__new {
    position: relative;
    span {
      position: absolute;
      left: 35px;
      font: normal normal bold 16px/13px Montserrat;
      color: ${colors.white};
      padding: 6px 12px;
    }
  }
  .tendencia-item__descrip {
    padding: 35px;
  }
`;

export default TendenciaItem;
