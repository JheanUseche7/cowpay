import Link from "next/link";
import styles from "../styles/CajaNav.module.css";

export function CajaNav() {
  return (
    <nav className={styles.nav} aria-label="Navegación de Caja">
      <Link href="/caja/entrar">entrar</Link>
      <Link href="/caja/abrir">abrir</Link>
      <Link href="/caja">caja</Link>
      <Link href="/caja/cuentas">cuentas</Link>
      <Link href="/caja/cuentas/4">Detalle</Link>
      <Link href="/caja/historial">historial</Link>
      <Link href="/caja/turno">turno</Link>
      <Link href="/caja/perfil">perfil</Link>
      <Link href="/caja/recuperar">recuperar</Link>
    </nav>
  );
}
