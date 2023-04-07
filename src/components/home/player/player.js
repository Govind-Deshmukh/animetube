import Navbar from "../navbar";
import "./player.css";
import React from "react";
import ReactPlayer from "react-player";
export default function Player() {
  return (
    <>
      <Navbar />
      <div className="container">
        <iframe
          class="embed-responsive-item react-player frame"
          src="https://anihdplay.com/streaming.php?id=MjU2MTU=&title=Naruto+Episode+220&typesub=SUB"
          allowfullscreen
        ></iframe>
        <div className="row mt-3 mb-3">
          <div className="col-md-8">
            <div className="relative w-[100%] mobile:w-[70%] pt-[56.25%] mobile:pt-[40%] bg-gold-label-pastel">
              <div class="embed-responsive embed-responsive-16by9">
                <div className="videoBox bg-dark"></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Episodes : </h5>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
