import styles from "../styles/CuentaMesaPage.module.css";

type MeseroMeseroMesasIdCuentaPageProps = {
  id: string;
};

export function CuentaMesaPage({ id }: MeseroMeseroMesasIdCuentaPageProps) {
  return (
    <main className={styles.page}>
      <h1>Cuenta</h1>
      <p>Responsable: Samuel Correa</p>
      <p>Aquí mostraremos: cuenta, división y enlace a cobro</p>
      <p>Identificador: {id}</p>
    </main>
  );
}
