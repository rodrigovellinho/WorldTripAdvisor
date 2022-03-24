import styles from "./Info.module.css";
import Information from "../../assets/Info.svg";
import Image from "next/image";

interface InfoProps {
  quantity: number;
  languages: number;
  cities: number;
}

function Info(props: InfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <span className={styles.highlight}>{props.cities}</span>
        <span className={styles.text}>países</span>
      </div>
      <div className={styles.textContainer}>
        <span className={styles.highlight}>{props.languages}</span>
        <span className={styles.text}>línguas</span>
      </div>
      <div className={styles.textContainer}>
        <span className={styles.highlight}>{props.quantity}</span>
        <div>
          <span className={styles.text}>cidades +100</span>
          <Image className={styles.information} src={Information} alt="info" />
        </div>
      </div>
    </div>
  );
}

export default Info;
