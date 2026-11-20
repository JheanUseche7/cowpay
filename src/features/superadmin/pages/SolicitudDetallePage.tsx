import styles from "../styles/SolicitudDetallePage.module.css";

type SuperadminOperacionCowpaySolicitudesIdPageProps = {
  id: string;
};

export function SolicitudDetallePage({ id }: SuperadminOperacionCowpaySolicitudesIdPageProps) {
  return (
    <main className={styles.page}>
      <h1>Aprobar/rechazar localmente</h1>
      <p>Responsable: Santiago Diaz Palma</p>
      <p>Aquí mostraremos: aprobar/rechazar con datos de ejemplo</p>
      <p>Identificador: {id}</p>
    </main>
  );
}
