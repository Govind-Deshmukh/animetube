import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/index";
import Popular from "./components/home/popular";
import TopAir from "./components/home/topair";
import Movies from "./components/home/movies";
import Tv from "./components/home/tv";
import GetDetails from "./components/home/getDetails";
import Player from "./components/home/player/player";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top-air" element={<TopAir />} />
          <Route path="/search:query" element={<Movies />} />
          <Route path="/anime/:animeId" element={<GetDetails />} />
          <Route path="/watch/:animeId" element={<Player />} />
          <Route
            path="*"
            element={
              <>
                <h1>404 Page not found</h1>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
