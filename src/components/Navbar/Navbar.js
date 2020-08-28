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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand font-weight-bold text-secondary" to="/">
          e-shop
        </Link>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-secondary my-2 my-sm-0"
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
            <Link className="nav-item nav-link text-dark custom-border" to="/">
              Home
            </Link>
            <a
              className="nav-item nav-link text-dark custom-border"
              href="#about"
            >
              About
            </a>
            <a
              className="nav-item nav-link text-dark custom-border"
              href="#shop"
            >
              Shop
            </a>
            <Link className="nav-item nav-link text-dark" to="/help">
              Help
            </Link>
            <Link className="nav-item nav-link bg-dark text-white" to="/cart">
              <FontAwesomeIcon icon={faCartPlus} /> Your Cart
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
