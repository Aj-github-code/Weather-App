import React from "react";

import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div>
      <div className="Main">
        <div className="Dashboard">
          <div className="Profile">
            <img src="./img/Mostly Sunny.png" />
          </div>
          <div>
            <ul className="unorder_list" type="none">
              <li>
                <button>Home</button>
              </li>
              <li>
                <button>Dashboard</button>
              </li>
              <li>
                <button>About us</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="Weather">
          <WeatherEngine location="Mumbai, in" />
          <WeatherEngine location="Delhi, in" />
        </div>
      </div>
    </div>
  );
}

export default App;
