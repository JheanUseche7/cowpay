import styles from "../styles/CuentaDetallePage.module.css";

type CajaCajaCuentasIdPageProps = {
  id: string;
};

export function CuentaDetallePage({ id }: CajaCajaCuentasIdPageProps) {
  return (
    <main className={styles.page}>
      <h1>Detalle</h1>
      <p>Responsable: Santiago Evanz</p>
      <p>Aquí mostraremos: detalle, división y registro de cobro simulado</p>
      <p>Identificador: {id}</p>
    </main>
  );
}
