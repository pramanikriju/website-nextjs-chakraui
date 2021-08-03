import React from "react";
import Slider from "react-slick";
import { useBreakpointValue } from "@chakra-ui/react";

export default function Clients() {
  const variant = useBreakpointValue({ base: 1, md: 3 });
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: variant,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
