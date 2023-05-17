import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="navbar-element">PC Distribution package-PKG</div>
          <div className="navbar-element">Browse all packages</div>
        </div>
        <div className="heading">The Pc Distribution Package registry</div>
        <input
          type="text"
          className="searchbar"
          placeholder="Search for Packages"
        />
        <div className="button-holder">
          <a href="" className="install-button">
            Install
          </a>
          <a href="" className="gettingstarted-button">
            Getting started
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
