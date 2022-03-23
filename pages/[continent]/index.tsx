import BannerContinent from "../../components/BannerContinent";
import Bio from "../../components/Bio/Bio";
import Header from "../../components/Header";
import Info from "../../components/Info/Info";
import styles from "./ContinentDetails.module.css";

function ContinentDetails() {
  return (
    <div className={styles.container}>
      <Header botao={"sim"} />
      <BannerContinent />
      <div className={styles.bioInfo}>
        <Bio />
        <Info />
      </div>
    </div>
  );
}

export default ContinentDetails;
