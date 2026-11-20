import styles from "../styles/CuentaMesaPage.module.css";

type ComensalRSlugMesaCodeCuentaPageProps = {
  slug: string;
  code: string;
};

export function CuentaMesaPage({ slug, code }: ComensalRSlugMesaCodeCuentaPageProps) {
  return (
    <main className={styles.page}>
      <h1>Consumo y total</h1>
      <p>Responsable: Oscar Rojas</p>
      <p>Aquí mostraremos: consumo y total</p>
      <p>Restaurante: {slug}</p>
      <p>Código de mesa: {code}</p>
    </main>
  );
}
