import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner py-4">
      <div className="container text-center">
        <h1 className="display-4 p-3">𝕎𝕖𝕝𝕔𝕠𝕞𝕖 𝕥𝕠 𝕥𝕙𝕖 𝕔𝕠𝕦𝕟𝕥𝕣𝕪'𝕤 𝕟𝕠. 𝟙 𝕖-𝕤𝕙𝕠𝕡</h1>
        <hr className="w-50" />
        <div className="row my-4 d-flex justify-content-center">
          <div className="card col-md-3">
            <img
              src="https://i.ibb.co/jr6TksZ/product-1.png"
              className="card-img-top"
              style={{ width: "18rem" }}
              alt=""
            />
          </div>
          <div className="card col-md-3">
            <img
              src="https://i.ibb.co/34rcCHq/slider-1.png"
              className="card-img-top"
              style={{ width: "18rem" }}
              alt=""
            />
          </div>
          <div className="card col-md-3">
            <img
              src="https://i.ibb.co/Xb8cfPx/slider-3.png"
              className="card-img-top"
              style={{ width: "18rem" }}
              alt=""
            />
          </div>
        </div>
        <Link to="/shop">
          <button className="shop-now-btn">Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
