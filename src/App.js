import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
import Background from "./Background";

function App() {
  const [background, setBackground] = useState(null);
  return (
    <div className="App">
      <Background code={background} />
      <div className="container">
        <Weather defaultCity="New York" onWeatherChange={setBackground} />
        <footer>
          This project was coding by JuSantos and hosted on{" "}
          <a
            href="https://github.com/judosSantos/week5.git"
            target="_blank"
            rel="github link"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
