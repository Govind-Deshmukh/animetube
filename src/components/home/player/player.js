/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/iframe-has-title */
import Navbar from "../navbar";
import "./player.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import image from "../assets/404.gif";

export default function Player() {
  const location = useLocation();
  const AnimiId = location.pathname.split("/")[2];
  console.log(AnimiId);
  const [AnimeData, setAnimeData] = useState({});
  const [Error, setError] = useState(false);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAnime = async () => {
      setLoading(true);
      setError(false);

      try {
        const response = await fetch(
          `https://gogo.exampledev.xyz/vidcdn/watch/${AnimiId}`
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
  } else
    return (
      <>
        <Navbar />

        <div className="container mt-3 mb-3">
          <div className="row ">
            <div className="col-md-8">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  width="100%"
                  className="embed-responsive-item videoBox"
                  src={AnimeData.Referer}
                ></iframe>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Episodes : </h5>
                  <hr />

                  <p>this part is under construction</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
