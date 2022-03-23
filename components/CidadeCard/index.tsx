import styles from "./CidadeCard.module.css";

function CidadeCard() {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}></div>
      <div className={styles.containerInfo}>
        <div className={styles.containerText}>
          <span className={styles.city}>Londres</span>
          <span className={styles.country}>Reino Unido</span>
        </div>
        <div className={styles.elipse}></div>
      </div>
    </div>
  );
}

export default CidadeCard;
