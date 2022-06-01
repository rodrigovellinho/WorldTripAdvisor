import {
  Flex,
  Grid,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { ContinentProps } from "../../pages/continent/[slug]";

function Bio({ continent }: ContinentProps) {
  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.700"
        textAlign="justify"
      >
        {continent.description}
      </Text>
      <Flex align="center" justifyContent="space-between">
        <Flex
          direction="column"
          justify="center"
          align={["flex-start", "flex-start", "center"]}
        >
          <Heading
            fontSize={["2xl", "5xl"]}
            color="yellow.400"
            fontWeight="500"
          >
            {continent.countries}
          </Heading>
          <Text fontWeight="500" color="gray.600" fontSize={["md", "xl"]}>
            países
          </Text>
        </Flex>
        <Flex
          direction="column"
          justify="center"
          align={["flex-start", "flex-start", "center"]}
        >
          <Heading
            fontSize={["2xl", "5xl"]}
            color="yellow.400"
            fontWeight="500"
          >
            {continent.languages}
          </Heading>
          <Text fontWeight="500" color="gray.600" fontSize={["md", "xl"]}>
            línguas
          </Text>
        </Flex>
        <Flex
          direction="column"
          justify="center"
          align={["flex-start", "flex-start", "center"]}
        >
          <Heading
            fontSize={["2xl", "5xl"]}
            color="yellow.400"
            fontWeight="500"
          >
            {continent.cities}
          </Heading>
          <Text fontWeight="500" color="gray.600" fontSize={["md", "xl"]}>
            cidades +100
            <Popover>
              <PopoverTrigger>
                <span>
                  <Icon
                    ml="1"
                    color="gray.400"
                    cursor="pointer"
                    w={["10px", "16px"]}
                    h={["10px", "16px"]}
                    as={InfoOutlineIcon}
                  />
                </span>
              </PopoverTrigger>
              <PopoverContent bg="gray.700" color="yellow.400">
                <PopoverArrow bg="gray.700" />
                <PopoverCloseButton />
                <PopoverBody fontWeight="400" fontSize="lg">
                  {continent.cities_list}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Text>
        </Flex>
      </Flex>
    </Grid>
  );
}

export default Bio;
