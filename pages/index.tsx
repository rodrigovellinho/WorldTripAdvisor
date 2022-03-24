import type { NextPage } from "next";
import Banner from "../components/Banner";
import Header from "../components/Header";
import TravelTypes from "../components/TravelTypes";
import styles from "../styles/Home.module.css";
import SwiperComponent from "../components/SwiperComponent";

interface slideProps {
  id: string;
  url_image: string;
  continent_name: string;
  continent_description: string;
}

interface HomeProps {
  slides: slideProps[];
}

const Home: NextPage<HomeProps> = ({ slides }) => {
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
      <SwiperComponent slides={slides} />
    </div>
  );
};

export default Home;

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/slides");
  const json = await res.json();

  return { slides: json };
};
