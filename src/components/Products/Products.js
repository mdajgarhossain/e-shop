import React from "react";
import Product from "../Product/Product";
import "./Products.css";
import { useState } from "react";
import { useEffect } from "react";
import productsData from "../../productsData/products.json";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const laptops = products.filter((laptop) => laptop.category === "laptop");
  const mobiles = products.filter((laptop) => laptop.category === "mobile");
  const bags = products.filter((bag) => bag.category === "bag");

  return (
    <div className="container product-categories">
      {/* Laptops */}
      <div className="laptops mb-5" id="laptops">
        <h3>Laptops</h3>
        <div className="row my-3">
          {laptops.map((laptop) => (
            <Product key={laptop.id} product={laptop} />
          ))}
        </div>
      </div>
      {/* Mobiles */}
      <div className="mobiles mb-5" id="mobiles">
        <h3>Mobiles</h3>
        <div className="row my-3">
          {mobiles.map((mobile) => (
            <Product key={mobile.id} product={mobile} />
          ))}
        </div>
      </div>
      {/* Bags */}
      <div className="bags mb-5" id="bags">
        <h3>Bags</h3>
        <div className="row my-3">
          {bags.map((bag) => (
            <Product key={bag.id} product={bag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
