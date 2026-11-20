import styles from "../styles/ReciboDetallePage.module.css";

type ComensalComensalRecibosIdPageProps = {
  id: string;
};

export function ReciboDetallePage({ id }: ComensalComensalRecibosIdPageProps) {
  return (
    <main className={styles.page}>
      <h1>Recibo visual de una visita</h1>
      <p>Responsable: Oscar Rojas</p>
      <p>Aquí mostraremos: recibo visual de una visita</p>
      <p>Identificador: {id}</p>
    </main>
  );
}
