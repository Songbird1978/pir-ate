import React from "react";
import Slider from "react-slick";
import imageNought from '../../assets/image0.jpg';
import '../simpleSlider/simpleSlider.css';
import data from '../../Data.json';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div className="images">
        <img src={imageNought} alt="Beat the System"></img>
      </div>
      <div>
        <img src={imageNought} alt="Beat the System"></img>
      </div>
 
    </Slider>
  );
}