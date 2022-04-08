import styles from "./CidadeCard.module.css";

interface CidadeCardProps {
  continent: string;
  image: string;
  city: string;
  country: string;
}

function CidadeCard(props: CidadeCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.containerImage}></div>
      <div className={styles.containerInfo}>
        <div className={styles.containerText}>
          <span className={styles.city}>{props.city}</span>
          <span className={styles.country}>{props.country}</span>
        </div>
        <div className={styles.elipse}></div>
      </div>
    </div>
  );
}

export default CidadeCard;
