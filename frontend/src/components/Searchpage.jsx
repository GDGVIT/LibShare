import "../css/Searchpage.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PackageDetailCard from "./PackageDetailCard";

function Searchpage() {

  const { query } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(query);
  const [jsonData, setJsonData] = useState(null);
  const [searchCount, setSearchCount] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  }

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/data', {
          method: 'POST',
        });

        if(!response.ok) {
          throw new Error('Failed to fetch data. Make sure server is running on port 8080.');
        }

        const data = await response.json();
        setJsonData(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    setSearchCount(Object.keys(jsonData).length);

    const filterResults = () => {
      if (jsonData) {
        let filteredData = {};
        
        for (const lang in jsonData) {
          const pkgs = jsonData[lang];
          if (lang.toLowerCase().includes(searchQuery.toLowerCase())) {
            filteredData[lang] = pkgs;
            continue;
          }

          pkgs.map((pkg, index) => {
            if (pkg.toLowerCase().includes(searchQuery.toLowerCase()))
              if (filteredData.hasOwnProperty(lang)) filteredData[lang].push(pkg);
              else {
                const d = [];
                d.push(pkg);
                filteredData[lang] = d;
              }
          });
        }

        setJsonData(filteredData);
      }
      filterResults();
    };

    filterResults();
  }, [jsonData, setJsonData, setSearchCount]);

  return (
    <>
      <div className="container">
        <div className="navbar-searchpage">
          <div className="navbar-element">LibShare</div>
          <form className="searchForm" onSubmit={handleSubmit}>
            <input
            type="text"
            className="searchbar"
            value={searchQuery}
            placeholder="Search for Packages"
            onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <div className="navbar-element">Browse all packages</div>
        </div>
        <div className="search-text">
          <p className="search-heading"><b>Search Results </b>for {query}</p>
          <p className="search-desc">Displaying {searchCount} results</p>
        </div>
      </div>
      {Object.entries(jsonData).map(([language, pkgNames]) => (
        pkgNames.map((pkgName, index) => (
          <PackageDetailCard
          languageName={language}
          pkgName={pkgName}
          fileUrl={`http://localhost:8080/data/${language}/${pkgName}/`}
          />
        ))
      ))}
    </>
  );
}

export default Searchpage;
