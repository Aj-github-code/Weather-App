import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Icon = styled.img`
    width: 50%;
  `;
  var icon = "";
  switch (props.condition) {
    case "Clear":
      icon = `./img/Mostly Sunny.png`;
      break;
    case "Clouds":
      icon = `./img/Mostly Cloudy.png`;
      break;
    case "Dust":
      icon = `./img/Dust.png`;
      break;
    case "Mist":
      icon = `./img/Fog.png`;
      break;
    case "Breezy":
      icon = `./img/Breezy.png`;
      break;
    case "Hail":
      icon = `./img/Hail.png`;
      break;
    case "Drizzle":
      icon = `./img/Drizzle.png`;
      break;

    case "Rain":
      icon = `./img/Rain.png`;
      break;

    case "Snow":
      icon = `./img/Snow.png`;
      break;

    case "Thunderstorm":
      icon = `./img/Scattered Thunderstorm.png`;
      break;

    case "Haze":
      icon = `./img/Haze1.png`;
      break;
    case "Tornado":
      icon = `./img/Tornado.png`;
      break;
    case "Fog":
      icon = `./img/Fog.png`;
      break;

    default:
      icon = `./img/Fog.png`;
      break;
  }

  return <Icon src={icon} alt="weather Icon" />;
};

export default Icon;
