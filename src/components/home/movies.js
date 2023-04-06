import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://gogo.exampledev.xyz/anime-movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row mt-2 mb-3">
          {movies.map((movie) => (
            <div className="col-md-3 mt-1 mb-1">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={movie.animeImg}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {movie.animeTitle === "" ? movie.animeId : movie.animeTitle}
                  </h5>

                  <a
                    href={movie.animeUrl}
                    value={movie.animeId}
                    className="btn btn-primary"
                  >
                    Watch
                  </a>
                </div>
                <div className="card-footer text-muted">
                  Release : {movie.releasedDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
