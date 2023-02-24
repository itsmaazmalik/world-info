import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ searchCountry }) => {
  const [search, setSearch] = useState("");
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          World App
        </a>
        <button
          style={{ backgroundColor: "white" }}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex" role="search">
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search Country"
              aria-label="Search"
            />
            <Link to="/detail">
              <button
                onClick={() => {
                  searchCountry(search);
                  setSearch("");
                }}
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
