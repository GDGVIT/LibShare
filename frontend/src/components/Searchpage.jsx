import "../css/Searchpage.css";
import PackageDetailCard from "./PackageDetailCard";

function Searchpage({searchQuery}) {
  return (
    <>
      <div className="container">
        <div className="navbar-searchpage">
          <div className="navbar-element">LibShare</div>
          <input
          type="text"
          className="searchbar"
          value={searchQuery}
          placeholder="Search for Packages"
        />
          <div className="navbar-element">Browse all packages</div>
        </div>
        <div className="search-text">
          <p className="search-heading"><b>Search Results </b>for {searchQuery}</p>
          <p className="search-desc">Displaying {} results</p>
        </div>
      </div>
      <div className="pkgcard">
        <PackageDetailCard
        name="Example File"
        version="1.0.0.0"
        description="Hahahahaha this is a very well defined description of a file that is going to get downloaded in some shit ass hackathon that is going to prove useless because in the end nothing is gonna matter for nobody. We're too snall, and hurt, and broken, and in general imperfect machines who have no purpose but try to think we do."
        fileUrl="http://localhost:8080/" />
      </div>
    </>
  );
}

export default Searchpage;
