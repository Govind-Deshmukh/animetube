import React from "react";
import Navbar from "./navbar";

export default function index() {
  return (
    <div>
      <Navbar />
      <div class="jumbotron p-3">
        <h1 class="display-4">Watch Your Favorite Anime for Free!</h1>
        <p class="lead">
          Welcome to our anime streaming website! We offer a wide selection of
          popular anime series and movies that you can watch for free, anytime
          and anywhere.
        </p>
        <hr class="my-4" />
        <p>
          With our easy-to-use platform, you can quickly find and stream your
          favorite anime shows without any hassle. Whether you're a fan of
          action, romance, comedy, or drama, we have something for everyone!
        </p>
        <a class="btn btn-success btn-lg" href="#" role="button">
          Start Watching Now!
        </a>
      </div>
    </div>
  );
}
