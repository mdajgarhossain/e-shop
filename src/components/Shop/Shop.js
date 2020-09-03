import React from "react";
import "./Shop.css";
import Products from "../Products/Products";
import { Link } from "react-router-dom";

function Shop() {
  return (
    <div className="shop">
      <div className="shop-header text-center">
        <h2 className="display-4 mt-3">𝕃𝕖𝕥'𝕤 𝕤𝕥𝕒𝕣𝕥 𝕤𝕙𝕠𝕡𝕡𝕚𝕟𝕘</h2>
        <hr />
        <h1>Categories</h1>
        <nav className="category-navbar">
          <a href="#laptops">Laptops</a> |<a href="#mobiles">Mobiles</a> |
          <a href="#bags">Bags</a>
        </nav>
        <hr />
      </div>
      <Products />
      <footer className="text-center">
        <nav>
          <Link to="/">Home</Link> |<Link to="/cart">Cart</Link> |
          <Link to="/help">Help</Link>
        </nav>
        <p>Copyright © 2020 e-shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Shop;
