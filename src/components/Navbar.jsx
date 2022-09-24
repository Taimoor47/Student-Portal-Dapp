import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link
          to="/"
          className="navbar-brand p-2"
          style={{ textDecoration: "none" }}
        >
          Student Portal
        </Link>
        <button
          class="navbar-toggler m-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ">
            <Link
              to="/checkResult"
              className="nav-item nav-link fw-bold "
              style={{ textDecoration: "none" }}
            >
              Check Result
            </Link>
            <Link
              to="/studentInfo"
              className="nav-item nav-link fw-bold "
              style={{ textDecoration: "none" }}
            >
              Student Info
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
