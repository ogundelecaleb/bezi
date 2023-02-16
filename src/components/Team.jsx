import React from "react";
import Slider from "react-slick";
import { teams } from "../data/Team";
import Card from "./Card";

const Team = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <div className=" px-4  mb-[40px] md-[80px] md:w-[850px] md:py-[50px] mx-auto  items-center gap-4">
      <div>
        <h3>Meet the Bezi Team</h3>
        <p>
          We’re a tight-knit, collaborative bunch, each with our own unique take
          on the world. When we partner, we do so wholeheartedly and as a team.
          You can depend on all of us to bring our expertise when you need us.  
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {teams.map((team, i) => (
            <div key={i}>
              <Card team={team} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Team;
