import Link from "next/link";
import { ChevronDown, Flame } from "lucide-react";
import { CocinaNav } from "./CocinaNav";
import {
  cocineroEjemplo,
  restauranteEjemplo,
  turnoEjemplo,
} from "../datosEjemplos";
import styles from "../styles/CocinaHeader.module.css";

export function CocinaHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.restaurante}>
        <span className={styles.inicial} aria-hidden="true">
          {restauranteEjemplo.inicial}
        </span>
        <div>
          <p className={styles.nombre}>{restauranteEjemplo.nombre}</p>
          <p className={styles.area}>
            <Flame size={12} aria-hidden="true" />
            Panel de cocina
          </p>
        </div>
      </div>

      <CocinaNav />

      <div className={styles.estado}>
        <span className={styles.conectado}>Conectado</span>
        <div className={styles.hora}>
          <p>{turnoEjemplo.hora}</p>
          <p>{turnoEjemplo.nombre}</p>
        </div>
        <Link href="/cocina/perfil" className={styles.usuario}>
          <span className={styles.iniciales}>{cocineroEjemplo.iniciales}</span>
          {cocineroEjemplo.nombre}
          <ChevronDown size={14} aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
