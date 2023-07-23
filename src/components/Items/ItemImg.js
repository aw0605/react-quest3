import React from "react";
import "./ItemImg.css";
import TshirtImage from "../../images/t-shirt.png";
import Mockup1Image from "../../images/mockup1.png";
import Mockup2Image from "../../images/mockup2.png";
import ModelImage from "../../images/model.png";

const ItemImg = () => {
  return (
    <div className="item-img">
      <img src={TshirtImage} alt="t-shirt" className="tshirt-image " />
      <div>
        <img src={Mockup1Image} alt="mockup1" className="mockup1-image" />
        <img src={Mockup2Image} alt="mockup2" className="mockup2-image" />
      </div>
      <img src={ModelImage} alt="model" className="model-image" />
    </div>
  );
};

export default ItemImg;
