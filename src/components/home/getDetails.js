import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { useLocation, useParams } from "react-router-dom";
import image from "./404.gif";
import swal from "sweetalert";
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
                <div className="card-body">
                  <h2 className="card-title font-weight-bold">
                    {animeData.animeTitle}
                  </h2>
                  <img
                    className="card-img-top"
                    style={{ width: "50%" }}
                    src={animeData.animeImg}
                    alt="Loding anime image . . . "
                  ></img>
                  <p className="card-text text-md-left mt-2 mb-2">
                    {animeData.synopsis}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
                <div className="card-footer text-muted">
                  Release : {animeData.releasedDate} || Status :{" "}
                  {animeData.status} || Type : {animeData.type}
                  <hr />
                  Genres :{" "}
                  {animeData.genres
                    ? animeData.genres.join(", ")
                    : "Loding . . ."}{" "}
                  || Total Episodes : {animeData.totalEpisodes}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow shadow-lg">
                <div className="card-body">
                  <div className="mt-2 mb-2">
                    <h5 className="card-title">Episode Links</h5>
                    <hr />
                    {animeData.episodesList
                      ? animeData.episodesList.map((ep) => (
                          <a
                            href={ep.episodeLink}
                            className="btn badge badge-dark bg-dark text-light m-1 mb-1"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Episode {ep.episodeNum}
                          </a>
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
