import React from "react";
import styled from "styled-components";

// Colors
import * as colors from "./styles/colors.module.scss";

import { Span } from "./styles/stylesDefault";

const TendenciaItem = ({ src, nuevo, titulo, descripcion }) => {
  return (
    <TenItem>
      <div className="tendencia-item__img">
        <img src={src} alt={titulo} />
      </div>
      <div className="tendencia-item__new">{nuevo && <span>NUEVO</span>}</div>
      <div className="tendencia-item__descrip">
        <Span color="darkblue">{titulo}</Span>
        <p>{descripcion}</p>
      </div>
    </TenItem>
  );
};

const TenItem = styled.div`
  background: ${colors.white} 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px ${colors.blackOpac};
  border-radius: 0 0 6px 6px;
  margin: 0 8px 0 0;
  width: 100%;

  .tendencia-item__img img {
    width: 100%;
  }
  .tendencia-item__new {
    width: 100%;
    position: relative;
    span {
      position: absolute;
      top: -20px;
      left: 35px;
      background: ${colors.pink};
      border-radius: 6px;
      padding: 10px;
      font: normal normal bold 16px/13px Montserrat;
      color: ${colors.white};
    }
  }
  .tendencia-item__descrip {
    padding: 40px 35px;
    p {
      font: normal normal normal 13px/23px Open Sans;
      color: ${colors.greyBlue};
    }
  }
`;

export default TendenciaItem;
