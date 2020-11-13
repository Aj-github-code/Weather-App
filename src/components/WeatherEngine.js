	import React, { useState, useEffect } from "react";

import PulseLoader from "react-spinners/PulseLoader";
import WeatherCard from "./WeatherCards/component";
import styled from "@emotion/styled";

const WeatherEngine = ({ location }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState();
  const [weather, setWeather] = useState({
    temp: null,
    condition: null,
    city: null,
    country: null,
  });

  const getWeather = async (q) => {
    setQuery("");
    setLoading(true);
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=afff710477b495054b882889e593476c`
      );

      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        condition: resJSON.weather[0].main,
        city: resJSON.name,
        country: resJSON.sys.country,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  const Bt = styled.button`
    :hover {
      background-color: red;
      border: none;
    }
  `;
  return (
    <div>
      {!loading && !error ? (
        <div style={{ display: "flex" }}>
          <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            city={weather.city}
            country={weather.country}
            getWeather={getWeather}
          />
        </div>
      ) : loading ? (
        <div
          style={{
            display: "flex",
            width: "200px",
            marginTop: "100px",
            heght: "240px",
            justifyContent: "center",
          }}
        >
          <PulseLoader size={20} color="gray" />
        </div>
      ) : !loading && error ? (
        <div
          style={{
            color: "White",
            backgroundColor: "Orange",
            borderRadius: "8px",
            fontSize: "15",
          }}
        >
          There has been an error!
          <br />
          <Bt
            onClick={() => setError(false)}
            style={{ borderRadius: "20px", width: "20px", height: "20px" }}
          >
            X
          </Bt>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherEngine;
