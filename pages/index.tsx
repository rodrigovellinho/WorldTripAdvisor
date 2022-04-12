import Banner from "../components/Banner";
import Header from "../components/Header";
import TravelTypes from "../components/TravelTypes";
import styles from "../styles/Home.module.css";
import SwiperComponent from "../components/SwiperComponent";
import { useState } from "react";
import Link from "next/link";
import { Container, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

interface slideProps {
  id: string;
  url_image: string;
  continent_name: string;
  continent_description: string;
}

interface continentProps {
  continent: string;
  description: string;
  continent_quantity: string;
  continent_languages: string;
  continent_cities: string;
  continent_name: string;
  url_image: string;
}

interface HomeProps {
  slides: slideProps[];
  continents: continentProps[];
}

function Home({ slides, continents }: HomeProps) {
  const [selectContinent, setSelectContinent] = useState("europa");

  const handleChange = (e: React.ChangeEvent<any>) => {
    setSelectContinent(e.target.value);
  };

  return (
    <Container maxW="1440px" p={0} mb={10}>
      <Header botao={"nao"} />
      <Banner />
      <TravelTypes />
      <div className={styles.divider}></div>
      <div className={styles.text}>
        <span>Vamos nessa?</span>
        <br />
        <span>Então escolha o seu continente</span>
      </div>
      <div className={styles.callToAction}>
        <select onChange={handleChange}>
          {continents.map((continent) => (
            <option key={continent.continent} value={continent.continent}>
              {continent.continent_name}
            </option>
          ))}
        </select>
        <Link href={`/${selectContinent}`} passHref={true}>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="Blue 400"
            variant="outline"
          >
            Ir para o Continente
          </Button>
        </Link>
      </div>
      <SwiperComponent slides={slides} />
    </Container>
  );
}

export default Home;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/slides");
  const slides = await res.json();

  const res2 = await fetch("http://localhost:3000/continents");
  const continents = await res2.json();
  return {
    props: {
      slides,
      continents,
    },
  };
}
