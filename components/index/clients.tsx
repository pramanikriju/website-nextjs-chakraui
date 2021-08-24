import React from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import ClientCard from "./clientCard";
import client_data from "../../data/clientsData";

//Slider imports
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

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
      </Center>
      <Center>
        <Text fontSize="lg" color={"gray.500"}>
          Expertise across different domains
        </Text>
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
        //virtual
      >
        {client_data.map((item, i) => (
          <SwiperSlide key={item.id}>
            <ClientCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
