import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/chris-lawton-zvKx6ixUhWQ-unsplash-removebg-preview.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>BOOKS</h1>
          <p>
            "Books are the keys that unlock the doors to new worlds, ignite the
            flames of imagination, and illuminate the path to knowledge."
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
