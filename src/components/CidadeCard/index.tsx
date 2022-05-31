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
      <Image src="/assets/londres.jpg" alt="londres" h="170px" w="100%" />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            Londres
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            Reino Unido
          </Text>
        </Flex>
        <Image
          src="/assets/bandeira_reinounido.jpg"
          w="30px"
          h="30px"
          borderRadius="50%"
          objectFit="cover"
          alt="bandeira"
        />
      </Flex>
    </Box>
  );
}

export default CidadeCard;
