import React from "react";
import styled from "@emotion/styled";
import Reel from "react-reel";

const Condition = ({ temp, condition }) => {
  const reelStyle = {
    reel: {
      height: "1.07em",
      display: "flex",
      alignItems: "flex-end",
      overflowY: "hidden",
      justifyContent: "center",
      lineHeight: "0.95em",
    },
    group: {
      transitionDelay: "0",
      transitionTimingFunction: "ease-in-out",
      transform: "translate(0, 0)",
      height: "1.5em",
    },
    number: {
      height: "1em",
      fontFamily: "Fari Sans",
    },
  };

  return (
    <>
      <div style={{ fontSize: "2rem" }}>
        <Reel theme={reelStyle} text={`${temp}°C`} />
      </div>
      <Conditions>{condition}</Conditions>
    </>
  );
};

export default Condition;

const Conditions = styled.h3`
  font-family: "Merriweather Sans", sans-serif;
  font-family: 1.2rem;
`;
