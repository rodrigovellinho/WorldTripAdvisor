import type { NextPage } from "next";
import Banner from "../components/Banner";
import Header from "../components/Header";
import TravelTypes from "../components/TravelTypes";
import styles from "../styles/Home.module.css";
import SwiperComponent from "../components/SwiperComponent";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header botao={"nao"} />
      <Banner />
      <TravelTypes />
      <div className={styles.divider}></div>
      <div className={styles.text}>
        <span>Vamos nessa?</span>
        <br />
        <span>Então escolha o seu continente</span>
      </div>
      <SwiperComponent />
    </div>
  );
};

export default Home;
