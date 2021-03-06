import BannerContinent from "../../components/BannerContinent";
import Bio from "../../components/Bio";
import Cidades from "../../components/Cidades";
import Header from "../../components/Header";
import { GetStaticProps } from "next";
import { Flex } from "@chakra-ui/react";
import Prismic from "@prismicio/client";
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";
import Loading from "../../components/Loading";
import { useRouter } from "next/router";

export interface ContinentProps {
  continent: {
    slug: string;
    title: string;
    description: string;
    banner_image: string;
    countries: number;
    languages: number;
    cities: number;
    cities_list: string;
    cities100: {
      city: string;
      country: string;
      thumbnail: string;
      flag: string;
    }[];
  };
}

function ContinentDetails({ continent }: ContinentProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <Flex direction="column">
      <Header />
      <BannerContinent continent={continent} />
      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Bio continent={continent} />
        <Cidades continent={continent} />
      </Flex>
    </Flex>
  );
}

export async function getStaticPaths() {
  const prismic = getPrismicClient();
  const continentes = await prismic.query([
    Prismic.Predicates.at("document.type", "continentes"),
  ]);

  const paths = continentes.results.map((continent) => {
    return {
      params: {
        slug: continent.uid,
      },
    };
  });

  return {
    fallback: true,
    paths,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient();
  const slug = context.params;
  const response = await prismic.getByUID("continent", String(slug), {});

  const continent = {
    slug: response.uid,
    title: response.data.title,
    description: RichText.asText(response.data.description),
    banner_image: response.data.banner_image.url,
    countries: response.data.countries,
    languages: response.data.languages,
    cities: response.data.cities,
    cities_list: response.data.cities_list,
    cities100: response.data.cities100.map((city: any) => {
      return {
        city: city.city,
        country: city.country,
        thumbnail: city.thumbnail.url,
        flag: city.flag.url,
      };
    }),
  };

  return {
    props: {
      continent,
    },
    revalidate: 1800,
  };
};
export default ContinentDetails;
