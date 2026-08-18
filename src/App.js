import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

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
