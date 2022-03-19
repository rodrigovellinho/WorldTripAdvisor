import styles from "./Header.module.css";
import Logo from "../../assets/Logo.svg";
import Image from "next/image";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={Logo} alt="Trip Advisor Logo" />
      </div>
    </div>
  );
}

export default Header;
