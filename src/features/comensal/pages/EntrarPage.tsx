import styles from "../styles/EntrarPage.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  QrCode,
  Split,
  ShieldCheck,
  ArrowLeft,
  Mail,
  LockKeyhole,
  Info,
} from "lucide-react";
import { GoogleIcon } from "../../../components/ui/GoogleIcon";

export function EntrarPage() {
  return (
    <main className={styles.page}>
      <section className={styles.presentacion}>
        <Link href="/" className={styles.volver}>
          <ArrowLeft size={16} aria-hidden="true" strokeWidth={3} />
          Volver
        </Link>
        <Image
          src="/media/compartido/logo-cowpay-removebg.png"
          alt="Cowpay"
          width={953}
          height={262}
          loading="eager"
          className={styles.logo}
        />
        <h1 className={styles.ocultarParaMovil}>
          Pide, divide la cuenta y paga desde tu mesa.
        </h1>
        <p>
          Cowpay conecta a los comensales con el restaurante sin filas, sin
          esperar la cuenta y sin discutir quién pidió qué.
        </p>
        <ul className={styles.beneficios}>
          <li>
            <span className={styles.iconoBeneficio}>
              <QrCode size={20} aria-hidden="true" />
            </span>
            <div>
              <h2>Pide desde tu mesa</h2>
              <p>Escaneas el QR, ves el menú y pides sin esperar al mesero.</p>
            </div>
          </li>
          <li>
            <span className={styles.iconoBeneficio}>
              <Split size={20} aria-hidden="true" />
            </span>
            <div>
              <h2>Divide la cuenta sin pelear</h2>
              <p>
                Cada quien paga lo que consumió. Las partes cuadran al peso.
              </p>
            </div>
          </li>
          <li>
            <span className={styles.iconoBeneficio}>
              <ShieldCheck size={20} aria-hidden="true" />
            </span>
            <div>
              <h2>Tu reseña es anónima</h2>
              <p>Solo puedes reseñar donde de verdad consumiste y pagaste.</p>
            </div>
          </li>
        </ul>
      </section>
      <section className={styles.acceso}>
        <div className={styles.contenido}>
          <h2>¡Bienvenido de vuelta!</h2>
          <p>Entra para ver tus favoritos, tu historial y tus reseñas.</p>
          <form className={styles.formulario}>
            <div className={styles.campo}>
              <label htmlFor="correo">Correo electrónico</label>
              <div className={styles.entradaConIcono}>
                <Mail size={18} aria-hidden="true" />
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  autoComplete="email"
                  placeholder="tuemail@tudominio.com"
                />
              </div>
            </div>
            <div className={styles.campo}>
              <label htmlFor="contraseña">Contraseña</label>
              <div className={styles.entradaConIcono}>
                <LockKeyhole size={18} aria-hidden="true" />
                <input
                  id="contraseña"
                  name="contraseña"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Escribe tu contraseña"
                />
              </div>
            </div>
            <div className={styles.opciones}>
              <label className={styles.recordarme}>
                <input type="checkbox" name="recordarme" />
                <span>Recordarme</span>
              </label>
              <Link href="/recuperar" className={styles.recuperar}>
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <button type="button" className={styles.botonEntrar}>
              Entrar
            </button>
          </form>
          <div className={styles.separador}>
            <span>o</span>
          </div>
          <button type="button" className={styles.botonGoogle}>
            <GoogleIcon />
            Continuar con Google
          </button>
          <p className={styles.crearCuenta}>
            ¿No tienes cuenta? <Link href="/registro">Crear cuenta gratis</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
