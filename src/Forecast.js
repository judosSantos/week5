import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="forecast row">
        <WeatherForecastDay data={forecast[0]} />{" "}
        <WeatherForecastDay data={forecast[1]} />{" "}
        <WeatherForecastDay data={forecast[2]} />{" "}
        <WeatherForecastDay data={forecast[3]} />{" "}
        <WeatherForecastDay data={forecast[4]} />{" "}
      </div>
    );
  } else {
    const apiKey = "76ab2ecoa4e0c3c3807ad4cff1b5696t";
    const query = props.city;
    const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
