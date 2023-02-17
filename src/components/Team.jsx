import React, { Component } from "react";
import Slider from "react-slick";
import { teams } from "../data/Team";
import Card from "./Card";

// const Team = () => {
export default class Team extends Component {
  render() {
    var settings = {
       
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
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
      <div className=" px-4  mb-[40px] md:w-[850px] md:py-[50px] mx-auto ">
        <div className="md:max-w-[1480px] m-auto max-w-[600px] p-5">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <h3 className="text-[#006774] text-lg font-bold">Meet the Bezi Team</h3>
            <p className="text-xs">
              We’re a tight-knit, collaborative bunch, each with our own unique
              take on the world. When we partner, we do so wholeheartedly and as
              a team. You can depend on all of us to bring our expertise when
              you need us.  
            </p>
          </div>

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
  }
}
