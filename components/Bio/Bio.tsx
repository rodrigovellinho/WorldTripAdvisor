import styles from "./Bio.module.css";

interface BioProps {
  bioDescription: string;
}

function Bio({ bioDescription }: BioProps) {
  return <div className={styles.container}>{bioDescription}</div>;
}

export default Bio;
