import { SuperadminNav } from "./SuperadminNav";
import styles from "../styles/SuperadminHeader.module.css";

export function SuperadminHeader() {
  return (
    <header className={styles.header}>
      <p>Cowpay; Superadmin de Cowpay</p>
      <SuperadminNav />
    </header>
  );
}
