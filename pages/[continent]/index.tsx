import BannerContinent from "../../components/BannerContinent";
import Bio from "../../components/Bio/Bio";
import Cidades from "../../components/Cidades";
import Header from "../../components/Header";
import Info from "../../components/Info/Info";
import styles from "./ContinentDetails.module.css";
import { GetStaticProps } from "next";
import { useState } from "react";
import { Container, Box, Flex, HStack } from "@chakra-ui/react";

interface SelectedContinent {
  continent: string;
  description: string;
  continent_quantity: number;
  continent_languages: number;
  continent_cities: number;
  continent_name: string;
  url_image: string;
}

interface ContinentDetailsProps {
  continentFind: SelectedContinent;
}

function ContinentDetails({ continentFind }: ContinentDetailsProps) {
  const [showCities, setShowCities] = useState<boolean>(false);

  const {
    description,
    continent_quantity,
    continent_languages,
    continent_cities,
    continent_name,
    url_image,
  } = continentFind;

  return (
    <Container w="1440px" h="1706px" centerContent>
      <Box>
        <Header botao={"sim"} />
        <BannerContinent continent={continent_name} image={url_image} />
        <Flex mt={20} align="center" justifyContent="flex-start">
          <HStack>
            <Box ml="150px">
              <Bio bioDescription={description} />
            </Box>
            <Box ml="150px">
              <Info
                quantity={continent_quantity}
                languages={continent_languages}
                cities={continent_cities}
                showCitiesHandle={setShowCities}
                showCities={showCities}
              />
            </Box>
          </HStack>
        </Flex>
        {showCities && <Cidades />}
      </Box>
    </Container>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/continents");
  const res_json: SelectedContinent[] = await res.json();

  const paths = res_json.map((continent) => ({
    params: { continent: continent.continent },
  }));

  return {
    fallback: false,
    paths: paths,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("http://localhost:3000/continents");
  const res_json: SelectedContinent[] = await res.json();

  const continentParams = context.params?.continent;

  let continentFind = res_json.find(
    (selectContinent) => selectContinent.continent === continentParams
  );

  return {
    props: {
      continentFind,
    },
  };
};

export default ContinentDetails;
