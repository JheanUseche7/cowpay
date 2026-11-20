import styles from "../styles/PlatoDetallePage.module.css";

type ComensalRSlugMesaCodePlatosIdPageProps = {
  slug: string;
  code: string;
  id: string;
};

export function PlatoDetallePage({ slug, code, id }: ComensalRSlugMesaCodePlatosIdPageProps) {
  return (
    <main className={styles.page}>
      <h1>Detalle</h1>
      <p>Responsable: Oscar Rojas</p>
      <p>Aquí mostraremos: detalle, cantidad y observaciones</p>
      <p>Restaurante: {slug}</p>
      <p>Código de mesa: {code}</p>
      <p>Identificador: {id}</p>
    </main>
  );
}
