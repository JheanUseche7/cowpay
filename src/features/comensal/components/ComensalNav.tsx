import Link from "next/link";
import styles from "../styles/ComensalNav.module.css";

export function ComensalNav() {
  return (
    <nav className={styles.nav} aria-label="Navegación de Comensal">
      <Link href="/r/arepique/mesa/AX7K2">Entrada de mesa</Link>
      <Link href="/r/arepique/mesa/AX7K2/menu">menu</Link>
      <Link href="/r/arepique/mesa/AX7K2/platos/4">Detalle</Link>
      <Link href="/r/arepique/mesa/AX7K2/carrito">carrito</Link>
      <Link href="/r/arepique/mesa/AX7K2/pedido">pedido</Link>
      <Link href="/r/arepique/mesa/AX7K2/cuenta">cuenta</Link>
      <Link href="/r/arepique/mesa/AX7K2/dividir">dividir</Link>
      <Link href="/r/arepique/mesa/AX7K2/pagar">pagar</Link>
      <Link href="/r/arepique/mesa/AX7K2/confirmacion">confirmacion</Link>
      <Link href="/r/arepique/mesa/AX7K2/resena">resena</Link>
      <Link href="/login">entrar</Link>
      <Link href="/registro">registro</Link>
      <Link href="/recuperar">recuperar</Link>
      <Link href="/restablecer">restablecer</Link>
      <Link href="/comensal">comensal</Link>
      <Link href="/comensal/favoritos">favoritos</Link>
      <Link href="/comensal/historial">historial</Link>
      <Link href="/comensal/recibos/4">Detalle</Link>
      <Link href="/comensal/resenas">resenas</Link>
      <Link href="/comensal/ajustes">ajustes</Link>
    </nav>
  );
}
