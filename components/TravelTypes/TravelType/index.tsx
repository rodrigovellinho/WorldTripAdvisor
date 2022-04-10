import styles from "./TravelType.module.css";
import Image from "next/image";
import { Container, Box, VStack, Text } from "@chakra-ui/react";

interface TravelTypeProps {
  image: string;
  text: string;
}

function TravelType({ image, text }: TravelTypeProps) {
  return (
    <Container width="180px" height="145px">
      <VStack>
        <Box width="85px" height="85px">
          <Image src={image} alt="Cocktail" />
        </Box>
        <Box>
          <Text
            fontFamily="Poppins"
            fontWeight={600}
            fontSize="24px"
            line-height="36px"
            textAlign="center"
            color="#47585b"
          >
            {text}
          </Text>
        </Box>
      </VStack>
    </Container>
  );
}

export default TravelType;
