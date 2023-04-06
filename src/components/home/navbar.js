import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("Search Query:", searchQuery);
      e.preventDefault();
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/" className="navbar-brand p-3">
          AnimeTV24.com
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movies" className="nav-link">
                Movies
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/tv" className="nav-link">
                TV Series
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/popular" className="nav-link">
                Popular
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/top-air" className="nav-link">
                TOP Airing
              </Link>
            </li>
          </ul>
          <form className="form-inline m-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              value={searchQuery}
              onKeyDown={_handleKeyDown}
              onChange={handleInputChange}
            ></input>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
