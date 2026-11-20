import styles from "../styles/MenuMesaPage.module.css";

type ComensalRSlugMesaCodeMenuPageProps = {
  slug: string;
  code: string;
};

export function MenuMesaPage({ slug, code }: ComensalRSlugMesaCodeMenuPageProps) {
  return (
    <main className={styles.page}>
      <h1>Menú por categorías</h1>
      <p>Responsable: Oscar Rojas</p>
      <p>Aquí mostraremos: menú por categorías</p>
      <p>Restaurante: {slug}</p>
      <p>Código de mesa: {code}</p>
    </main>
  );
}
