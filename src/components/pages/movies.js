import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import { Link } from "react-router-dom";

import image from "./assets/404.gif";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      fetch("https://gogo.exampledev.xyz/anime-movies")
        .then((res) => res.json())
        .then((data) => {
          setMovies(data);
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
        <div className="container mt-3 mb-5">
          <h2 className="text-center mb-2">Anime Movies</h2>
          <div className="row ">
            {movies.map((anime) => (
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
        <Footer />
      </div>
    );
  }
}
