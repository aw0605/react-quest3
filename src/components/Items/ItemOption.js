import React from "react";
import "./ItemOption.css";

const ItemOption = () => {
  return (
    <form className="item-option">
      <h2>$192</h2>
      <div className="review">
        ★★★★☆<span>117 reviews</span>
      </div>
      <div className="color">
        <h4>Color</h4>
        <div>
          <a href="#!">
            <span />
          </a>
          <a href="#!">
            <span />
          </a>
          <a href="#!">
            <span />
          </a>
        </div>
      </div>
      <div className="size">
        <div>
          <h4>Size</h4>
          <a href="#!">Size guide</a>
        </div>
        <ul>
          <li>
            <a href="#!">XXS</a>
          </li>
          <li>
            <a href="#!">XS</a>
          </li>
          <li>
            <a href="#!">S</a>
          </li>
          <li>
            <a href="#!">M</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#!">L</a>
          </li>
          <li>
            <a href="#!">XL</a>
          </li>
          <li>
            <a href="#!">2XL</a>
          </li>
          <li>
            <a href="#!">3XL</a>
          </li>
        </ul>
      </div>
      <button type="submit">Add to Cart</button>
    </form>
  );
};

export default ItemOption;
