import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand font-weight-bold text-secondary" href="#">
          e-shop
        </a>
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
            <a className="nav-item nav-link text-dark custom-border" href="#">
              Home
            </a>
            <a className="nav-item nav-link text-dark custom-border" href="#">
              About
            </a>
            <a className="nav-item nav-link text-dark custom-border" href="#">
              Shop
            </a>
            <a className="nav-item nav-link text-dark" href="#">
              Help
            </a>
            <a className="nav-item nav-link bg-dark text-white" href="#">
              <FontAwesomeIcon icon={faCartPlus} /> Your Cart
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
