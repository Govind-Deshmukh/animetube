import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import image from "./assets/404.gif";
import { useContext } from "react";
import CreateContext from "./context/CreateContext";
export default function Movies() {
  const { movie, Loading, Error, setAnimeId } = useContext(CreateContext);

  if (Loading) {
    return (
      <>
        <Navbar />
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      </>
    );
  } else if (Error) {
    return (
      <div>
        <Navbar />
        <div className="container mt-5 text-center">
          <img src={image} alt="404 image"></img>
          <h2 className="mt-2">Something Went Wrong . . .</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row mt-2 mb-3">
            {movie.map((movie) => (
              <div className="col-md-3 mt-2 mb-1 card-deck">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={movie.animeImg}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {movie.animeTitle === ""
                        ? movie.animeId
                        : movie.animeTitle}
                    </h5>

                    <Link
                      to={`/Details/${movie.animeId}`}
                      value={movie.animeId}
                      className="btn btn-primary"
                      onClick={() => setAnimeId(movie.animeId)}
                    >
                      Watch
                    </Link>
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
}
