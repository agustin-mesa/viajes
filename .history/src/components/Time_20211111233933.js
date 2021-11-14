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

const Timer = styled.span``;

export default Time;
