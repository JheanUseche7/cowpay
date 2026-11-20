import styles from "../styles/RestauranteDetallePage.module.css";

type SuperadminOperacionCowpayRestaurantesIdPageProps = {
  id: string;
};

export function RestauranteDetallePage({ id }: SuperadminOperacionCowpayRestaurantesIdPageProps) {
  return (
    <main className={styles.page}>
      <h1>Ficha administrativa</h1>
      <p>Responsable: Santiago Diaz Palma</p>
      <p>Aquí mostraremos: ficha administrativa</p>
      <p>Identificador: {id}</p>
    </main>
  );
}
