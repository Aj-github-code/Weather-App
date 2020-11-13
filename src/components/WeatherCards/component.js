import React from "react";
import styled from "@emotion/styled";

import Location from "./Location";
import Condition from "./Condition";
import Icon from "./Icon";
import { motion } from "framer-motion";

const WeatherCard = ({ temp, condition, city, country, getWeather }) => {
  let highcolor = 0;
  let lowcolor = 0;
  let bg = null;
  if (temp >= 18) {
    highcolor = (1 - (temp - 18) / 22) * 255;
    lowcolor = highcolor - 200;
    bg = `linear-gradient(
            to top, 
            rgb(255, ${highcolor}, 0),
            rgb(255, ${Math.abs(lowcolor)}, 0)
            )`;
  } else if (temp < 18) {
    highcolor = (1 - (temp + 20) / 38) * 255;
    lowcolor = highcolor - 200;
    bg = `linear-gradient(
            to top, 
            rgb(0, ${highcolor}, 255),
            rgb(0, ${Math.abs(lowcolor)}, 255)
            )`;
  }

  const Card = styled.div`
    background: ${bg};
    width: 160px;
    height: 240px;
    margin: 4px;
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 24px;
    justify-content: space-around;
  `;
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <Card>
        <Location getWeather={getWeather} city={city} country={country} />
        <Icon condition={condition} />
        <Condition temp={temp} condition={condition} />
      </Card>
    </motion.div>
  );
};

export default WeatherCard;
