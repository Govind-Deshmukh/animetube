import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

export default function () {
  return (
    <div>
      <Navbar />
      <div className="container mt-3 mb-5">
        Please Contact us at{" "}
        <a href="mailto:contactanimetv24@gmail.com ">Email</a>
      </div>
      <Footer />
    </div>
  );
}
