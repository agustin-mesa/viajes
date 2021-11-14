import React from "react";
import styled from "styled-components";

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
  font: normal normal normal 13px/26px Montserrat;
  letter-spacing: 0px;
  color: #cbd0d3;
`;

export default Time;
