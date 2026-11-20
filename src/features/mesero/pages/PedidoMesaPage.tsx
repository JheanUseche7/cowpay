import styles from "../styles/PedidoMesaPage.module.css";

type MeseroMeseroMesasIdPedidoPageProps = {
  id: string;
};

export function PedidoMesaPage({ id }: MeseroMeseroMesasIdPedidoPageProps) {
  return (
    <main className={styles.page}>
      <h1>Registrar pedido de esa mesa</h1>
      <p>Responsable: Samuel Correa</p>
      <p>Aquí mostraremos: registrar pedido de esa mesa</p>
      <p>Identificador: {id}</p>
    </main>
  );
}
