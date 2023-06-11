import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./components/Homepage"
import Searchpage from "./components/Searchpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/search/:query" element={<Searchpage />} />
      </Routes>
    </Router>
  );
}

export default App;
