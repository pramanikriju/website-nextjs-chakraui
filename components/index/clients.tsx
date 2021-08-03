import React from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import ClientCard from "./clientCard";
//Slider imports
import { Swiper, SwiperSlide } from "swiper/react";

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
  //const variant = useBreakpointValue({ base: 1, md: 3, lg: 5 });

  return (
    <Box py={5} maxW={"10xl"}>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          "640": {
            slidesPerView: 1,
          },
          "750": {
            slidesPerView: 2,
          },
          "1024": {
            slidesPerView: 4,
          },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          //disableOnInteraction: false,
        }}
        loop={true}
      >
        {client_data.map((item, i) => (
          <SwiperSlide key={item.id}>
            <ClientCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
