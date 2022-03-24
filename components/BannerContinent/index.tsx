import styles from "./BannerContinent.module.css";

interface BannerProps {
  continent: string;
  image: string;
}

function BannerContinent({ continent, image }: BannerProps) {
  const Background = image;
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }}
    >
      <div className={styles.spanOne}>
        <span>{continent}</span>
      </div>
    </div>
  );
}

export default BannerContinent;
