import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";
import LoadingSpinner from "./loadingSpinner";
import { Link } from "react-router-dom";
import "./player.css";

export default function VideoPlayer() {
  const location = useLocation();
  const [animeData, setAnimeData] = useState({});
  const [episodeData, setEpisodeData] = useState([]);
  const [Error, setError] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [animeId, setAnimeId] = useState("");
  const [episodeId, setEpisodeId] = useState("");

  useEffect(() => {
    const fetchAnime = async () => {
      setError(false);
      setLoading(true);
      try {
        const AnimeId = location.pathname.split("/")[2];
        const epid = location.pathname.split("/")[3];
        setAnimeId(AnimeId);
        setEpisodeId(epid);
        const response = await fetch(
          `https://gogo.exampledev.xyz/vidcdn/watch/${epid}`
        );
        const data = await response.json();
        setEpisodeData(data);
        setLoading(false);
        const response2 = await fetch(
          `https://gogo.exampledev.xyz/anime-details/${AnimeId}`
        );
        const data2 = await response2.json();
        setAnimeData(data2);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchAnime();
  }, []);

  if (Loading) {
    return (
      <div>
        <Navbar />
        <div className="mt-5">
          <LoadingSpinner />
        </div>
      </div>
    );
  } else if (Error || animeData.error) {
    return (
      <div>
        <Navbar />
        <div className="container mt-5 mb-5">
          <h1 className="text-center">Something went wrong</h1>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="container mt-3 mb-3">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="anime_video_body_watch_items">
                <div className="play-video">
                  <iframe
                    src={episodeData.Referer}
                    allowfullscreen="true"
                    frameborder="0"
                    marginwidth="0"
                    marginheight="0"
                    scrolling="No"
                    title="Anime Video Player"
                  ></iframe>
                </div>
              </div>
              <div className="card mt-2 mb-2 bg-dark text-white">
                <div className="card-header">
                  Genres:{" "}
                  <strong>
                    {animeData.genres
                      ? animeData.genres.join(", ")
                      : "Loding . . ."}
                  </strong>
                  <br />
                  You are watching :{" "}
                  <strong>{episodeId.split("-").slice(-2)}</strong>
                </div>
                <div className="card-body">
                  <h3 className="card-title text-center">
                    {" "}
                    {animeData.animeTitle
                      ? animeData.animeTitle
                      : "Loading . . ."}
                  </h3>
                  <p className="card-text">
                    <div className="container">
                      <table className="table  text-light">
                        <tbody>
                          <tr>
                            <th>Anime Title :</th>
                            <td>
                              {animeData.animeTitle
                                ? animeData.animeTitle
                                : "Not Found . . ."}
                            </td>
                          </tr>
                          <tr>
                            <th>Anime Type :</th>
                            <td>
                              {animeData.type
                                ? animeData.type
                                : "Not Found . . ."}
                            </td>
                          </tr>
                          <tr>
                            <th>Anime Status :</th>
                            <td>
                              {animeData.status
                                ? animeData.status
                                : "Not Found . . ."}
                            </td>
                          </tr>
                          <tr>
                            <th>Anime Released :</th>
                            <td>
                              {animeData.releasedDate
                                ? animeData.releasedDate
                                : "Not Found . . ."}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 ">
              <div className="container bg-dark text-light rounded">
                Episode List:
                <hr />
                {animeData.episodesList ? (
                  animeData.episodesList.map((ep) => (
                    <a
                      href={`/watch/${animeId}/${ep.episodeId}`}
                      value={ep.animeId}
                      className="btn badge badge-light bg-light text-dark m-1 mb-1"
                    >
                      Episode {ep.episodeNum}
                    </a>
                  ))
                ) : (
                  <div
                    className="spinner-border text-light"
                    role="status"
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
