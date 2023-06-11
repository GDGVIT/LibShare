import "../css/Homepage.css";
import Package from "./PackageCard";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function Homepage() {

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  }

  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="navbar-element">LibShare</div>
          <div className="navbar-element">Browse all packages</div>
        </div>
        <div className="heading">
          The LibShare Distribution Package registry
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="searchbar"
            placeholder="Search for Packages"
            onChange={(e) => {setSearchQuery(e.target.value)}}
          />
        </form>
        <div className="button-holder">
          <a href="" className="install-button">
            Install
          </a>
          <a href="" className="gettingstarted-button">
            Getting started
          </a>
        </div>
      </div>
      <div
        className="container"
        style={{
          backgroundColor: "#282828",
          color: "white",
        }}
      >
        <div className="sub-heading">
          Empower Your Hackathon Journey with Libshare: Unleashing the Magic of
          Shared Code!
        </div>

        <div className="package-heading">Packages</div>
        <div className="package-holder">
          <Package name={"A package"} version={"v1.1"} />
          <Package name={"A package 1"} version={"v1.2"} />
          <Package name={"A package 2"} version={"v1.3"} />
          <Package name={"A package 3"} version={"v1.4"} />
          <Package name={"A package 4"} version={"v1.5"} />
          <Package name={"A package 5"} version={"v1.6"} />
        </div>
      </div>
    </>
  );
}

export default Homepage;
