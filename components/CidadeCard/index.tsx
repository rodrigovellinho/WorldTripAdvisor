import {
  Container,
  Flex,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import styles from "./CidadeCard.module.css";

interface CidadeCardProps {
  continent: string;
  image: string;
  city: string;
  country: string;
  elipse: string;
}

function CidadeCard(props: CidadeCardProps) {
  return (
    <GridItem>
      <Container
        width="256px"
        height="279px"
        background="#ffffff"
        border="1px solid rgba(255, 186, 8, 0.5)"
        box-sizing="border-box"
        border-radius="4px"
        p="0"
      >
        <Image
          objectFit="cover"
          width="256px"
          height="173px"
          src={props.image}
          alt={props.city}
        />

        <Flex justifyContent="space-around" mt="25px" alignItems="center">
          <VStack align="flex-start">
            <Text
              fontFamily="Barlow"
              fontStyle="normal"
              fontWeight="600"
              fontSize="20px"
              line-height="25px"
              color="#47585b"
            >
              {props.city}
            </Text>
            <Text
              fontFamily="Barlow"
              fontStyle="normal"
              fontWeight="500"
              fontSize="16px"
              line-height="26px"
              color="#999999"
            >
              {props.country}
            </Text>
          </VStack>
          <Image
            width="30px"
            height="30px"
            objectFit="cover"
            src={props.elipse}
            alt={props.city}
          />
        </Flex>
      </Container>
    </GridItem>
  );
}

export default CidadeCard;
