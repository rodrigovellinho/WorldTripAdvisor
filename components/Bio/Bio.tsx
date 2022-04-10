import { Container } from "@chakra-ui/react";
import styles from "./Bio.module.css";

interface BioProps {
  bioDescription: string;
}

function Bio({ bioDescription }: BioProps) {
  return (
    <Container
      width="600px"
      height="211px"
      fontFamily="Poppins"
      fontStyle="normal"
      fontWeight="400"
      fontSize="24px"
      line-height="36px"
      textAlign="justify"
      color="#47585b"
    >
      {bioDescription}
    </Container>
  );
}

export default Bio;
