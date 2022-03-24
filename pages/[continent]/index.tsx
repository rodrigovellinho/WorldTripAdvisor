import BannerContinent from "../../components/BannerContinent";
import Bio from "../../components/Bio/Bio";
import Cidades from "../../components/Cidades";
import Header from "../../components/Header";
import Info from "../../components/Info/Info";
import styles from "./ContinentDetails.module.css";
import { GetStaticProps } from "next";

interface ContinentDetailsProps {
  continent: string | string[] | undefined;
  continentFind: {
    continent: string;
    description: string;
    continent_quantity: number;
    continent_languages: number;
    continent_cities: number;
    continent_name: string;
    url_image: string;
  };
}

function ContinentDetails({ continentFind }: ContinentDetailsProps) {
  console.log(continentFind.continent);

  const bio = continentFind.description;
  const info_qnt = continentFind.continent_quantity;
  const info_lan = continentFind.continent_languages;
  const info_cities = continentFind.continent_cities;
  const continent_name = continentFind.continent_name;
  const image = continentFind.url_image;

  return (
    <div className={styles.container}>
      <Header botao={"sim"} />
      <BannerContinent continent={continent_name} image={image} />
      <div className={styles.bioInfo}>
        <div className={styles.bio}>
          <Bio bioDescription={bio} />
        </div>
        <div className={styles.information}>
          <Info quantity={info_qnt} languages={info_lan} cities={info_cities} />
        </div>
      </div>
      <Cidades />
    </div>
  );
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          continent: "europa",
        },
      },
      {
        params: {
          continent: "america_do_norte",
        },
      },
      {
        params: {
          continent: "america_do_sul",
        },
      },
      {
        params: {
          continent: "asia",
        },
      },
      {
        params: {
          continent: "africa",
        },
      },
      {
        params: {
          continent: "oceania",
        },
      },
    ],
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("http://localhost:3000/continents");
  const json: ContinentDetailsProps[] = await res.json();

  const continentParams = context.params?.continent;

  let continentFind = json.find(
    (selectContinent) => selectContinent.continent === continentParams
  );

  return {
    props: {
      continentFind,
    },
  };
};

export default ContinentDetails;
