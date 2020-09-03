import React from "react";
import "./Product.css";

function Product(props) {
  const { image, title, price } = props.product;
  return (
    <div className="col-md-4 product my-3">
      <div className="card">
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body d-flex justify-content-between">
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Price: ${price}</p>
          </div>
          <div className="pt-4">
            <a className="btn btn-dark">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
