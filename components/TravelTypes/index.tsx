import Cocktail from "../../public/assets/cocktail.svg";
import Building from "../../public/assets/building.svg";
import Earth from "../../public/assets/earth.svg";
import Museum from "../../public/assets/museum.svg";
import Surf from "../../public/assets/surf.svg";
import TravelType from "./TravelType";
import { Container, HStack } from "@chakra-ui/react";

function TravelTypes() {
  return (
    <Container mt="100px" centerContent>
      <HStack spacing="50px">
        <TravelType image={Cocktail} text="vida noturna" />
        <TravelType image={Surf} text="praia" />
        <TravelType image={Building} text="moderno" />
        <TravelType image={Museum} text="clássico" />
        <TravelType image={Earth} text="e mais..." />
      </HStack>
    </Container>
  );
}

export default TravelTypes;
