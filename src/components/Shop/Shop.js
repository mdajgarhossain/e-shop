import React from "react";
import "./Shop.css";
import Products from "../Products/Products";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Newsletter from "../Newsletter/Newsletter";
import MoreProducts from "../MoreProducts/MoreProducts";

function Shop() {
  return (
    <div id="shop">
      <h1>Your e-shop</h1>
      <Products />
      <FeaturedProducts />
      <Newsletter />
      <MoreProducts />
    </div>
  );
}

export default Shop;
