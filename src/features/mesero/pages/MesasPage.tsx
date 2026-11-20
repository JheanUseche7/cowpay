import styles from "../styles/MesasPage.module.css";
import Link from "next/link";

export function MesasPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Mesas del mesero</h1>
      <p>Mesas del mesero</p>
      <p>Responsable: Samuel Correa</p>
      <p className={styles.description}>
        Aquí mostraremos las mesas del restaurante y sus estados.
      </p>
      <ul>
        <li>
          <Link href="/mesero/mesas/4">Ver mesa 4</Link>
        </li>
        <li>
          <Link href="/mesero/mesas/8">Ver mesa 8</Link>
        </li>
      </ul>
    </main>
  );
}
