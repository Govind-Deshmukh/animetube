import React from "react";
import Navbar from "./navbar";
import image from "./assets/404.gif";

export default function tv() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5 text-center">
        <img src={image} alt="404 image"></img>
        <h2 className="mt-2">This page is under development</h2>
      </div>
    </div>
  );
}
