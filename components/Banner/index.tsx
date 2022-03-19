import styles from "./Banner.module.css";
import Airplane from "../../assets/Airplane.svg";
import Image from "next/image";

function Banner() {
  return (
    <div className={styles.background}>
      <div className={styles.spanOne}>
        <span>5 Continentes, infinitas possibilidades</span>
      </div>
      <div>
        <span className={styles.spanTwo}>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou
        </span>
      </div>
      <div className={styles.airplane}>
        <Image src={Airplane} alt="Airplane" />
      </div>
    </div>
  );
}

export default Banner;
