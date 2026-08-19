import React, { useState } from "react";
import "./Weather.css";
import App from "./App.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import FormatteDate from "./FormatteDate";
import WeatherIcon from "./WeatherIcon";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      temperature: Math.round(response.data.temperature.current),
      humidity: Math.round(response.data.temperature.humidity),
      wind: Math.round(response.data.wind.speed),
      city: response.data.city,
      icon: response.data.condition.icon,
    });

    props.onWeatherChange(response.data.condition.icon);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "76ab2ecoa4e0c3c3807ad4cff1b5696t";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form className="search-form row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoFocus={true}
              onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <button
              type="submit"
              className="btn btn-primary w-100"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
  }
}
