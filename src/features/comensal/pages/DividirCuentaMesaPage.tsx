import styles from "../styles/DividirCuentaMesaPage.module.css";

type ComensalRSlugMesaCodeDividirPageProps = {
  slug: string;
  code: string;
};

export function DividirCuentaMesaPage({ slug, code }: ComensalRSlugMesaCodeDividirPageProps) {
  return (
    <main className={styles.page}>
      <h1>División de cuenta</h1>
      <p>Responsable: Oscar Rojas</p>
      <p>Aquí mostraremos: división de cuenta</p>
      <p>Restaurante: {slug}</p>
      <p>Código de mesa: {code}</p>
    </main>
  );
}
