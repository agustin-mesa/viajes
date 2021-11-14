import styled from "styled-components";

// Colors
import * as colors from "./colors.module.scss";

const Parrafo = styled.p`
  margin: 10px 0 0;
  font: normal normal normal 16px/26px Montserrat;
  width: 50%;
  color: ${colors.white};
`;

const H3 = styled.h3`
  font: normal normal bold 24px/34px Montserrat;
  color: ${(props) => {
    if (props.color === "white") return colors.white;
    if (props.color === "darkblue") return colors.darkblue;
  }};
`;

const H5 = styled.h5`
  font: normal normal bold 16px/20px Montserrat;
  color: ${colors.pink};
  margin: 0 0 10px;
  img {
    margin: 0 0 0 15px;
  }
`;

const Span = styled.span`
  font: normal normal bold 16px/20px Montserrat;
  color: ${(props) => {
    if (props.color === "white") return colors.white;
    if (props.color === "darkblue") return colors.darkblue;
  }};
`;

export { Parrafo, Span, H3, H5 };
