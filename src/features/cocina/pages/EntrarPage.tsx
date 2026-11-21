import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock,
  Info,
  LockKeyhole,
  TriangleAlert,
  User,
} from "lucide-react";
import styles from "../styles/EntrarPage.module.css";

export function EntrarPage() {
  return (
    <main className={styles.page}>
      <section className={styles.presentacion}>
        <Image
          src="/media/compartido/logo-cowpay-removebg.png"
          alt="Cowpay"
          width={953}
          height={262}
          loading="eager"
          className={styles.logo}
        />

        <div className={styles.mensaje}>
          <h1>Personal de cocina</h1>
          <p>
            Los pedidos entran aquí apenas el comensal los envía desde la mesa.
            Nada de papeles ni de gritar la comanda.
          </p>
          <ul className={styles.beneficios}>
            <li>
              <Clock size={16} aria-hidden="true" />
              Ves el tiempo que lleva cada pedido
            </li>
            <li>
              <TriangleAlert size={16} aria-hidden="true" />
              Las observaciones de la mesa llegan resaltadas
            </li>
            <li>
              <Check size={16} aria-hidden="true" />
              Marcas listo y el mesero recibe el aviso
            </li>
          </ul>
        </div>

        <p className={styles.pie}>CowPay</p>
      </section>

      <section className={styles.acceso}>
        <div className={styles.contenido}>
          <h2>Ingresar como cocina</h2>
          <p className={styles.subtitulo}>
            Usa las credenciales que te dio el administrador del restaurante.
          </p>

          <form className={styles.formulario}>
            <div className={styles.campo}>
              <label htmlFor="usuario">Usuario</label>
              <div className={styles.entradaConIcono}>
                <User size={18} aria-hidden="true" />
                <input
                  id="usuario"
                  name="usuario"
                  autoComplete="username"
                  placeholder="cocina.arepique"
                />
              </div>
            </div>

            <div className={styles.campo}>
              <div className={styles.etiquetaConEnlace}>
                <label htmlFor="contrasena">Contraseña</label>
                <Link href="/cocina/recuperar" className={styles.recuperar}>
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className={styles.entradaConIcono}>
                <LockKeyhole size={18} aria-hidden="true" />
                <input
                  id="contrasena"
                  name="contrasena"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Escribe tu contraseña"
                />
              </div>
            </div>

            <label className={styles.recordar}>
              <input type="checkbox" name="mantenerSesion" defaultChecked />
              Mantener la sesión abierta en esta pantalla
            </label>

            {/* Demostración: entra al tablero sin validar credenciales. */}
            <Link href="/cocina" className={styles.botonEntrar}>
              <ArrowRight size={18} aria-hidden="true" />
              Iniciar sesión
            </Link>
          </form>

          <p className={styles.aviso}>
            <Info size={16} aria-hidden="true" />
            Si olvidaste tu clave, pídele el cambio al administrador del
            restaurante. Por seguridad, cocina no puede restablecerla sola.
          </p>
        </div>
      </section>
    </main>
  );
}
