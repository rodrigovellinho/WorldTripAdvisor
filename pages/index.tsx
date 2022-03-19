import type { NextPage } from "next";
import Banner from "../components/Banner";
import ContinentsSlide from "../components/ContinentsSlide";
import Header from "../components/Header";
import TravelTypes from "../components/TravelTypes";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <TravelTypes />
      <div className={styles.divider}></div>
      <div className={styles.text}>
        <span>Vamos nessa?</span>
        <br />
        <span>Então escolha o seu continente</span>
      </div>
      <ContinentsSlide />
    </div>
  );
};

export default Home;
