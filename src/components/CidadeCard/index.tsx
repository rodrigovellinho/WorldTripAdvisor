import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";

interface CidadeCardProps {
  continent: string;
  image: string;
  city: string;
  country: string;
  elipse: string;
}

function CidadeCard(/* props: CidadeCardProps */) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image />
      <Flex>
        <Flex>
          <Heading>Londres</Heading>
          <Text>Reino Unido</Text>
        </Flex>
        <Image />
      </Flex>
    </Box>
  );
}

export default CidadeCard;
