import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata = { robots: { index: false, follow: false } };

export default function Page() {
  if (process.env.NODE_ENV !== "development") notFound();

  return (
    <main>
      <h1>Recorridos de prueba de Cowpay</h1>
      <p>
        Aquí revisamos las rutas. Todas las pantallas pendientes están
        identificadas
      </p>
      <section>
        <h2>Sitio público</h2>
        <p>Responsable: Jhean Useche</p>
        <ul>
          <li>
            <Link href="/">/</Link>
          </li>
          <li>
            <Link href="/restaurantes">/restaurantes</Link>
          </li>
          <li>
            <Link href="/r/arepique">/r/[slug]</Link>
          </li>
          <li>
            <Link href="/como-funciona">/como-funciona</Link>
          </li>
          <li>
            <Link href="/para-restaurantes">/para-restaurantes</Link>
          </li>
          <li>
            <Link href="/planes">/planes</Link>
          </li>
          <li>
            <Link href="/demo/solicitar">/demo/solicitar</Link>
          </li>
          <li>
            <Link href="/nosotros">/nosotros</Link>
          </li>
          <li>
            <Link href="/contacto">/contacto</Link>
          </li>
          <li>
            <Link href="/preguntas-frecuentes">/preguntas-frecuentes</Link>
          </li>
          <li>
            <Link href="/legal/terminos">/legal/terminos</Link>
          </li>
          <li>
            <Link href="/legal/privacidad">/legal/privacidad</Link>
          </li>
          <li>
            <Link href="/legal/cookies">/legal/cookies</Link>
          </li>
        </ul>
      </section>
      <section>
        <h2>Comensal</h2>
        <p>Responsable: Oscar Rojas</p>
        <ul>
          <li>
            <Link href="/r/arepique/mesa/AX7K2">/r/[slug]/mesa/[code]</Link>
          </li>
          <li>
            <Link href="/r/arepique/mesa/AX7K2/menu">
              /r/[slug]/mesa/[code]/menu
            </Link>
          </li>
          <li>
            <Link href="/r/arepique/mesa/AX7K2/platos/4">
              /r/[slug]/mesa/[code]/platos/[id]
            </Link>
          </li>
          <li>
            <Link href="/r/arepique/mesa/AX7K2/carrito">
              /r/[slug]/mesa/[code]/carrito
            </Link>
          </li>
          <li>
            <Link href="/r/arepique/mesa/AX7K2/pedido">
              /r/[slug]/mesa/[code]/pedido
            </Link>
          </li>
          <li>
            <Link href="/r/arepique/mesa/AX7K2/cuenta">
              /r/[slug]/mesa/[code]/cuenta
            </Link>
          </li>
          <li>
            <Link href="/r/arepique/mesa/AX7K2/dividir">
              /r/[slug]/mesa/[code]/dividir
            </Link>
          </li>
          <li>
            <Link href="/r/arepique/mesa/AX7K2/pagar">
              /r/[slug]/mesa/[code]/pagar
            </Link>
          </li>
          <li>
            <Link href="/r/arepique/mesa/AX7K2/confirmacion">
              /r/[slug]/mesa/[code]/confirmacion
            </Link>
          </li>
          <li>
            <Link href="/r/arepique/mesa/AX7K2/resena">
              /r/[slug]/mesa/[code]/resena
            </Link>
          </li>
          <li>
            <Link href="/login">/Login</Link>
          </li>
          <li>
            <Link href="/registro">/registro</Link>
          </li>
          <li>
            <Link href="/recuperar">/recuperar</Link>
          </li>
          <li>
            <Link href="/restablecer">/restablecer</Link>
          </li>
          <li>
            <Link href="/comensal">/comensal</Link>
          </li>
          <li>
            <Link href="/comensal/favoritos">/comensal/favoritos</Link>
          </li>
          <li>
            <Link href="/comensal/historial">/comensal/historial</Link>
          </li>
          <li>
            <Link href="/comensal/recibos/4">/comensal/recibos/[id]</Link>
          </li>
          <li>
            <Link href="/comensal/resenas">/comensal/resenas</Link>
          </li>
          <li>
            <Link href="/comensal/ajustes">/comensal/ajustes</Link>
          </li>
        </ul>
      </section>
      <section>
        <h2>Mesero</h2>
        <p>Responsable: Samuel Correa</p>
        <ul>
          <li>
            <Link href="/mesero/entrar">/mesero/entrar</Link>
          </li>
          <li>
            <Link href="/mesero">/mesero</Link>
          </li>
          <li>
            <Link href="/mesero/mesas">/mesero/mesas</Link>
          </li>
          <li>
            <Link href="/mesero/mesas/4">/mesero/mesas/[id]</Link>
          </li>
          <li>
            <Link href="/mesero/mesas/4/pedido">/mesero/mesas/[id]/pedido</Link>
          </li>
          <li>
            <Link href="/mesero/pedidos">/mesero/pedidos</Link>
          </li>
          <li>
            <Link href="/mesero/mesas/4/cuenta">/mesero/mesas/[id]/cuenta</Link>
          </li>
          <li>
            <Link href="/mesero/mesas/4/cobrar">/mesero/mesas/[id]/cobrar</Link>
          </li>
          <li>
            <Link href="/mesero/recuperar">/mesero/recuperar</Link>
          </li>
          <li>
            <Link href="/mesero/historial">/mesero/historial</Link>
          </li>
          <li>
            <Link href="/mesero/perfil">/mesero/perfil</Link>
          </li>
        </ul>
      </section>
      <section>
        <h2>Cocina</h2>
        <p>Responsable: Santiago Evanz</p>
        <ul>
          <li>
            <Link href="/cocina/login">/cocina/login</Link>
          </li>
          <li>
            <Link href="/cocina">/cocina</Link>
          </li>
          <li>
            <Link href="/cocina/historial">/cocina/historial</Link>
          </li>
          <li>
            <Link href="/cocina/menu">/cocina/menu</Link>
          </li>
          <li>
            <Link href="/cocina/turno">/cocina/turno</Link>
          </li>
          <li>
            <Link href="/cocina/perfil">/cocina/perfil</Link>
          </li>
          <li>
            <Link href="/cocina/recuperar">/cocina/recuperar</Link>
          </li>
        </ul>
      </section>
      <section>
        <h2>Caja</h2>
        <p>Responsable: Santiago Evanz</p>
        <ul>
          <li>
            <Link href="/caja/entrar">/caja/entrar</Link>
          </li>
          <li>
            <Link href="/caja/abrir">/caja/abrir</Link>
          </li>
          <li>
            <Link href="/caja">/caja</Link>
          </li>
          <li>
            <Link href="/caja/cuentas">/caja/cuentas</Link>
          </li>
          <li>
            <Link href="/caja/cuentas/4">/caja/cuentas/[id]</Link>
          </li>
          <li>
            <Link href="/caja/historial">/caja/historial</Link>
          </li>
          <li>
            <Link href="/caja/turno">/caja/turno</Link>
          </li>
          <li>
            <Link href="/caja/perfil">/caja/perfil</Link>
          </li>
          <li>
            <Link href="/caja/recuperar">/caja/recuperar</Link>
          </li>
        </ul>
      </section>
      <section>
        <h2>Administrador del restaurante</h2>
        <p>Responsable: Santiago Diaz Palma</p>
        <ul>
          <li>
            <Link href="/admin/entrar">/admin/entrar</Link>
          </li>
          <li>
            <Link href="/admin">/admin</Link>
          </li>
          <li>
            <Link href="/admin/menu">/admin/menu</Link>
          </li>
          <li>
            <Link href="/admin/inventario">/admin/inventario</Link>
          </li>
          <li>
            <Link href="/admin/personal">/admin/personal</Link>
          </li>
          <li>
            <Link href="/admin/reportes">/admin/reportes</Link>
          </li>
          <li>
            <Link href="/admin/perfil">/admin/perfil</Link>
          </li>
          <li>
            <Link href="/admin/recuperar">/admin/recuperar</Link>
          </li>
          <li>
            <Link href="/admin/verificar">/admin/verificar</Link>
          </li>
        </ul>
      </section>
      <section>
        <h2>Superadmin de Cowpay</h2>
        <p>Responsable: Santiago Diaz Palma</p>
        <ul>
          <li>
            <Link href="/superadmin/entrar">/superadmin/entrar</Link>
          </li>
          <li>
            <Link href="/superadmin">/superadmin</Link>
          </li>
          <li>
            <Link href="/superadmin/solicitudes">/superadmin/solicitudes</Link>
          </li>
          <li>
            <Link href="/superadmin/solicitudes/4">
              /superadmin/solicitudes/[id]
            </Link>
          </li>
          <li>
            <Link href="/superadmin/restaurantes">
              /superadmin/restaurantes
            </Link>
          </li>
          <li>
            <Link href="/superadmin/restaurantes/4">
              /superadmin/restaurantes/[id]
            </Link>
          </li>
          <li>
            <Link href="/superadmin/verificar">/superadmin/verificar</Link>
          </li>
          <li>
            <Link href="/superadmin/recuperar">/superadmin/recuperar</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
