/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import image from "./assets/404.gif";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function GetDetails() {
  const location = useLocation();
  const AnimiId = location.pathname.split("/")[2];

  const [AnimeData, setAnimeData] = useState({});
  const [Error, setError] = useState(false);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAnime = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(
          `https://gogo.exampledev.xyz/anime-details/${AnimiId}`
        );
        const data = await response.json();
        setAnimeData(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchAnime();
  }, [AnimiId]);

  if (Loading) {
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
  } else if (Error) {
    return (
      <div>
        <Navbar />
        <div className="container mt-5 text-center">
          <img src={image} alt="404 image"></img>
          <h2 className="mt-2">Either anime is not found or server is down!</h2>
        </div>
      </div>
    );
  } else if (AnimeData) {
    return (
      <>
        <Navbar />
        <div className="container mt-3 mb-4">
          <div className="row">
            <div className="col-md-8">
              <div className="card text-center shadow shadow-lg">
                <div className="card-footer text-muted">
                  Release : {AnimeData.releasedDate} || Status :{" "}
                  {AnimeData.status} || Type : {AnimeData.type}
                  <hr />
                  Genres :{" "}
                  <strong>
                    {AnimeData.genres
                      ? AnimeData.genres.join(", ")
                      : "Loding . . ."}{" "}
                  </strong>
                  || Total Episodes : {AnimeData.totalEpisodes}
                </div>
                <div className="card-body">
                  <img
                    className="card-img-top"
                    style={{ width: "50%" }}
                    src={AnimeData.animeImg}
                    alt="Loding anime image . . . "
                  ></img>
                  <h1 className="card-title font-weight-bold">
                    {AnimeData.animeTitle}
                  </h1>
                  <p className="card-text text-md-left mt-2 mb-2">
                    {AnimeData.synopsis}
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
                    {AnimeData.episodesList
                      ? AnimeData.episodesList.map((ep) => (
                          <Link
                            to={`/player/${ep.episodeId}`}
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
