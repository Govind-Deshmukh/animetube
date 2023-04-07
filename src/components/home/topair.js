import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import image from "./404.gif";
export default function Topair() {
  const [topair, setTopair] = useState([]);
  const [pageError, setPageError] = useState(false);
  const [loading, setLoading] = useState(true);
  try {
    useEffect(() => {
      fetch("https://gogo.exampledev.xyz/top-airing")
        .then((res) => res.json())
        .then((data) => {
          setTopair(data);
          setLoading(false);
        });
    }, []);
  } catch (err) {
    console.log(err);
    setPageError(true);
  }
  if (loading) {
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
  } else if (pageError) {
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
            {topair.map((top) => (
              <div className="col-md-3 mt-1 mb-1">
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
                      to={`/anime/${top.animeId}`}
                      value={top.animeId}
                      className="btn btn-primary"
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
