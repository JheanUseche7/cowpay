import Link from "next/link";

export function MeseroInicioPage() {
  return (
    <main>
      <h1>Inicio del mesero</h1>
      <p>Responsable: Samuel Correa</p>
      <p>Aquí mostraremos el resumen del turno</p>
      <Link href="/mesero/mesas">Ver mesas</Link>
    </main>
  );
}
