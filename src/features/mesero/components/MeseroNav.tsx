import Link from "next/link";
import styles from "../styles/MeseroNav.module.css";

export function MeseroNav() {
  return (
    <nav aria-label="Navegación del mesero" className={styles.nav}>
      <Link href="/mesero">Inicio</Link>
      <Link href="/mesero/mesas">Mesas</Link>
      <Link href="/mesero/entrar">Iniciar sesión</Link>
      <Link href="/mesero/mesas/4">Detalle de mesa y acciones</Link>
      <Link href="/mesero/mesas/4/pedido">Registrar pedido de esa mesa</Link>
      <Link href="/mesero/pedidos">Estado y avisos de pedidos</Link>
      <Link href="/mesero/mesas/4/cuenta">Cuenta</Link>
      <Link href="/mesero/mesas/4/cobrar">Registro de efectivo simulado</Link>
      <Link href="/mesero/recuperar">Recuperación de contraseña visual</Link>
      <Link href="/mesero/historial">Historial de servicio</Link>
      <Link href="/mesero/perfil">Perfil</Link>
    </nav>
  );
}
