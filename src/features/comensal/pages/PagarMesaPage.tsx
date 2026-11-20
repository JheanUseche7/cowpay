import styles from "../styles/PagarMesaPage.module.css";

type ComensalRSlugMesaCodePagarPageProps = {
  slug: string;
  code: string;
};

export function PagarMesaPage({ slug, code }: ComensalRSlugMesaCodePagarPageProps) {
  return (
    <main className={styles.page}>
      <h1>Selección de método</h1>
      <p>Responsable: Oscar Rojas</p>
      <p>Aquí mostraremos: selección de método, simulada</p>
      <p>Restaurante: {slug}</p>
      <p>Código de mesa: {code}</p>
    </main>
  );
}
