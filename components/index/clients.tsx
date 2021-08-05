import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import ClientCard from "./clientCard";
//Slider imports
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

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
  return (
    <Box py={8} maxW={"10xl"}>
      <Center>
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Portfolio
        </Heading>
        <br />
      </Center>
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
          "1600": {
            slidesPerView: 5,
          },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        navigation
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
