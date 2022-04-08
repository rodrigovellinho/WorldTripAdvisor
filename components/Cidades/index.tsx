import { useEffect, useState } from "react";
import CidadeCard from "../CidadeCard";
import styles from "./Cidades.module.css";
import { useRouter } from "next/router";

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
    <div className={styles.container}>
      <div className={styles.text}>Cidades + 100</div>
      <div className={styles.gridContainer}>
        {citiesFind.map((city) => (
          <CidadeCard key={city?.city} {...city} />
        ))}
      </div>
    </div>
  );
}

export default Cidades;
