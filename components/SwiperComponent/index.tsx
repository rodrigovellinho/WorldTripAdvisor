import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SwiperComponent.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";

interface slideProps {
  id: string;
  url_image: string;
  continent_name: string;
  continent_description: string;
}
interface SwiperComponentProps {
  slides: slideProps[];
}

export default function SwiperComponent({ slides }: SwiperComponentProps) {
  const router = useRouter();

  const slidesMap = slides?.map((slide) => (
    <SwiperSlide key={slide.id}>
      <Image
        className={styles.image}
        src={slide.url_image}
        alt={slide.continent_name}
        width={1240}
        height={450}
      />
      <Box color="#dadada" position="absolute" top="160px" left="480px">
        <Text fontWeight="700" fontSize="48px" line-height="72px">
          {slide.continent_name}
        </Text>
        <br />
        <Text fontWeight="700" fontSize="24px" line-height="36px">
          {slide.continent_description}
        </Text>
      </Box>
    </SwiperSlide>
  ));

  return (
    <Box mt="50px">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.swiper}
      >
        {slidesMap}
      </Swiper>
    </Box>
  );
}
