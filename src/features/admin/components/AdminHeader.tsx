import { AdminNav } from "./AdminNav";
import styles from "../styles/AdminHeader.module.css";

export function AdminHeader() {
  return (
    <header className={styles.header}>
      <p>Cowpay; Administrador del restaurante</p>
      <AdminNav />
    </header>
  );
}
