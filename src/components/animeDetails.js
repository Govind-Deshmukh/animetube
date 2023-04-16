import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import LoadingSpinner from "./loadingSpinner";
import Navbar from "./navbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Grid, Paper } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sidebar: {
    padding: theme.spacing(3),
    backgroundColor: "#f5f5f5",
  },
  ad: {
    height: "200px",
    width: "100%",
    backgroundColor: "#f0f0f0",
    marginTop: theme.spacing(2),
  },
  bannerImage: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
  },
}));

export default function AnimeDetails() {
  const location = useLocation();
  const [animeData, setAnimeData] = useState({});
  const [Error, setError] = useState(false);
  const [Loading, setLoading] = useState(true);
  const classes = useStyles();
  const [animeId, setAnimeId] = useState("");

  useEffect(() => {
    const fetchAnime = async () => {
      setError(false);
      setLoading(true);
      try {
        const AnimeId = location.pathname.split("/")[2];
        setAnimeId(AnimeId);
        const response = await fetch(
          `https://gogo.exampledev.xyz/anime-details/${AnimeId}`
        );
        const data = await response.json();
        setAnimeData(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchAnime();
  }, []);

  if (Loading) {
    return (
      <div>
        <Navbar />
        <div className="mt-5">
          <LoadingSpinner />
        </div>
      </div>
    );
  } else if (Error || animeData.error) {
    return (
      <div>
        <Navbar />
        <div className="container mt-5 mb-5">
          <h1 className="text-center">Something went wrong</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div className="container mb-5">
          {" "}
          <Grid container className={classes.root}>
            <Grid className="p-1" item xs={12} md={8}>
              <Paper className={classes.content}>
                <img
                  src={animeData.animeImg}
                  className={classes.bannerImage}
                  alt="anime"
                />
                <Typography variant="h4" gutterBottom>
                  {animeData.animeTitle
                    ? animeData.animeTitle
                    : "Loading . . ."}
                </Typography>
                <hr />
                <Typography variant="subtitle1" gutterBottom>
                  Release Date:{" "}
                  {animeData.releasedDate
                    ? animeData.releasedDate
                    : "Loading . . ."}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Type: {animeData.type ? animeData.type : "Loading . . ."}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Status:{" "}
                  {animeData.status ? animeData.status : "Loading . . ."}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Genres:{" "}
                  {animeData.genres
                    ? animeData.genres.join(", ")
                    : "Loding . . ."}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Other Name:{" "}
                  {animeData.otherNames
                    ? animeData.otherNames
                    : "Loading . . ."}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Synopsis:{" "}
                  {animeData.synopsis ? animeData.synopsis : "Loading . . ."}
                </Typography>
                <hr />
                <Typography variant="subtitle1" gutterBottom>
                  Total Episodes:{" "}
                  {animeData.totalEpisodes
                    ? animeData.totalEpisodes
                    : "Loading . . ."}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Episode List:{" "}
                  {animeData.episodesList
                    ? animeData.episodesList.map((ep) => (
                        <Link
                          to={`/watch/${animeId}/${ep.episodeId}`}
                          value={ep.animeId}
                          className="btn badge badge-light bg-light text-dark m-1 mb-1"
                        >
                          Episode {ep.episodeNum}
                        </Link>
                      ))
                    : "Loding . . ."}
                </Typography>
              </Paper>
            </Grid>
            <Grid className="p-1" item xs={12} md={4}>
              <Paper className={classes.sidebar}>
                <Typography variant="h6" gutterBottom>
                  Ads
                </Typography>
                <div className={classes.ad}></div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
