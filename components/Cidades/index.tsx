import CidadeCard from "../CidadeCard";
import styles from "./Cidades.module.css";

function Cidades() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>Cidades + 100</div>
      <div className={styles.gridContainer}>
        <CidadeCard />
        <CidadeCard />
        <CidadeCard />
        <CidadeCard />
        <CidadeCard />
      </div>
    </div>
  );
}

export default Cidades;
