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
        layout="fill"
      />
      <div className={styles.text}>
        <span className={styles.continentName}>{slide.continent_name}</span>
        <br />
        <span className={styles.continenDescription}>
          {slide.continent_description}
        </span>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className={styles.container}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.swiper}
      >
        {slidesMap}
      </Swiper>
    </div>
  );
}
