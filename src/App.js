import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// main pages
import Home from "./components/index";
import Movies from "./components/pages/movies";
import Top from "./components/pages/top";
import Popular from "./components/pages/popular";
import Tv from "./components/pages/tv";

// player pages
import GetDetails from "./components/animeDetails";
import VideoPlayer from "./components/videoPlayer";

// policy pages import
import Contact from "./components/policyPages/contact";
import Privacy from "./components/policyPages/privacy";
import Terms from "./components/policyPages/terms";
import Dmca from "./components/policyPages/dmca";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/top-air" element={<Top />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/tv" element={<Tv />} />

            <Route path="/anime/:animeId" element={<GetDetails />} />
            <Route
              path="/watch/:animeId/:animeEpId"
              element={<VideoPlayer />}
            />

            <Route
              path="*"
              element={
                <>
                  <h1 className="text-center mt-5 mb-5">404 Page not found</h1>
                </>
              }
            />

            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/dmca" element={<Dmca />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
