/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import image from "./assets/404.gif";
import "./assets/index.css";
import { useContext } from "react";
import CreateContext from "./Contest/CreateContext";
export default function Index() {
  const { resentrelese, Loading, Error, setAnimeId } =
    useContext(CreateContext);

  if (Loading) {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div class="jumbotron p-3">
            <h1 class="display-4">Watch Your Favorite Anime for Free!</h1>
            <p class="lead">
              Welcome to our anime streaming website! We offer a wide selection
              of popular anime series and movies that you can watch for free,
              anytime and anywhere.
            </p>
            <hr class="my-4" />
            <p>
              With our easy-to-use platform, you can quickly find and stream
              your favorite anime shows without any hassle. Whether you're a fan
              of action, romance, comedy, or drama, we have something for
              everyone!
            </p>
            <a class="btn btn-success btn-lg" href="#" role="button">
              Start Watching Now!
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div class="spinner-border text-success" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      </div>
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
          <div class="jumbotron p-3">
            <h1 class="display-4">Watch Your Favorite Anime for Free!</h1>
            <p class="lead">
              Welcome to our anime streaming website! We offer a wide selection
              of popular anime series and movies that you can watch for free,
              anytime and anywhere.
            </p>
            <hr class="my-4" />
            <p>
              With our easy-to-use platform, you can quickly find and stream
              your favorite anime shows without any hassle. Whether you're a fan
              of action, romance, comedy, or drama, we have something for
              everyone!
            </p>
            <a class="btn btn-success btn-lg" href="#" role="button">
              Start Watching Now!
            </a>
          </div>
        </div>
        <div className="container">
          <hr />
          <h2 className="text-center">Recent Release</h2>
          <hr />
          <div className="row mt-2 mb-5">
            <div className="card-group">
              {resentrelese.map((ra) => (
                <div className="card-group col">
                  <div className="card cardbox m-4">
                    <img
                      className="card-img-top"
                      src={ra.animeImg}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {ra.animeTitle === "" ? ra.animeId : ra.animeTitle}
                      </h5>

                      <Link
                        to={`/Details/${ra.animeId}`}
                        value={ra.animeId}
                        className="btn btn-primary"
                        onClick={() => setAnimeId(ra.animeId)}
                      >
                        Watch
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
