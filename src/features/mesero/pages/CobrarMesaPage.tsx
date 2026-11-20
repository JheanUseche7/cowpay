import styles from "../styles/CobrarMesaPage.module.css";

type MeseroMeseroMesasIdCobrarPageProps = {
  id: string;
};

export function CobrarMesaPage({ id }: MeseroMeseroMesasIdCobrarPageProps) {
  return (
    <main className={styles.page}>
      <h1>Registro de efectivo simulado</h1>
      <p>Responsable: Samuel Correa</p>
      <p>Aquí mostraremos: registro de efectivo simulado</p>
      <p>Identificador: {id}</p>
    </main>
  );
}
