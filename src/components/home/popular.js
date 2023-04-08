/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import image from "./assets/404.gif";
import { useContext } from "react";
import CreateContext from "./context/CreateContext";
export default function Popular() {
  const { Popular, Loading, Error, setAnimiId } = useContext(CreateContext);

  if (Loading) {
    return (
      <>
        <Navbar />
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only"></span>
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
          <h2 className="mt-2">Something Went Wrong . . .</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row mt-2 mb-3">
            {Popular.map((pop) => (
              <div className="col-md-3 mt-1 mb-1">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    className="card-img-top"
                    src={pop.animeImg}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {pop.animeTitle === "" ? pop.animeId : pop.animeTitle}
                    </h5>

                    <Link
                      to={`/Details/${pop.animeId}`}
                      value={pop.animeId}
                      className="btn btn-primary"
                      onClick={() => setAnimiId(pop.animeId)}
                    >
                      Watch
                    </Link>
                  </div>
                  <div className="card-footer text-muted">
                    Release : {pop.releasedDate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
