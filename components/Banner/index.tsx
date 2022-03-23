import styles from "./Banner.module.css";
import Airplane from "../../assets/Airplane.svg";
import Image from "next/image";

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <span className={styles.spanOne}>
          5 Continentes, <br />
          infinitas possibilidades
        </span>
        <br />
        <span className={styles.spanTwo}>
          Chegou a hora de tirar do papel a viagem que você <br />
          sempre sonhou
        </span>
      </div>
      <div className={styles.airplane}>
        <Image src={Airplane} alt="Airplane" />
      </div>
    </div>
  );
}

export default Banner;
