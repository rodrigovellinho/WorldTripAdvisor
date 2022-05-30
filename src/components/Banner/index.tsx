import { Image, Flex, Text, Heading } from "@chakra-ui/react";

function Banner() {
  return (
    <Flex
      bgImage="url('/assets/Background.svg')"
      bgSize="cover"
      bgRepeat="no-repeat"
      w="100%"
      bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
      h={["163px", "250px", "250px", "335px"]}
      justify-content="space-between"
    >
      <Flex
        justify={["center", "space-between"]}
        align="center"
        w="100%"
        mx="auto"
        px={["4", "10", "15", "20", "36"]}
      >
        <div>
          <Heading
            color="gray.100"
            fontWeight="500"
            fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
          >
            5 Continentes, <br />
            infinitas possibilidades
          </Heading>
          <Text
            mt="5"
            fontSize={["0.8rem", "xl"]}
            color="gray.300"
            maxW={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou
          </Text>
        </div>
        <Image
          w={["300px", "300px", "300px", "430px"]}
          display={["none", "none", "block"]}
          src="/assets/Airplane.svg"
          alt="Logo avião"
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  );
}

export default Banner;
