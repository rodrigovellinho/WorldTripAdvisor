import styles from "./Info.module.css";
import Information from "../../assets/Info.svg";
import Image from "next/image";
import { Container, Flex, HStack } from "@chakra-ui/react";

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
    <Container>
      <Flex>
        <HStack align="center" justify="center">
          <div className={styles.textContainer}>
            <span className={styles.highlight}>{cities}</span>
            <span className={styles.text}>países</span>
          </div>
          <div className={styles.textContainer}>
            <span className={styles.highlight}>{languages}</span>
            <span className={styles.text}>línguas</span>
          </div>
          <div className={styles.textContainer}>
            <span className={styles.highlight}>{quantity}</span>
            <div>
              <div>
                <span className={styles.text}>cidades +100</span>

                <Image
                  className={styles.information}
                  src={Information}
                  alt="info"
                  onClick={() => showCitiesHandle(!showCities)}
                />
              </div>
            </div>
          </div>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Info;
