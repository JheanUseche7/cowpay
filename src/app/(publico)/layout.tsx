import type { ReactNode } from "react";
import Link from "next/link";
import styles from "../../features/publico/styles/PublicoLayout.module.css";

type PublicoLayoutProps = { children: ReactNode };

export default function PublicoLayout({ children }: PublicoLayoutProps) {
  return (
    <div>
      <header className={styles.header}>
        <p>Cowpay</p>
        <nav className={styles.nav} aria-label="Navegación pública">
          <Link href="/">Inicio</Link>
          <Link href="/restaurantes">Restaurantes</Link>
          <Link href="/como-funciona">Cómo funciona</Link>
          <Link href="/planes">Planes</Link>
          <Link href="/para-restaurantes">Para restaurantes</Link>
          <Link href="/nosotros">Quiénes somos</Link>
        </nav>
        <div className={styles.accesos}>
          <Link href="/login">Iniciar sesión</Link>
          <Link href="/registro">Crear cuenta gratis</Link>
        </div>
      </header>
      {children}
      <footer>
        Pie de página, pendiente de desarrollar.<p></p>
      </footer>
    </div>
  );
}
