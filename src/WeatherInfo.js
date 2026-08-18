import React from "react";
import FormatteDate from "./FormatteDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <div className="current-date">
        <FormatteDate date={props.data.date} />
      </div>
      <div className="current-weather">Sunny</div>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
            />
            <span className="temperature">25</span>
            <span className="unit">°C</span>
          </div>
        </div>

        <div className="description col-6">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: 60%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
