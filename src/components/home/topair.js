/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import image from "./assets/404.gif";
import { useContext } from "react";
import CreateContext from "./context/CreateContext";
export default function Topair() {
  const { TopRated, Loading, Error, setAnimeId } = useContext(CreateContext);

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
            {TopRated.map((top) => (
              <div className="col-md-3 mt-2 mb-1 card-deck">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={top.animeImg}
                    alt="Card image cap"
                  />

                  <div className="card-body">
                    <h5 className="card-title">
                      {top.animeTitle === "" ? top.animeId : top.animeTitle}
                    </h5>

                    <Link
                      to={`/Details/${top.animeId}`}
                      value={top.animeId}
                      className="btn btn-primary"
                      onClick={() => setAnimeId(top.animeId)}
                    >
                      Watch
                    </Link>
                  </div>
                  <div className="card-footer text-muted">
                    Latest Episode : <strong>{top.latestEp}</strong>
                    <hr />
                    Genres : {top.genres.join(", ")}
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
