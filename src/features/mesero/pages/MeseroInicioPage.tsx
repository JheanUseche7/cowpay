import Link from "next/link";
import styles from "../styles/MeseroInicioPage.module.css";

const clientesUltimosDias = [
  { dia: "Lun", cantidad: 10 },
  { dia: "Mar", cantidad: 7 },
  { dia: "Mié", cantidad: 6 },
  { dia: "Jue", cantidad: 9 },
  { dia: "Vie", cantidad: 8 },
  { dia: "Sáb", cantidad: 12 },
  { dia: "Hoy", cantidad: 2 },
];

export function MeseroInicioPage() {
  const mesasLibres = 5;
  const mesasOcupadas = 2;
  const mesasEntregadas = 1;

  return (
    <main>
      <h1>¡Hola, Carlos!</h1>
      <p className={styles.parrafo}>Panel de control rápido y estado actual del salón</p>
      <article className={styles.estadoMesas}>
        <div className={`${styles.mesas} ${styles.libres}`}>
          <span>{mesasLibres}</span>
          <p>Mesas Libres</p>
        </div>
        <div className={`${styles.mesas} ${styles.ocupadas}`}>
          <span>{mesasOcupadas}</span>
          <p>Mesas Ocupadas</p>
        </div>
        <div className={`${styles.mesas} ${styles.entregadas}`}>
          <span>{mesasEntregadas}</span>
          <p>Comida entregada</p>
        </div>
      </article>

      <section className={styles.resumenSemanal} aria-labelledby="clientes-semana-titulo">
        <div className={styles.encabezadoResumen}>
          <div>
            <h2 id="clientes-semana-titulo" className={styles.tituloResumen}>
              Clientes atendidos (Últimos 7 días)
            </h2>
            <p className={styles.subtituloResumen}>Cantidad de personas atendidas</p>
          </div>
          <span className={styles.totalSemanal}>Total semanal: $1.3M</span>
        </div>

        <div className={styles.graficoSemanal}>
          {clientesUltimosDias.map(({ dia, cantidad }) => (
            <div className={styles.diaGrafico} key={dia}>
              <div className={styles.areaBarra}>
                <span
                  className={styles.barra}
                  style={{ height: `${(cantidad / 12) * 100}%` }}
                  aria-hidden="true"
                />
              </div>
              <span className={styles.etiquetaDia}>
                {dia}: {cantidad}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Link href="/mesero/mesas">Ver mesas</Link>
    </main>
  );
}
