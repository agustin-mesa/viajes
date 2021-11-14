import React from "react";
import styled from "styled-components";

// Colors
import * as colors from "./styles/colors.module.scss";

// IMG
import icTime from "../Assets/iconos/time.svg";

const Time = ({ time }) => {
  return (
    <Timer>
      <img src={icTime} alt="Time" /> Hace {time}
    </Timer>
  );
};

const Timer = styled.span`
  display: flex;
  align-items: center;
  font: normal normal normal 0.8125em/26px Montserrat;
  color: ${colors.blueRelax};
  img {
    margin: 0 5px 0 0;
  }
`;
export default Time;
