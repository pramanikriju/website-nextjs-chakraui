import React from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import ClientCard from "./clientCard";
//Slider imports
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

const client_data = [
  {
    id: 1,
    name: "AskMyAdvisor",
    img: "https://d8po3df1zm5p4.cloudfront.net/a6029a27-8007-4bce-92b7-f6573fb9eb60/img/full_logo.png",
    description: "",
    url: "https://app.askmyadvisor.co",
    technology: ["Laravel", "React Native", "AWS"],
  },
  {
    id: 2,
    name: "AskMyAdvisor",
    img: "https://d8po3df1zm5p4.cloudfront.net/a6029a27-8007-4bce-92b7-f6573fb9eb60/img/full_logo.png",
    description: "",
    url: "https://app.askmyadvisor.co",
    technology: ["Laravel", "React Native", "AWS"],
  },
  {
    id: 3,
    name: "AskMyAdvisor",
    img: "https://d8po3df1zm5p4.cloudfront.net/a6029a27-8007-4bce-92b7-f6573fb9eb60/img/full_logo.png",
    description: "",
    url: "https://app.askmyadvisor.co",
    technology: ["Laravel", "React Native", "AWS"],
  },
  {
    id: 4,
    name: "AskMyAdvisor",
    img: "https://d8po3df1zm5p4.cloudfront.net/a6029a27-8007-4bce-92b7-f6573fb9eb60/img/full_logo.png",
    description: "",
    url: "https://app.askmyadvisor.co",
    technology: ["Laravel", "React Native", "AWS"],
  },
  {
    id: 5,
    name: "AskMyAdvisor",
    img: "https://d8po3df1zm5p4.cloudfront.net/a6029a27-8007-4bce-92b7-f6573fb9eb60/img/full_logo.png",
    description: "",
    url: "https://app.askmyadvisor.co",
    technology: ["Laravel", "React Native", "AWS"],
  },
  {
    id: 6,
    name: "AskMyAdvisor",
    img: "https://d8po3df1zm5p4.cloudfront.net/a6029a27-8007-4bce-92b7-f6573fb9eb60/img/full_logo.png",
    description: "",
    url: "https://app.askmyadvisor.co",
    technology: ["Laravel", "React Native", "AWS"],
  },
];

export default function Clients() {
  const variant = useBreakpointValue({ base: 1, md: 3, lg: 5 });

  return (
    <Swiper
      slidesPerView={variant}
      //spaceBetween={30}
      className="mySwiper"
      //loop="true"
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 500,
      }}
    >
      {client_data.map((item, i) => (
        <SwiperSlide key={item.id}>
          <ClientCard />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
