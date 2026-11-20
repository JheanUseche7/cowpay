import styles from "../styles/ConfirmacionPagoMesaPage.module.css";

type ComensalRSlugMesaCodeConfirmacionPageProps = {
  slug: string;
  code: string;
};

export function ConfirmacionPagoMesaPage({ slug, code }: ComensalRSlugMesaCodeConfirmacionPageProps) {
  return (
    <main className={styles.page}>
      <h1>Resultado de pago de demostración</h1>
      <p>Responsable: Oscar Rojas</p>
      <p>Aquí mostraremos: resultado de pago de demostración</p>
      <p>Restaurante: {slug}</p>
      <p>Código de mesa: {code}</p>
    </main>
  );
}
