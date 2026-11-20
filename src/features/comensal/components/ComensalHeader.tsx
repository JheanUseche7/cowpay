import { ComensalNav } from "./ComensalNav";
import styles from "../styles/ComensalHeader.module.css";

export function ComensalHeader() {
  return (
    <header className={styles.header}>
      <p>Cowpay; Comensal</p>
      <ComensalNav />
    </header>
  );
}
