import styles from "./Header.module.css";
import Logo from "../../assets/Logo.svg";
import Image from "next/image";
import Voltar from "../../assets/Voltar.svg";
import Link from "next/link";

interface HeaderProps {
  botao: string;
}

function Header({ botao }: HeaderProps) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {botao === "sim" ? (
          <Link href="/">
            <a className={styles.link}>
              <Image src={Voltar} alt="Botão voltar" />
            </a>
          </Link>
        ) : (
          ""
        )}
        <Image src={Logo} alt="Trip Advisor Logo" />
      </div>
    </div>
  );
}

export default Header;
