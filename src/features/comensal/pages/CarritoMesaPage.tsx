import styles from "../styles/CarritoMesaPage.module.css";

type ComensalRSlugMesaCodeCarritoPageProps = {
  slug: string;
  code: string;
};

export function CarritoMesaPage({ slug, code }: ComensalRSlugMesaCodeCarritoPageProps) {
  return (
    <main className={styles.page}>
      <h1>Mi pedido antes de enviar</h1>
      <p>Responsable: Oscar Rojas</p>
      <p>Aquí mostraremos: mi pedido antes de enviar</p>
      <p>Restaurante: {slug}</p>
      <p>Código de mesa: {code}</p>
    </main>
  );
}
