import React from "react";
import { Link } from "react-router-dom";
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <p>
            Realizacja zadania nr 1 w ramach laboratorium PFSwCO.
          </p>
          <p>
            Mateusz Kuczyński
          </p>
          <p>
            <Link to="/fibonacci">Kalkulator Fibonacciego</Link>
          </p>
          <p>
            <Link to="/docs">Dokumentacja projektu</Link>
          </p>
        </header>
      </div>
  );
}

export default App;
