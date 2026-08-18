import React from "react";
import FormatteDate from "./FormatteDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <div className="current-date">
        <FormatteDate date={props.data.date} />
      </div>
      <div className="current-weather text-capitalize">
        {props.data.description}
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <div className="weather-icon-temperature-unit">
            <span className="img">
              <WeatherIcon code={props.data.icon} />
            </span>
            <span className="temperature">{props.data.temperature}</span>
            <span className="unit">°C</span>
          </div>
        </div>

        <div className="description col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
