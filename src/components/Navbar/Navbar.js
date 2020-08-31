import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
        <Link className="navbar-brand font-weight-bold" to="/">
          𝕖-𝕤𝕙𝕠𝕡
        </Link>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-secondary text-white my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${
            isNavCollapsed ? "collapse" : ""
          } navbar-collapse justify-content-end`}
          id="navbarToggler"
        >
          <div className="navbar-nav">
            <Link className="nav-item nav-link text-white custom-border" to="/">
              Home
            </Link>
            <Link
              className="nav-item nav-link text-white custom-border"
              to="/about"
            >
              About
            </Link>
            <Link
              className="nav-item nav-link text-white custom-border"
              to="/shop"
            >
              Shop
            </Link>
            <Link className="nav-item nav-link text-white" to="/help">
              Help
            </Link>
            <Link className="nav-item nav-link bg-white text-dark" to="/cart">
              <FontAwesomeIcon icon={faCartPlus} /> Your Cart
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
