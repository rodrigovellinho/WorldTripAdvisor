import styles from "./TravelType.module.css";
import Image from "next/image";

interface TravelTypeProps {
  image: string;
  text: string;
}

function TravelType({ image, text }: TravelTypeProps) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={image} alt="Cocktail" />
      </div>
      <div className={styles.span}>
        <span>{text}</span>
      </div>
    </div>
  );
}

export default TravelType;
