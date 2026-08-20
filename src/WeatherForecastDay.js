import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Son", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="forecast-day col">
      <h2>{day()}</h2>
      <div className="forecast-icon">
        <WeatherIcon code={props.data.condition.icon} size={30} />
      </div>
      <div className="forecastTemperature">
        <span className="tempMin">
          {Math.round(props.data.temperature.minimum)}
          <span className="tempUnit">°</span>
        </span>
        <span className="tempMax">
          {Math.round(props.data.temperature.maximum)}
          <span className="tempUnit">°</span>
        </span>
      </div>
    </div>
  );
}
