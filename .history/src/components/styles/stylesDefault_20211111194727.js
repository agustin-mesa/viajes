import styled from "styled-components";

// Colors
import * as colors from "./colors.module.scss";

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
  color: ${colors.white};
`;

export { Span, H5 };
