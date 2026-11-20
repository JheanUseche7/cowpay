import Image from "next/image";
import { MeseroNav } from "./MeseroNav";
import styles from "../styles/MeseroHeader.module.css";

let ruta_del_logo_de_cowpay = "/media/compartido/logo-cowpay-removebg.png";

export function MeseroHeader() {
  return (
    <header className={styles.header}>
      <Image
        src={ruta_del_logo_de_cowpay}
        alt="Cowpay logo"
        width={953}
        height={262}
        className={styles.logo}
      />
      <MeseroNav />
    </header>
  );
}
