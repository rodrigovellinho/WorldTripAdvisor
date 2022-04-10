import { Container, HStack, VStack, Text, Icon } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

interface InfoProps {
  quantity: number;
  languages: number;
  cities: number;
  showCitiesHandle: (showCities: boolean) => void;
  showCities: boolean;
}

function Info(props: InfoProps) {
  const { quantity, languages, cities, showCitiesHandle, showCities } = props;
  return (
    <Container ml="130px" mb="80px">
      <HStack spacing="60px">
        <VStack>
          <Text
            fontSize="48px"
            color="#ffba08"
            fontFamily="Poppins"
            font-style="normal"
            fontWeight={600}
            lineHeight="72px"
            textAlign="center"
          >
            {cities}
          </Text>
          <Text
            fontSize="24px"
            fontFamily="Poppins"
            font-style="normal"
            fontWeight={600}
            lineHeight="36px"
            textAlign="center"
          >
            países
          </Text>
        </VStack>
        <VStack>
          <Text
            fontSize="48px"
            color="#ffba08"
            fontFamily="Poppins"
            font-style="normal"
            fontWeight={600}
            lineHeight="72px"
            textAlign="center"
          >
            {languages}
          </Text>
          <Text
            fontSize="24px"
            fontFamily="Poppins"
            font-style="normal"
            fontWeight={600}
            lineHeight="36px"
            textAlign="center"
          >
            línguas
          </Text>
        </VStack>
        <VStack>
          <Text
            fontSize="48px"
            color="#ffba08"
            fontFamily="Poppins"
            font-style="normal"
            fontWeight={600}
            lineHeight="72px"
            textAlign="center"
          >
            {quantity}
          </Text>
          <HStack>
            <Text
              fontSize="24px"
              fontFamily="Poppins"
              font-style="normal"
              fontWeight={600}
              lineHeight="36px"
              textAlign="center"
            >
              cidades +100
            </Text>

            <Icon
              as={InfoOutlineIcon}
              alt="info"
              cursor="pointer"
              onClick={() => showCitiesHandle(!showCities)}
            />
          </HStack>
        </VStack>
      </HStack>
    </Container>
  );
}

export default Info;
