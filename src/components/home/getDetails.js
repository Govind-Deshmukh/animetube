import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { useLocation } from "react-router-dom";
import image from "./assets/404.gif";

import { Link } from "react-router-dom";
export default function GetDetails() {
  const location = useLocation();
  const [pageError, setPageError] = useState(false);
  const [animeData, setAnimeData] = useState({});
  const [loading, setLoading] = useState(true);
  const [notfound, setnotfound] = useState(false);

  try {
    useEffect(() => {
      let animeID = location.pathname.split("/")[2];
      fetch("https://gogo.exampledev.xyz/anime-details/" + animeID)
        .then((res) => res.json())
        .then((data) => {
          setAnimeData(data);
          setLoading(false);
          if (data.error.status == 404) {
            setnotfound(true);
            console.log("anime not found");
          } else {
            setnotfound(false);
          }
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
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      </>
    );
  } else if (pageError || notfound) {
    return (
      <div>
        <Navbar />
        <div className="container mt-5 text-center">
          <img src={image} alt="404 image"></img>
          <h2 className="mt-2">Either anime is not found or server is down!</h2>
        </div>
      </div>
    );
  } else if (animeData) {
    return (
      <>
        <Navbar />
        <div className="container mt-3 mb-4">
          <div className="row">
            <div className="col-md-8">
              <div className="card text-center shadow shadow-lg">
                <div className="card-footer text-muted">
                  Release : {animeData.releasedDate} || Status :{" "}
                  {animeData.status} || Type : {animeData.type}
                  <hr />
                  Genres :{" "}
                  <strong>
                    {animeData.genres
                      ? animeData.genres.join(", ")
                      : "Loding . . ."}{" "}
                  </strong>
                  || Total Episodes : {animeData.totalEpisodes}
                </div>
                <div className="card-body">
                  <img
                    className="card-img-top"
                    style={{ width: "50%" }}
                    src={animeData.animeImg}
                    alt="Loding anime image . . . "
                  ></img>
                  <h1 className="card-title font-weight-bold">
                    {animeData.animeTitle}
                  </h1>
                  <p className="card-text text-md-left mt-2 mb-2">
                    {animeData.synopsis}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-2">
              <div className="card shadow shadow-lg">
                <div className="card-body">
                  <div className="mt-2 mb-2">
                    <h5 className="card-title">Episode Links</h5>
                    <hr />
                    {animeData.episodesList
                      ? animeData.episodesList.map((ep) => (
                          <Link
                            to={`/watch/${ep.episodeId}`}
                            value={ep.animeId}
                            className="btn badge badge-dark bg-dark text-light m-1 mb-1"
                          >
                            Episode {ep.episodeNum}
                          </Link>
                        ))
                      : "Loding . . ."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
