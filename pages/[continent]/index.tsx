import BannerContinent from "../../components/BannerContinent";
import Bio from "../../components/Bio/Bio";
import Cidades from "../../components/Cidades";
import Header from "../../components/Header";
import Info from "../../components/Info/Info";
import styles from "./ContinentDetails.module.css";

function ContinentDetails() {
  return (
    <div className={styles.container}>
      <Header botao={"sim"} />
      <BannerContinent />
      <div className={styles.bioInfo}>
        <div className={styles.bio}>
          <Bio />
        </div>
        <div className={styles.information}>
          <Info />
        </div>
      </div>
      <Cidades />
    </div>
  );
}

export default ContinentDetails;
