import Link from "next/link";
import styles from "../styles/AdminNav.module.css";

export function AdminNav() {
  return (
    <nav className={styles.nav} aria-label="Navegación de Administrador del restaurante">
      <Link href="/admin/entrar">entrar</Link>
      <Link href="/admin">gestion-restaurante</Link>
      <Link href="/admin/menu">menu</Link>
      <Link href="/admin/inventario">inventario</Link>
      <Link href="/admin/personal">personal</Link>
      <Link href="/admin/reportes">reportes</Link>
      <Link href="/admin/perfil">perfil</Link>
      <Link href="/admin/recuperar">recuperar</Link>
      <Link href="/admin/verificar">verificar</Link>
    </nav>
  );
}
