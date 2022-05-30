import {
  VStack,
  Text,
  Flex,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";

interface TravelTypeProps {
  image: string;
  text: string;
}

function TravelType({ image, text }: TravelTypeProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });
  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      <VStack>
        {isMobile ? (
          <Image src={image} alt={text} w="85px" h="85px" mb="6" />
        ) : (
          <Text color="yellow.400" fontSize="4xl" mr="2">
            •
          </Text>
        )}

        <Text fontWeight={600} fontSize={["md", "xl", "2xl"]} color="gray.700">
          {text}
        </Text>
      </VStack>
    </Flex>
  );
}

export default TravelType;
