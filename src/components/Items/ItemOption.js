import React, { useState } from "react";
import "./ItemOption.css";

const ItemOption = () => {
  let colors = [
    {
      id: 1,
      color: "white",
    },
    {
      id: 2,
      color: "gray",
    },
    {
      id: 3,
      color: "black",
    },
  ];

  let sizes = [
    {
      id: 1,
      size: "XXS",
    },
    {
      id: 2,
      size: "XS",
    },
    {
      id: 3,
      size: "S",
    },
    {
      id: 4,
      size: "M",
    },
    {
      id: 5,
      size: "L",
    },
    {
      id: 6,
      size: "XL",
    },
    {
      id: 7,
      size: "2XL",
    },
    {
      id: 8,
      size: "3XL",
    },
  ];
  let [selectedSize, setSelectedSize] = useState("");
  let [selectedColor, setSelectedColor] = useState("");

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <form className="item-option">
      <h2>$192</h2>
      <div className="review">
        ★★★★☆<span>117 reviews</span>
      </div>
      <div className="color">
        <h4>Color</h4>
        <div>
          {colors.map((colors) => {
            return (
              <a
                href="#!"
                key={colors.id}
                className={selectedColor === colors.color ? "selected" : ""}
                onClick={() => handleColorClick(colors.color)}
              >
                <span />
              </a>
            );
          })}
        </div>
      </div>
      <div className="size">
        <div>
          <h4>Size</h4>
          <a href="#!">Size guide</a>
        </div>
        <ul>
          {sizes.map((sizes) => (
            <li
              key={sizes.id}
              className={selectedSize === sizes.size ? "selected" : ""}
              onClick={() => handleSizeClick(sizes.size)}
            >
              <a href="#!">{sizes.size}</a>
            </li>
          ))}
        </ul>
      </div>
      <button type="submit">Add to Cart</button>
    </form>
  );
};

export default ItemOption;
