import { Flex, Heading } from "@chakra-ui/react";

interface BannerProps {
  continent: string;
  image: string;
}

function BannerContinent(/* { continent, image }: BannerProps */) {
  /* const Background = image; */
  return (
    <Flex
      w="100%"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage="/assets/europa.svg"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify={["center", "center", "start"]}
    >
      <Heading
        textAlign={["center", "left"]}
        fontSize={["1.75rem", "5xl"]}
        color="gray.100"
        fontWeight="500"
      >
        Europa
      </Heading>
    </Flex>
  );
}

export default BannerContinent;
