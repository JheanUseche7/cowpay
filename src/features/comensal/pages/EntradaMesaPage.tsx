import styles from "../styles/EntradaMesaPage.module.css";

type ComensalRSlugMesaCodePageProps = {
  slug: string;
  code: string;
};

export function EntradaMesaPage({ slug, code }: ComensalRSlugMesaCodePageProps) {
  return (
    <main className={styles.page}>
      <h1>Bienvenida y entrada a sesión de mesa</h1>
      <p>Responsable: Oscar Rojas</p>
      <p>Aquí mostraremos: bienvenida y entrada a sesión de mesa</p>
      <p>Restaurante: {slug}</p>
      <p>Código de mesa: {code}</p>
    </main>
  );
}
