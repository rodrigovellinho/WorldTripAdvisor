import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./SwiperComponent.module.css";
import EuropeSlide from "../../assets/Continent.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import Image from "next/image";

export default function App() {
  return (
    <div className={styles.container}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide>
          <Image className={styles.image} src={EuropeSlide} alt="Europa" />
          <div className={styles.text}>
            <span className={styles.continentName}>Europa</span>
            <br />
            <span className={styles.continenDescription}>
              O continente mais antigo
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
}
