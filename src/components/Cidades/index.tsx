import CidadeCard from "../CidadeCard";
import { Grid, Heading } from "@chakra-ui/react";
import { ContinentProps } from "../../pages/continent/[slug]";

function Cidades({ continent }: ContinentProps) {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", 0]}
      >
        {continent.cities100.map((city) => {
          <CidadeCard
            key={city.city}
            name={city.city}
            country={city.country}
            flag={city.flag}
            image={city.thumbnail}
          />;
        })}
      </Grid>
    </>
  );
}

export default Cidades;
