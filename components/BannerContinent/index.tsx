import { Box, Container, Text } from "@chakra-ui/react";
import styles from "./BannerContinent.module.css";

interface BannerProps {
  continent: string;
  image: string;
}

function BannerContinent({ continent, image }: BannerProps) {
  const Background = image;
  return (
    <Box
      w="100%"
      h="500px"
      background="linear-gradient(
      0deg,
      rgba(28, 20, 1, 0.35),
      rgba(28, 20, 1, 0.35)
    )"
      display="flex"
      bgImage={Background}
      bgSize="cover"
    >
      <Box
        fontFamily="Poppins"
        fontStyle="normal"
        fontWeight="600"
        fontSize="48px"
        line-height="72px"
        color="#f5f8fa"
        ml="173px"
        mt="369px"
      >
        <Text>{continent}</Text>
      </Box>
    </Box>
  );
}

export default BannerContinent;

/*     <div
      className={styles.container}
      style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }}
    > */
