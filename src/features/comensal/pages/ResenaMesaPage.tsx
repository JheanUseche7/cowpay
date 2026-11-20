import styles from "../styles/ResenaMesaPage.module.css";

type ComensalRSlugMesaCodeResenaPageProps = {
  slug: string;
  code: string;
};

export function ResenaMesaPage({ slug, code }: ComensalRSlugMesaCodeResenaPageProps) {
  return (
    <main className={styles.page}>
      <h1>Reseña posterior al consumo</h1>
      <p>Responsable: Oscar Rojas</p>
      <p>Aquí mostraremos: reseña posterior al consumo, simulada</p>
      <p>Restaurante: {slug}</p>
      <p>Código de mesa: {code}</p>
    </main>
  );
}
