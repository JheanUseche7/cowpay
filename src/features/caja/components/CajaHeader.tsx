import { CajaNav } from "./CajaNav";
import styles from "../styles/CajaHeader.module.css";

export function CajaHeader() {
  return (
    <header className={styles.header}>
      <p>Cowpay; Caja</p>
      <CajaNav />
    </header>
  );
}
