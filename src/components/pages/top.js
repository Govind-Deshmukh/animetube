import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import { Link } from "react-router-dom";

import image from "./assets/404.gif";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Top() {
  const [topair, setTopair] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handelPageChange = (e, pageNumber) => {
    e.preventDefault();
    if (pageNumber <= 0 || pageNumber > 25) {
      setCurrentPage(1);
    } else {
      setCurrentPage(pageNumber);
    }
    onPageChange(pageNumber);
  };

  const onPageChange = (pageNumber) => {
    const fetchAnime = async () => {
      setError(false);
      setLoading(true);
      try {
        const response = await fetch(
          `https://gogo.exampledev.xyz/top-airing?page=${pageNumber}`
        );
        const data = await response.json();
        setTopair(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchAnime();
  };
  useEffect(() => {
    try {
      setLoading(true);
      fetch("https://gogo.exampledev.xyz/top-airing")
        .then((res) => res.json())
        .then((data) => {
          setTopair(data);
          setLoading(false);
        });
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    }
  }, []);

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
  } else if (error) {
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
        <div className="container mt-3 mb-5" id="#recent">
          <h2 className="text-center mb-2">
            Trending Anime page {currentPage}
          </h2>
          <div className="row ">
            {topair.map((anime) => (
              <Link
                className="col mb-1 mt-1 card-group"
                to={`/anime/${anime.animeId}`}
                style={{ textDecoration: "None", color: "inherit" }}
              >
                <Card
                  className="border border-dark"
                  sx={{
                    width: {
                      xs: 155, // adjust 8px based on your margin/padding
                      sm: 205,
                      md: 300,
                    },
                    marginRight: {
                      xs: "1px", // add a small margin on small screens
                    },
                  }}
                  key={anime.animeId}
                >
                  <CardMedia
                    component="img"
                    height="auto"
                    image={anime.animeImg}
                    alt={anime.animeTitle}
                  />

                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "1rem",
                          sm: "1rem",
                          md: "1.5rem",
                        },
                      }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {anime.animeTitle ? anime.animeTitle : anime.animeId}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <nav aria-label="...">
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 1 ? " disabled" : ""}`}
              >
                <span
                  className="page-link"
                  disabled={currentPage === 1 ? true : false}
                  onClick={(e) => handelPageChange(e, currentPage - 1)}
                >
                  {"<<"}Previous
                </span>
              </li>

              <li className="page-item">
                <a
                  className="page-link"
                  onClick={(e) => handelPageChange(e, currentPage + 1)}
                >
                  Next {">>"}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <Footer />
      </div>
    );
  }
}
