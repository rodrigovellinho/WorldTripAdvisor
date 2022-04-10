import Airplane from "../../public/assets/Airplane.svg";
import Image from "next/image";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import BackgroundImage from "../../public/assets/Background.svg";

function Banner() {
  return (
    <Container>
      <Flex bgImage={BackgroundImage}>
        <Box margin-left="70px" margin-top="60px" w="524px">
          <Text
            d="block"
            w="426px"
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="500"
            fontSize="36px"
            line-height="54px"
            color="#f5f8fa"
          >
            5 Continentes, <br />
            infinitas possibilidades
          </Text>
          <br />
          <Text
            width="inherit"
            fontFamily="Poppins"
            fontStyle="normal"
            fontWeight="400"
            fontSize="20px"
            line-height="30px"
            color="#dadada"
          >
            Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou
          </Text>
        </Box>
        <Box mt="80px" mr="120px" transform="rotate(3deg)">
          <Image src={Airplane} alt="Airplane" />
        </Box>
      </Flex>
    </Container>
  );
}

export default Banner;
