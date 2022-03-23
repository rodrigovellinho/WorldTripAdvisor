import Image from "next/image";
import styles from "./SwiperSlides.module.css";
import EuropeSlide from "../../assets/Continent.svg";

function SwiperSlides() {
  return (
    <>
      <Image className={styles.image} src={EuropeSlide} alt="Europa" />
      <div className={styles.text}>
        <span className={styles.continentName}>Europa</span>
        <br />
        <span className={styles.continenDescription}>
          O continente mais antigo
        </span>
      </div>
    </>
  );
}

export default SwiperSlides;
