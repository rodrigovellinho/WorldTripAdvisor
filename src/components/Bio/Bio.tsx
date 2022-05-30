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

interface BioProps {
  bioDescription: string;
}

function Bio(/* { bioDescription }: BioProps */) {
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat
        quisquam eveniet optio est necessitatibus, quod debitis. Sed, maxime
        modi?
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
            50
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
            60
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
            27
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
                  Lorem ipsum dolor sit amet.
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
