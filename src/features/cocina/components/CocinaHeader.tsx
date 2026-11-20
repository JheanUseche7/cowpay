import { CocinaNav } from "./CocinaNav";
import styles from "../styles/CocinaHeader.module.css";

export function CocinaHeader() {
  return (
    <header className={styles.header}>
      <p>Cowpay; Cocina</p>
      <CocinaNav />
    </header>
  );
}
