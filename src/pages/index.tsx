import Banner from "../components/Banner";
import Header from "../components/Header";
import TravelTypes from "../components/TravelTypes";
import SwiperComponent from "../components/SwiperComponent";
import { Flex, Heading } from "@chakra-ui/react";
import Divider from "../components/Divider";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";

export interface ContinenteProps {
  continentes: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[];
}

function Home({ continentes }: ContinenteProps) {
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
      <SwiperComponent continentes={continentes} />
    </Flex>
  );
}

export default Home;

export async function getStaticProps() {
  const prismic = getPrismicClient();
  const response = await prismic.query([
    Prismic.Predicates.at("document.type", "continentes"),
  ]);

  const continentes = response.results.map((continent) => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.slider_image.url,
    };
  });

  return {
    props: {
      continentes,
    },
    revalidate: 18000,
  };
}
