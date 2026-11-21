"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/CocinaNav.module.css";

const enlaces = [
  { href: "/cocina", texto: "Pedidos" },
  { href: "/cocina/historial", texto: "Historial" },
  { href: "/cocina/menu", texto: "Menú" },
  { href: "/cocina/turno", texto: "Turno" },
];

export function CocinaNav() {
  const rutaActual = usePathname();

  return (
    <nav className={styles.nav} aria-label="Navegación de cocina">
      {enlaces.map((enlace) => {
        const activo = rutaActual === enlace.href;
        return (
          <Link
            key={enlace.href}
            href={enlace.href}
            className={activo ? styles.activo : styles.enlace}
            aria-current={activo ? "page" : undefined}
          >
            {enlace.texto}
          </Link>
        );
      })}
    </nav>
  );
}
