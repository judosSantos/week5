import React from "react";
import FormatteDate from "./FormatteDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureUnit from "./TemperatureUnit";

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

      <div className="row mt-3 weather-icon-temperature-unit">
        <div className="col-2">
          <span className="img">
            <WeatherIcon code={props.data.icon} size={60} />
          </span>
        </div>
        <div className="col-5">
          <span>
            <TemperatureUnit celcius={props.data.temperature} />
          </span>
        </div>
        <div className="description col-5">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
