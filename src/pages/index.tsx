import Banner from "../components/Banner";
import Header from "../components/Header";
import TravelTypes from "../components/TravelTypes";
import SwiperComponent from "../components/SwiperComponent";
import { useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Divider from "../components/Divider";

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
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTypes />
      <Divider />
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa? <br />
        Então escolha o seu continente
      </Heading>
      <SwiperComponent />
    </Flex>
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
