import Link from "next/link";
import styles from "../styles/CocinaNav.module.css";

export function CocinaNav() {
  return (
    <nav className={styles.nav} aria-label="Navegación de Cocina">
      <Link href="/cocina/login">entrar</Link>
      <Link href="/cocina">cocina</Link>
      <Link href="/cocina/historial">historial</Link>
      <Link href="/cocina/menu">menu</Link>
      <Link href="/cocina/turno">turno</Link>
      <Link href="/cocina/perfil">perfil</Link>
      <Link href="/cocina/recuperar">recuperar</Link>
    </nav>
  );
}
