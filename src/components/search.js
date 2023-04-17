import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "./navbar";
import Footer from "./footer";
import LoadingSpinner from "./loadingSpinner";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  jumbotron: {
    backgroundColor: "#e9e9e9",
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      minHeight: 250,
    },
  },
  jumbotronTitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  jumbotronSubtitle: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
  jumbotronButton: {
    marginTop: theme.spacing(2),
  },
}));

function Jumbotron() {
  const classes = useStyles();

  return (
    <div className={classes.jumbotron}>
      <Typography
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1rem",
            md: "1.5rem",
          },
        }}
        variant="h2"
        className={classes.jumbotronTitle}
      >
        Watch Free Anime Now!
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1rem",
            md: "1.5rem",
          },
        }}
        variant="h5"
        className={classes.jumbotronSubtitle}
      >
        Watch your favorite anime series and movies for free anytime, anywhere.
      </Typography>
      <div className="mt-2 mb-3">
        <p className="text-muted text-center">Search anime by genre</p>
        {genres.map((genre) => (
          <Link
            to={`/genre/${genre}`}
            style={{ textDecoration: "None", color: "inherit" }}
            className="btn badge badge-dark bg-dark text-light m-1 mb-1"
          >
            {genre}
          </Link>
        ))}
      </div>
    </div>
  );
}

const genres = [
  "action",
  "adventure",
  "cars",
  "comedy",
  "crime",
  "dementia",
  "demons",
  "drama",
  "dub",
  "ecchi",
  "family",
  "fantasy",
  "game",
  "gourmet",
  "harem",
  "historical",
  "horror",
  "josei",
  "kids",
  "magic",
  "martial-arts",
  "mecha",
  "military",
  "Mmusic",
  "mystery",
  "parody",
  "police",
  "psychological",
  "romance",
  "samurai",
  "school",
  "sci-fi",
  "seinen",
  "shoujo",
  "shoujo-ai",
  "shounen",
  "shounen-ai",
  "slice-of-Life",
  "space",
  "sports",
  "super-power",
  "supernatural",
  "suspense",
  "thriller",
  "vampire",
  "yaoi",
  "yuri",
];

export default function Search() {
  const location = useLocation();
  const [animeData, setAnimeData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchedKeyword, setSearchedKeyword] = useState("");
  useEffect(() => {
    try {
      const keyw = location.pathname.split("/")[2];
      setSearchedKeyword(keyw);
      setLoading(true);
      fetch(`https://gogo.exampledev.xyz/search?keyw=${keyw}`)
        .then((res) => res.json())
        .then((data) => {
          setAnimeData(data);
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
      <div>
        <Navbar />
        <Jumbotron />
        <LoadingSpinner />
      </div>
    );
  } else if (error) {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <div className="container mt-5 mb-5">
          <h1 className="text-center">Something went wrong</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div className="container mt-3 mb-5" id="#recent">
          <h2 className="text-center mb-2">
            Your reasult for search : {searchedKeyword}
          </h2>
          <div className="row ">
            {animeData.map((anime) => (
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
