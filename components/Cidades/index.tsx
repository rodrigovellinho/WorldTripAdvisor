import { useEffect, useState } from "react";
import CidadeCard from "../CidadeCard";
import { useRouter } from "next/router";
import { Container, Text, Grid } from "@chakra-ui/react";

interface SelectedCities {
  continent: string;
  image: string;
  elipse: string;
  city: string;
  country: string;
}

function Cidades() {
  const [cities, setCities] = useState<SelectedCities[]>([]);
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  const filteredCities = router.query.continent;

  useEffect(() => {
    setLoading(true);
    fetch(" http://localhost:3000/cidades")
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
        setLoading(false);
      });
  }, []);

  let citiesFind = cities
    .filter((city) => city.continent === filteredCities)
    .map((city) => city);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container width="1160px" height="700px">
      <Text
        height="54px"
        fontFamily="Poppins"
        fontStyle="normal"
        fontWeight="500"
        fontSize="36px"
        line-height="54px"
        textAlign="left"
        color="#47585b"
      >
        Cidades + 100
      </Text>
      <Grid mt="40px" templateColumns="repeat(4, 1fr)" gap={16}>
        {citiesFind.map((city) => (
          <CidadeCard key={city?.city} {...city} />
        ))}
      </Grid>
    </Container>
  );
}

export default Cidades;
