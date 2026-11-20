import styles from "../styles/EstadoPedidoMesaPage.module.css";

type ComensalRSlugMesaCodePedidoPageProps = {
  slug: string;
  code: string;
};

export function EstadoPedidoMesaPage({ slug, code }: ComensalRSlugMesaCodePedidoPageProps) {
  return (
    <main className={styles.page}>
      <h1>Pedido enviado y estado</h1>
      <p>Responsable: Oscar Rojas</p>
      <p>Aquí mostraremos: pedido enviado y estado</p>
      <p>Restaurante: {slug}</p>
      <p>Código de mesa: {code}</p>
    </main>
  );
}
