import React from "react";

// Colors
import * as colors from "../components/styles/colors.module.scss";

const Span = ({ texto }) => {
  return <EtiquetaSpan>{texto}</EtiquetaSpan>;
};

const EtiquetaSpan = styled.span`
  font: normal normal bold 16px/20px Montserrat;
  color: ${colors.white};
`;

export default Span;
