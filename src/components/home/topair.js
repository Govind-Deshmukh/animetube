import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
export default function Topair() {
  const [topair, setTopair] = useState([]);

  useEffect(() => {
    fetch("https://gogo.exampledev.xyz/top-airing")
      .then((res) => res.json())
      .then((data) => {
        setTopair(data);
      });
  }, []);

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

                  <a
                    href={top.animeUrl}
                    value={top.animeId}
                    className="btn btn-primary"
                  >
                    Watch
                  </a>
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
