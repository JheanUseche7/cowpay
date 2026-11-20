import Link from "next/link";
import styles from "../styles/SuperadminNav.module.css";

export function SuperadminNav() {
  return (
    <nav className={styles.nav} aria-label="Navegación de Superadmin de Cowpay">
      <Link href="/superadmin/entrar">entrar</Link>
      <Link href="/superadmin">operacion-cowpay</Link>
      <Link href="/superadmin/solicitudes">solicitudes</Link>
      <Link href="/superadmin/solicitudes/4">Detalle</Link>
      <Link href="/superadmin/restaurantes">restaurantes</Link>
      <Link href="/superadmin/restaurantes/4">Detalle</Link>
      <Link href="/superadmin/verificar">verificar</Link>
      <Link href="/superadmin/recuperar">recuperar</Link>
    </nav>
  );
}
