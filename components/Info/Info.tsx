import styles from "./Info.module.css";
import Information from "../../assets/Info.svg";
import Image from "next/image";

function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <span className={styles.highlight}>50</span>
        <span className={styles.text}>países</span>
      </div>
      <div className={styles.textContainer}>
        <span className={styles.highlight}>60</span>
        <span className={styles.text}>línguas</span>
      </div>
      <div className={styles.textContainer}>
        <span className={styles.highlight}>27</span>
        <div>
          <span className={styles.text}>cidades +100</span>
          <Image className={styles.information} src={Information} alt="info" />
        </div>
      </div>
    </div>
  );
}

export default Info;
