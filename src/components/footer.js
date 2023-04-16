import React from "react";

export default function footer() {
  return (
    <div>
      <footer className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul className="list-inline ">
                <li className="list-inline-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="nav-link" href="/privacy">
                    Privacy-Policy
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="nav-link" href="/terms">
                    Terms
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="nav-link" href="/dmca">
                    DMCA
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-md-right">
              <small>&copy; 2023 AnimeTV24. All Rights Reserved.</small>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
