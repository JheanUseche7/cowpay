import styles from "../styles/RestaurantePage.module.css";

type PublicoRSlugPageProps = {
  slug: string;
};

export function RestaurantePage({ slug }: PublicoRSlugPageProps) {
  return (
    <main className={styles.page}>
      <h1>Ficha pública de restaurante</h1>
      <p>Responsable: Jhean Useche</p>
      <p>Aquí mostraremos la información pública del restaurante</p>
      <p>Restaurante: {slug}</p>
    </main>
  );
}
