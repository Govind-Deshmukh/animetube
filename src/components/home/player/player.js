import Navbar from "../navbar";
import "./player.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import image from "../assets/404.gif";

export default function Player() {
  const location = useLocation();
  const [pageError, setPageError] = useState(false);
  const [animeData, setAnimeData] = useState({});
  const [loading, setLoading] = useState(true);
  const [notfound, setnotfound] = useState(false);

  try {
    useEffect(() => {
      let animeID = location.pathname.split("/")[2];
      console.log(animeID);
      const url = "https://gogo.exampledev.xyz/vidcdn/watch/" + animeID;
      console.log(url);
      fetch(url)
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
                  src={animeData.Referer}
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
