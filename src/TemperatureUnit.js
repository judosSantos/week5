import React, { useState } from "react";
import Weather from "./Weather.css";

export default function TemperatureUnit(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="unit">
        <span className="temperature">{Math.round(props.celcius)}</span>

        <span className="unit">
          °C |{" "}
          <a href="#" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;

    return (
      <div className="unit">
        <span className="temperature">{Math.round(fahrenheit)}</span>

        <span className="unit">
          <a href="#" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
