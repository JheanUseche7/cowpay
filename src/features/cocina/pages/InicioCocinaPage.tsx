import styles from "../styles/InicioCocinaPage.module.css";

const columnas = ["Pedidos recibidos", "En preparación", "Listo para entregar"];

export function InicioCocinaPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.oculto}>Tablero de pedidos</h1>

      <div className={styles.tablero}>
        {columnas.map((titulo) => (
          <section key={titulo} className={styles.columna}>
            <h2>{titulo}</h2>
            {/* KAN-62: aquí van las tarjetas de pedido */}
          </section>
        ))}
      </div>
    </main>
  );
}
