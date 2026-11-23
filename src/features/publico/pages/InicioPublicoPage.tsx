import { ArrowRight, Search } from "lucide-react";
import styles from "../styles/InicioPublicoPage.module.css";

export function InicioPublicoPage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.textoHero}>
          <h1>
            El pago de tu mesa,
            <br />
            <span className={styles.verde}>sin esperar la cuenta.</span>
          </h1>

          <p>
            Escanea el QR de tu mesa, pide desde tu celular, divide la cuenta
            con quien quieras y paga. Sin filas, sin llamar al mesero tres
            veces, sin discutir quién pidió qué.
          </p>

          <div className={styles.botones}>
            <button className={styles.primario}>
              <ArrowRight size={18} />
              Crear cuenta gratis
            </button>
            <button className={styles.secundario}>
              <Search size={18} />
              Ver restaurantes
            </button>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>+120</strong>
              <span>Restaurantes aliados</span>
            </div>
            <div className={styles.stat}>
              <strong>4,8</strong>
              <span>Calificación promedio</span>
            </div>
            <div className={styles.stat}>
              <strong className={styles.verde}>-40%</strong>
              <span>Tiempo de espera</span>
            </div>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img
            src="/media/publico/inicio1.png"
            alt="Dos personas pagando con CowPay desde el celular"
            className={styles.imagen}
          />
        </div>
      </section>

      <section className={styles.comoFunciona}>
        <span className={styles.etiqueta}>CÓMO FUNCIONA</span>
        <h2>Tres pasos y ya estás comiendo</h2>
        <p className={styles.subtitulo}>
          Sin descargar nada. El QR de la mesa abre CowPay en tu navegador o
          aplicación móvil y desde ahí haces todo.
        </p>

        <div className={styles.pasos}>
          <div className={styles.paso}>
            <div className={styles.pasoTitulo}>
              <span className={styles.numero}>1</span>
              <h3>Escanea el QR</h3>
            </div>
            <p>
              Cada mesa tiene su propio código. Al escanearlo, CowPay ya sabe en
              qué restaurante estás y en qué mesa te sentaste. No tienes que
              escribir nada.
            </p>
          </div>

          <div className={styles.paso}>
            <div className={styles.pasoTitulo}>
              <span className={styles.numero}>2</span>
              <h3>Pide y disfruta</h3>
            </div>
            <p>
              Ves el menú con fotos, precios y lo que está agotado hoy. Escoges
              y el pedido entra directo a la cocina.
            </p>
          </div>

          <div className={styles.paso}>
            <div className={styles.pasoTitulo}>
              <span className={styles.numero}>3</span>
              <h3>Paga o divide</h3>
            </div>
            <p>
              Cuando terminen, cada quien paga lo que consumió, en partes
              iguales o por el monto que definan.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.paracomensales}>
        <span className={styles.para}>PARA COMENSALES</span>
        <h2> Lo que puedes hacer con tu cuenta</h2>
        <p>Pedir no necesita cuenta. La cuenta te sirve para lo que pasa antes y después de la mesa.</p>


        <div className={styles.comensales}>
         <div className={styles.dividirsinpelear}>
           <div className={styles.dividir}>
             <h3>Divide sin pelear</h3>
             <p>Por consumo, en partes iguales, por porcentaje o monto manual. Las partes siempre suman exactamente el total de la mesa.</p>
           </div>
         </div>

         <div className={styles.reseñasvalen}>
           <div className={styles.reseñassi}>
             <h3>Divide sin pelear</h3>
             <p>Solo puede reseñar quien consumió y pagó allí. Se publican anónimas, así que nadie se siente vigilado.</p>
           </div>
         </div>

         <div className={styles.todohistorial}>
           <div className={styles.historial}>
             <h3>Todo tu historial</h3>
             <p>Cada visita queda con su recibo descargable, lo que pediste y cuánto pagaste. Útil cuando toca reportar gastos.</p>
           </div>
         </div>
         
        </div>


      </section>
    </main>
  );
}