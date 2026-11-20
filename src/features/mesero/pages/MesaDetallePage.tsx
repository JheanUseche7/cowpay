import Link from "next/link";

type MesaDetallePage = {
  mesaId: string;
};

export function MesaDetallePage({ mesaId }: MesaDetallePage) {
  return (
    <main>
      <h1>Detalle de la mesa {mesaId}</h1>
      <p>Responsable: Samuel Correa</p>
      <p>Aquí mostraremos los datos y las acciones de esta mesa.</p>
      <Link href="/mesero/mesas">Volver al listado de mesas</Link>
    </main>
  );
}
