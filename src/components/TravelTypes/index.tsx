import TravelType from "./TravelType";
import { Grid, GridItem } from "@chakra-ui/react";

function TravelTypes() {
  return (
    <Grid
      gridTemplateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <TravelType image="/assets/cocktail.svg" text="vida noturna" />
      </GridItem>
      <GridItem>
        <TravelType image="/assets/surf.svg" text="praia" />
      </GridItem>
      <GridItem>
        <TravelType image="/assets/building.svg" text="moderno" />
      </GridItem>
      <GridItem>
        <TravelType image="/assets/museum.svg" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TravelType image="/assets/earth.svg" text="e mais..." />
      </GridItem>
    </Grid>
  );
}

export default TravelTypes;
