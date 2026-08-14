import react from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="search-form row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type a city..."
            className="form-control"
          />
        </div>
        <div className="col-3">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Monday 10:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          />
          <span className="temperature">25</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
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
