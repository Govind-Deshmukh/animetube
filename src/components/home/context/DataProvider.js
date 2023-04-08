import React from "react";
import CreateContext from "./CreateContext";
import { useEffect } from "react";
function DataProvider({ children }) {
  const [Popular, setPopular] = React.useState([]);
  const [Trending, setTrending] = React.useState([]);
  const [Upcoming, setUpcoming] = React.useState([]);
  const [TopRated, setTopRated] = React.useState([]);
  const [NowPlaying, setNowPlaying] = React.useState([]);
  const [Search, setSearch] = React.useState([]);
  const [SearchQuery, setSearchQuery] = React.useState("");
  const [Page, setPage] = React.useState(1);
  const [TotalPages, setTotalPages] = React.useState(1);
  const [Loading, setLoading] = React.useState(true);
  const [Error, setError] = React.useState(false);
  const [AnimiId, setAnimeId] = React.useState("");
  const [resentrelese, setresentrelese] = React.useState([]);
  const [movie, setmovie] = React.useState([]);
  useEffect(() => {
    const fetchPopular = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(`https://gogo.exampledev.xyz/popular`);
        const data = await response.json();
        setPopular(data);
        setTotalPages(data.total_pages);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPopular();

    const fetchTrending = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(`https://gogo.exampledev.xyz/trending`);
        const data = await response.json();
        setTrending(data);
        setTotalPages(data.total_pages);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchTrending();

    const fetchmovie = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(
          `https://gogo.exampledev.xyz/anime-movies`
        );
        const data = await response.json();
        setmovie(data);
        setTotalPages(data.total_pages);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchmovie();
    const fetchTopRated = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(`https://gogo.exampledev.xyz/top-airing`);
        const data = await response.json();
        setTopRated(data);
        setTotalPages(data.total_pages);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchTopRated();

    const fetchresentrelese = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(
          `https://gogo.exampledev.xyz/recent-release`
        );
        const data = await response.json();
        setresentrelese(data);
        setTotalPages(data.total_pages);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchresentrelese();
  }, []);
  console.log(AnimiId);
  return (
    <CreateContext.Provider
      value={{
        Popular,
        setPopular,
        Trending,
        setTrending,
        Upcoming,
        setUpcoming,
        TopRated,
        setTopRated,
        NowPlaying,
        setNowPlaying,
        Search,
        setSearch,
        SearchQuery,
        setSearchQuery,
        Page,
        setPage,
        TotalPages,
        setTotalPages,
        Loading,
        setLoading,
        Error,
        setError,
        AnimiId,
        setAnimeId,
        movie,
        setmovie,
        resentrelese,
        setresentrelese,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
}

export default DataProvider;
