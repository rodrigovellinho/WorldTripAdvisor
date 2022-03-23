import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SwiperComponent.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import SwiperSlides from "../SwiperSlides";

export default function App() {
  return (
    <div className={styles.container}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide>
          <SwiperSlides />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
}
