# CowPay

Proyecto de etapa lectiva del SENA.

Vamos a construir el frontend de CowPay a partir de nuestro [diseño en Figma](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=0-1). Esta es nuestra puerta de entrada: primero entendemos qué vamos a hacer, instalamos las herramientas y abrimos el proyecto; después practicamos los componentes y trabajamos en nuestra tarea.

**Entrega final: 7 de diciembre de 2026.** Periodo del sprint: **18 de noviembre al 4 de diciembre de 2026**.

## Cómo vamos a leerlo

- Si acabamos de llegar: seguimos este README desde el principio. La instalación está antes de las explicaciones de carpetas y del trabajo en equipo.
- Yo preparo la base una sola vez, siguiendo [Preparar la base dentro de cowpay](docs/preparar-base.md). Los demás descargamos esa base; no creamos una aplicación diferente por persona.
- Cuando la aplicación abra, seguimos la [guía teórica y práctica](docs/guia-desde-cero.md), desde una página sencilla hasta componentes reutilizables, CSS, imágenes y enlaces.
- Después consultamos nuestra área en el mapa de rutas y tomamos una subtarea de Jira.

### Todos nuestros documentos

| Documento                                                       | Para qué lo abrimos                                                                                                      |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [Este README](README.md)                                        | Empezar, instalar las herramientas y entender cómo vamos a trabajar                                                      |
| [Preparar la base](docs/preparar-base.md)                       | Crear manualmente nuestra única aplicación en la carpeta actual; lo hago yo una vez                                      |
| [Guía teórica y práctica](docs/guia-desde-cero.md)              | Aprender React, Next.js, componentes, CSS y navegación con ejercicios                                                    |
| [Mapa de rutas](docs/rutas.md)                                  | Ver las pantallas, sus direcciones, prioridades y responsables                                                           |
| [Datos y conexión futura](docs/contratos-y-reglas.md)           | Separar las pantallas y los datos de ejemplo para conectarlos al backend después                                         |
| [Plan del equipo](docs/plan-equipo.md)                          | Consultar tareas, subtareas, carpetas, responsables y fechas                                                             |
| [Trabajo colaborativo desde cero](docs/trabajo-colaborativo.md) | Entender Git y GitHub y seguir los pasos de nuestra primera entrega, con un recorrido para mí y otro para los compañeros |
| [Jira y GitHub](docs/jira-y-github.md)                          | Relacionar una tarea con su rama y PR y saber cuándo pasarla a Hecho                                                     |
| [Seguimiento semanal](docs/seguimiento-semanal.md)              | Revisar avances en el SENA y preparar el informe para la instructora                                                     |
| [Registro de tareas de Jira](docs/backlog-jira.json)            | Consultar las claves y el registro de planificación; no es un tutorial ni código de la aplicación                        |
| [Documento original de requisitos](docs/CowPay.pdf)             | Consultar el contexto completo del proyecto; el alcance de esta entrega es el frontend descrito aquí                     |

Los documentos de `docs/` complementan este README. No tenemos que leer toda la planificación para poder cambiar nuestro primer título.

## 1. Qué vamos a hacer primero

El diseño ya está en [Figma](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=0-1). Ahora vamos a pasarlo a código.

Primero vamos a construir el frontend: las pantallas que ve y usa cada persona. Deben verse bien en celular y computador, permitir navegar y responder a las acciones del usuario. Para eso usaremos datos inventados y compartidos por todo el equipo.

Una pantalla no queda lista solamente por verse parecida a Figma. Los enlaces y botones permiten recorrer las pantallas del diseño. Los formularios son visuales: pueden mostrar datos de ejemplo y llevar a la siguiente pantalla. No exigimos validaciones, cálculos, autenticación, envío de pedidos ni pagos reales para esta entrega. Si una función todavía es simulada, debe quedar claro.

## 2. Estado actual del repositorio (17 de noviembre de 2026)

El 17 de noviembre se retiró la base anterior de `apps/web` para empezar con una estructura más sencilla. Ahora están este README y `docs/`; todavía no hay aplicación instalada ni servidor que iniciar.

El historial de Git se conservó. Puede haber carpetas ocultas protegidas que administra el entorno de trabajo; no forman parte de la aplicación.

La estructura y los comandos de instalación de abajo describen el siguiente paso. **Yo preparo la base una sola vez; los demás la descargan.** No necesitamos crear un proyecto Next.js diferente por persona.

Los documentos originales siguen en `docs/`. El roadmap anterior nos sirve de referencia, pero actualizamos nuestras herramientas y fechas en estos documentos. Para esta entrega usamos este README y los documentos enlazados aquí.

## 3. Stack elegido y por qué

| Herramienta            | Qué es y para qué la usamos                                                                                                      |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| HTML                   | La estructura: títulos, formularios, botones, tablas y secciones. Lo escribiremos dentro de componentes.                         |
| CSS y CSS Modules      | Los estilos. Seguimos usando selectores, flexbox, grid y media queries. Cada componente puede tener su propio archivo CSS.       |
| React                  | Permite dividir las pantallas en piezas reutilizables y actualizar lo que se muestra cuando alguien interactúa.                  |
| Next.js con App Router | Organiza páginas y navegación sobre React. También permite escribir código de servidor en la misma aplicación.                   |
| TypeScript             | JavaScript con tipos. Empezaremos por tipos pequeños para platos, pedidos y formularios, sin patrones complicados.               |
| Node.js y pnpm         | Node ejecuta las herramientas y el servidor. pnpm instala las dependencias del proyecto; usaremos la misma versión en el equipo. |
| Git y GitHub           | Guardan el historial y permiten proponer y revisar cambios mediante Pull Requests.                                               |

**Vamos a utilizar CSS para que no se nos complique esta primera entrega.** Ya conocemos sus bases y vamos a seguir practicándolas mientras pasamos el diseño a código. Usaremos CSS Modules para que los estilos de nuestras pantallas no se mezclen. Más adelante, si vemos que nos sirve, podemos empezar a utilizar Tailwind o migrar algunas partes; por ahora nos concentramos en sacar el frontend juntos.

**No usamos Express.** Next.js ya puede resolver las necesidades iniciales de frontend y backend dentro de un proyecto. Separar dos aplicaciones ahora nos añade configuración que el equipo todavía no necesita.

**No instalamos por ahora Zustand, TanStack Query, Socket.IO, Docker ni bibliotecas de componentes.** Empezamos con React, CSS y funciones sencillas. Si aparece una necesidad real, se evalúa y se documenta antes de añadir una dependencia.

Para la siguiente etapa de datos elegimos **PostgreSQL + Prisma**: PostgreSQL guarda información relacionada y Prisma ayuda a consultarla y mantener cambios en su estructura. No se instalan para dibujar pantallas. Antes de crear el login real habrá que escoger una solución de autenticación mantenida que cubra sesiones, roles y recuperación; no vamos a inventar seguridad a partir de una maqueta.

## 4. Qué debemos instalar en Windows

Vamos a usar **Node.js, pnpm, Git y Visual Studio Code**, además del navegador. Node.js ejecuta las herramientas; pnpm instala lo que necesita CowPay; Git guarda los cambios y VS Code es donde escribimos. GitHub y Jira se abren en el navegador: no hace falta instalar sus aplicaciones.

### 1. Node.js

1. Abrimos la [descarga oficial de Node.js](https://nodejs.org/en/download).
2. Seleccionamos **Windows** y el instalador **`.msi`** de la versión recomendada en la página. Para la mayoría de nuestros computadores corresponde **x64**; si el equipo usa ARM, elegimos ARM64.
3. Ejecutamos el instalador y conservamos sus opciones predeterminadas, incluida la instalación de npm y la incorporación al PATH. PATH permite escribir `node` en la terminal sin buscar su carpeta.
4. Cerramos y volvemos a abrir la terminal y comprobamos:

```powershell
node --version
npm --version
```

Deben aparecer números de versión. No necesitamos aprender gestores de versiones para empezar. Al compartir la base voy a registrar aquí las versiones que comprobamos, para que usemos las mismas. Esa comprobación está pendiente; todavía no hemos instalado la base nueva.

### 2. pnpm

npm viene con Node.js. Lo usamos **una vez para instalar pnpm en el computador**, siguiendo la [instalación oficial de pnpm para Windows](https://pnpm.io/installation):

```powershell
npm install --global pnpm
pnpm --version
```

`--global` significa que el comando pnpm queda disponible para nuestros proyectos. Desde este punto usamos **pnpm para las dependencias de CowPay**; no mezclamos `npm install` dentro del proyecto ni generamos `package-lock.json`.

### 3. Git

Descargamos [Git para Windows](https://git-scm.com/install/windows), ejecutamos el instalador y dejamos las opciones predeterminadas. Cerramos y abrimos la terminal y comprobamos:

```powershell
git --version
```

Configuramos una vez el nombre y correo que queremos asociar a nuestros commits, reemplazando estos ejemplos por nuestros datos:

```powershell
git config --global user.name "Nuestro nombre y apellido"
git config --global user.email "nuestro-correo@example.com"
```

### 4. Visual Studio Code y la terminal

Instalamos [Visual Studio Code para Windows](https://code.visualstudio.com/download). Abrimos **Archivo → Abrir carpeta** y seleccionamos `cowpay`. Luego **Terminal → Nueva terminal**. Los comandos se escriben ahí, uno por uno; no dentro de un archivo de código.

Los ejemplos de instalación usan PowerShell. Si aparece un mensaje que bloquea `npm.ps1` o `pnpm.ps1`, podemos usar `npm.cmd` o `pnpm.cmd` con los mismos argumentos, sin cambiar la política de Windows. Si un comando no se reconoce, primero cerramos y volvemos a abrir VS Code tras instalar la herramienta.

## 5. Cómo abrimos CowPay por primera vez

### La base la preparo una sola vez

Ahora no hay `package.json`: el código anterior se retiró. Por eso **todavía no podemos ejecutar `pnpm install` ni `pnpm dev` en esta copia**. Primero voy a seguir [Preparar la base dentro de cowpay](docs/preparar-base.md), subirla y avisar al equipo.

Todo se instalará directamente en nuestra carpeta `cowpay`. No vamos a crear una segunda aplicación al lado ni dentro. La guía explica cada comando y los archivos mínimos que voy a escribir manualmente.

### Cuando la base ya esté compartida, la descargamos

Este paso es para los compañeros: yo, Oscar, ya trabajo con el repositorio principal y no necesito un fork. Si un compañero no tiene una copia local, crea su fork en [GitHub](https://github.com/rx3card/cowpay) y copia su dirección. Desde la carpeta donde guardamos nuestros proyectos:

```powershell
git clone https://github.com/NUESTRO_USUARIO/cowpay.git
cd cowpay
git remote add upstream https://github.com/rx3card/cowpay.git
```

Reemplazamos `NUESTRO_USUARIO` por nuestro usuario de GitHub. La [guía de colaboración](docs/trabajo-colaborativo.md#3-preparación-de-un-compañero-una-sola-vez) explica estos pasos desde cero. `clone` descarga nuestro fork, `cd` entra a la carpeta y `upstream` identifica el repositorio del equipo. Si ya tenemos esa copia, no la clonamos encima ni repetimos `remote add`: seguimos la actualización de `main` que explicamos en la sección de Git.

Dentro de `cowpay`, cuando ya estén `package.json` y `pnpm-lock.yaml`:

```powershell
pnpm install
pnpm dev
```

- `pnpm install` descarga las dependencias. Se hace al descargar el proyecto o cuando cambian sus dependencias; no cada vez que guardamos un archivo.
- `pnpm dev` arranca el servidor de desarrollo. Abrimos la dirección que muestre la terminal, normalmente [http://localhost:3000](http://localhost:3000).
- Dejamos esa terminal abierta mientras trabajamos. Guardamos un cambio y lo miramos en el navegador. Para detener el servidor pulsamos **Ctrl+C**.
- En otra jornada basta abrir la carpeta y ejecutar `pnpm dev`, salvo que tengamos dependencias nuevas por instalar.

**¿Por qué aparecía `--frozen-lockfile`?** Ese parámetro impide modificar `pnpm-lock.yaml` y hace fallar la instalación si no coincide con `package.json`. Es útil en las comprobaciones automáticas de GitHub. Para empezar y trabajar localmente usamos **`pnpm install`**, sin ese parámetro: también utiliza el archivo de versiones y puede actualizarlo si hace falta. Si cambia sin que hayamos añadido una dependencia, revisamos el motivo antes de subirlo. [Referencia de pnpm](https://pnpm.io/cli/install).

### Antes de empezar nuestra parte completa

La documentación nos da el recorrido, pero leerla una vez no sustituye la práctica de React. Primero preparo y comparto la base; después cada uno abre la aplicación, cambia un título, modifica su CSS, reutiliza una tarjeta y sube un PR pequeño siguiendo la guía. Cuando podamos hacerlo y explicarlo, seguimos con nuestra pantalla. Si algo no sale, lo revisamos juntos en el SENA.

La estructura y las rutas documentadas todavía no son archivos programados. Para que todos podamos empezar a desarrollar dentro de CowPay falta terminar y compartir esa base. Mientras tanto podemos instalar las herramientas y practicar HTML/CSS con una pieza pequeña del diseño.

## 6. Una carpeta de proyecto, una aplicación

Nuestra carpeta principal es `cowpay/`. Vamos a tener una sola aplicación ahí. Antes estaba guardada en `apps/web/`; retiramos esa base para simplificar el comienzo. No necesitamos volver a crear `apps/` ni aprender a manejar varias aplicaciones ahora.

Por el momento solo necesitamos reconocer estos lugares:

| Lugar            | Qué vamos a guardar ahí                                               |
| ---------------- | --------------------------------------------------------------------- |
| `src/`           | Nuestro código                                                        |
| `public/`        | Imágenes, logos y multimedia que se pueden mostrar públicamente       |
| `docs/`          | Guías y planificación                                                 |
| `package.json`   | Lista de herramientas y comandos                                      |
| `pnpm-lock.yaml` | Versiones concretas de las herramientas                               |
| `node_modules/`  | Bibliotecas instaladas por pnpm; no escribimos nuestras pantallas ahí |

Al instalar, pnpm crea un `node_modules` en la raíz. Dentro puede aparecer `.pnpm`: es parte de su funcionamiento, no otro proyecto. No tenemos que editarlo ni subirlo a GitHub. La [guía, capítulo 3](docs/guia-desde-cero.md#3-los-archivos-sin-palabras-complicadas), lo explica con un ejemplo.

## 7. Lo que le toca a cada uno

Se conserva el reparto que ya habíamos definido:

| Persona             | Área                                                 | Carpeta de componentes y lógica propia          |
| ------------------- | ---------------------------------------------------- | ----------------------------------------------- |
| Santiago Diaz Palma | Administrador del restaurante y SuperAdmin de CowPay | `src/features/admin/` y `src/features/central/` |
| Oscar Rojas         | Comensal, preparación de la base e integración       | `src/features/comensal/`                        |
| Santiago Evanz      | Personal de cocina y cajero                          | `src/features/cocina/` y `src/features/caja/`   |
| Jehan Useche        | Página pública de CowPay                             | `src/features/publico/`                         |
| Samuel Correa       | Mesero                                               | `src/features/mesero/`                          |

Useche tiene varias páginas públicas y secciones largas. Vamos a reutilizar header, footer y tarjetas, entregar por partes y revisar su carga con el avance real; no asumimos que sus tres tareas sean pequeñas.

El [mapa de rutas](docs/rutas.md) dice qué páginas corresponden a cada persona y enlaza pantallas concretas del Figma. El [plan de tareas](docs/plan-equipo.md) contiene el trabajo dividido para Jira.

Palma tiene dos áreas grandes. Primero entrega el panel, menú, inventario y personal del restaurante, y el listado de solicitudes de Central. Las variantes avanzadas de Central van después. Voy a ayudar a integrar y recortar alcance si el primer control muestra retrasos.

Cada uno hace su interfaz y los enlaces de demostración; botones a otra ruta y datos fijos son suficientes. No tiene que construir un backend propio ni resolver pagos reales para poder entregar su pantalla.

### El Figma no está completo en todas las áreas

Mi área de comensal tiene pantallas y detalles sin terminar. No vamos a exigir que se copie una pantalla que aún no existe. Primero voy a hacer una lista de pantallas disponibles y faltantes, dibujar una versión sencilla de las faltantes y revisarla con el equipo. Puede ser un boceto básico; no necesito dejar perfecto todo el Figma antes de empezar a programar esa parte. La navegación mínima de mesa, menú, carrito, pedido, cuenta y confirmación es la prioridad.

## 8. Dónde vamos a escribir cada cosa

Vamos a separar la dirección de una página de su contenido. Yo preparo el archivo de ruta; cada uno trabaja en las pantallas de su área.

Ejemplo de mesas:

```text
src/app/mesero/mesas/page.tsx             Conecta la URL con la pantalla
src/features/mesero/pages/MesasPage.tsx   Contenido de la pantalla
src/features/mesero/pages/MesasPage.module.css
                                        Estilos de esa pantalla
public/media/mesero/                     Imágenes propias del área
```

Al abrir `/mesero/mesas`, Next.js encuentra el primer archivo y este muestra `MesasPage`. Samuel sigue trabajando en su pantalla y CSS sin tener que modificar la ruta. La [guía, capítulos 6 y 7](docs/guia-desde-cero.md#6-nuestra-pantalla-vive-fuera-de-las-rutas), incluye los tres archivos explicados línea por línea.

**No todas las carpetas son rutas.** `src/features` y `src/components` son carpetas normales de nuestro código. Dentro de `src/app`, una página necesita un archivo especial llamado `page.tsx`. El nombre `app` no significa otra aplicación ni otro `node_modules`.

**Vamos a mantener las rutas de Next.js.** No lo cambiamos por una lista de rutas con React Router. Podemos guardar direcciones para los enlaces en `src/config/routes.ts`, pero ese archivo no reemplaza los `page.tsx`. Empezamos con dos páginas sencillas; los segmentos variables y las agrupaciones los practicamos después.

### Nuestro espacio de trabajo

Cada área tendrá, conforme la necesitemos:

```text
src/features/mesero/
├── pages/          Pantallas completas y su CSS
├── components/     Piezas de esa área y su CSS
└── data/           Datos de ejemplo propios
```

`features` significa áreas del proyecto; su nombre es una convención nuestra. Los componentes que compartimos van en `src/components/ui`. Los colores y tipografía comunes van en `src/app/globals.css`. No vamos a crear todas las carpetas del backend antes de tener nuestra primera pantalla.

Las imágenes van en `public/media/<area>`. Una imagen en `public/media/mesero/mesa.png` se usa como `/media/mesero/mesa.png`. El nombre `public` no forma parte del enlace. El logo compartido va en `public/media/compartido`; no guardamos información privada ahí. La [guía, capítulo 9](docs/guia-desde-cero.md#9-imágenes-logos-y-otros-recursos), trae un ejemplo.

El [mapa de rutas](docs/rutas.md) conserva el reparto completo. Los accesos administrativos acordados son `/gestion-restaurante` y `/operacion-cowpay`, fuera de navegación pública y con `noindex`. Sus nombres no los protegen: la sesión y los permisos se implementan cuando hagamos el backend.

## 9. De HTML y CSS a un componente

Un componente es una función que devuelve la estructura de una pieza de interfaz. Esta estructura se llama JSX y se parece mucho al HTML:

```tsx
// Ejemplo educativo: todavía no es un archivo creado en el proyecto.
import styles from "./RestaurantCard.module.css";

export function RestaurantCard() {
  return (
    <article className={styles.card}>
      <h2>Arepique</h2>
      <p>Comida para compartir en Ibagué.</p>
      <a href="/r/arepique">Ver restaurante</a>
    </article>
  );
}
```

```css
/* RestaurantCard.module.css */
.card {
  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: white;
}
```

En JSX usamos `className` en lugar de `class`, cerramos las etiquetas y usamos llaves para insertar valores de JavaScript. Más adelante pasaremos el nombre y la descripción mediante propiedades para reutilizar la tarjeta.

Una página con estado o eventos de JavaScript puede necesitar `'use client'` al principio. No se añade a todos los archivos por costumbre: se usa en los componentes que necesitan interacción del navegador. Voy a dejar ejemplos pequeños para que nadie tenga que aprender esto a ciegas.

Los colores, espaciados y tipografía salen de Figma y se centralizan en variables de `globals.css`. No vamos a copiar la posición absoluta de cada elemento del dibujo: usaremos flexbox, grid y tamaños adaptables.

## 10. Por qué seguimos con Next.js y cómo haremos el backend después

Next.js sí permite escribir backend. Una página `page.tsx` muestra interfaz; un archivo `route.ts` recibe una petición y puede devolver datos. Las funciones que consultan la base de datos o aplican nuestras reglas las escribimos nosotros en archivos del servidor. Las carpetas indican dónde entra la petición; no escriben el negocio por nosotros.

En Express declararíamos una entrada con `app.get('/api/menu', ...)`. En Next.js podemos escribir `src/app/api/menu/route.ts` y exportar una función `GET`. Cambia la manera de declarar la ruta, no la posibilidad de construir un backend.

Para nuestro plazo elegimos una sola aplicación Next.js y una capa de rutas pequeña. React con Vite + Express también es válido, pero tendríamos que preparar y conectar dos partes además de aprender React. No vamos a cambiar de herramientas antes de entender nuestro primer ejemplo.

Por ahora basta separar la pantalla de sus datos fijos. Más adelante sustituimos el origen de los datos y ajustamos la interfaz al contrato real. No vamos a exigir a cada uno que construya una API simulada para poder maquetar.

La [guía, capítulo 12](docs/guia-desde-cero.md#12-lo-de-las-rutas-no-impide-construir-backend), compara las dos opciones e incluye un ejemplo pequeño de servidor. Es teoría para entender lo que viene, no una tarea de backend de esta entrega.

## 11. Fechas de trabajo

| Fecha                            | Qué debe quedar revisable                                                                                                     |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 17 de noviembre                  | Reparto, rutas documentadas, tareas y decisiones de arquitectura. Voy a iniciar la preparación manual de la base.             |
| 18 de noviembre                  | Inicio del periodo del sprint. Tenemos inglés; no reservamos ese día como bloque de apoyo conmigo.                            |
| 19 de noviembre                  | Objetivo de base mínima y primeras rutas. Mientras la preparo, podemos adelantar HTML/CSS de una pieza pequeña.               |
| 19 y 20 de noviembre             | Cada uno muestra una pantalla principal en progreso mediante Draft PR. Reunión semanal el 20 a las 17:00.                     |
| 23 de noviembre                  | Objetivo de primera pantalla sencilla; el fin de semana no es una obligación de trabajo.                                      |
| 23 al 27 de noviembre            | Completar pantallas esenciales, navegación y formularios. Reunión semanal el 27 a las 17:00.                                  |
| 30 de noviembre y 1 de diciembre | Completar el flujo de cada área y corregir lo revisado. Objetivo interno de módulos: el 1 a las 17:00.                        |
| 2 al 4 de diciembre              | Integrar áreas, revisar en celular y computador y corregir errores. Reunión el 4 a las 17:00 y cierre del sprint a las 17:45. |
| 3 de diciembre                   | Ensayo de demostración presencial, de 17:00 a 17:30, dentro de la jornada.                                                    |
| 5 y 6 de diciembre               | Fin de semana sin trabajo ni disponibilidad de mi parte. No dejamos tareas obligatorias dependiendo de esos días.             |
| 7 de diciembre                   | Entrega final. La hora oficial la confirma el instructor.                                                                     |

Seguimos las fechas exactas del correo de la instructora, aunque allí se describan como aproximadamente dos semanas. El 1 de diciembre es una fecha interna para recibir módulos; el sprint termina el 4. Ensayamos el jueves 3 y cerramos correcciones e informe el viernes 4. Los días 5 y 6 no son jornadas de trabajo para mí. En la reunión del 20 revisamos el avance real y bajamos alcance si hace falta. Nos reunimos presencialmente en el SENA: seguimiento los martes de 15:30 a 16:00 y revisión breve los viernes de 17:00 a 17:15. Los viernes dejamos el registro semanal pedido por la instructora.

**Diario:** cada persona deja en su tarea qué avanzó, qué hará y qué la bloquea. Voy a revisar los PR en el siguiente bloque disponible dentro del SENA; los del miércoles o de después de las 18:00 pasan a mi siguiente jornada de apoyo. Nadie espera al 1 de diciembre para mostrar código.

## 12. Cómo trabajar con Git y GitHub

Vamos a empezar por la [guía de trabajo colaborativo desde cero](docs/trabajo-colaborativo.md). No damos por hecho que ya dominamos Git: explica cada palabra y sigue una entrega completa. La primera vez la leemos en orden; después consultamos la situación en la que estamos.

**Yo, Oscar, trabajo con el repositorio principal `rx3card/cowpay`. Los compañeros trabajan con sus forks.** Por eso no copiamos todos el mismo `git pull` sin mirar a qué repositorio apunta.

| Lo que necesitamos hacer                                     | Dónde está explicado                                                                                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Entender rama, fork, commit, push y PR                       | [Primero entendamos qué compartimos](docs/trabajo-colaborativo.md#1-primero-entendamos-qué-estamos-compartiendo)               |
| Comprobar si estamos en mi copia o en un fork                | [La diferencia entre nuestras copias](docs/trabajo-colaborativo.md#2-oscar-y-los-compañeros-tenemos-una-diferencia-importante) |
| Preparar el fork de un compañero una sola vez                | [Primera descarga y configuración](docs/trabajo-colaborativo.md#3-preparación-de-un-compañero-una-sola-vez)                    |
| Saber qué comprobar antes de descargar cambios               | [Al abrir el proyecto](docs/trabajo-colaborativo.md#4-nuestra-primera-comprobación-cada-vez-que-abrimos-el-proyecto)           |
| Actualizar y crear una rama para una tarea distinta          | [Empezar una tarea nueva](docs/trabajo-colaborativo.md#5-empezar-una-tarea-nueva)                                              |
| Continuar mañana en la misma rama                            | [Continuar la misma tarea](docs/trabajo-colaborativo.md#6-continuar-mañana-con-la-misma-tarea)                                 |
| Guardar y subir el avance                                    | [Commit y push paso a paso](docs/trabajo-colaborativo.md#7-guardar-y-subir-un-avance)                                          |
| Pedir revisión y corregir el mismo PR                        | [Abrir el Pull Request](docs/trabajo-colaborativo.md#8-pedir-revisión-con-un-pull-request)                                     |
| Revisar una pantalla e integrarla; esta parte la coordino yo | [Revisión e integración](docs/trabajo-colaborativo.md#9-cómo-voy-a-revisar-e-integrar-el-trabajo)                              |
| Resolver dudas o detenernos ante un error                    | [Qué hacemos si algo falla](docs/trabajo-colaborativo.md#12-si-algo-falla-qué-hacemos)                                         |

Nuestro recorrido es: **tomamos una subtarea → trabajamos en una rama → guardamos y subimos avances → abrimos PR → revisamos y corregimos → integramos en main → actualizamos nuestras copias**.

No ejecutamos todos los comandos de la guía cada mañana. Primero comprobamos `git status` y guardamos el trabajo pendiente; después elegimos si vamos a continuar la misma tarea o comenzar otra. Una rama se crea para una tarea, no una por día. Un push no equivale a tener el cambio integrado en el proyecto del equipo.

Antes de desarrollar el módulo completo hacemos la [práctica de una primera entrega](docs/trabajo-colaborativo.md#14-una-práctica-antes-de-comenzar-todo-el-módulo): cambio pequeño, PR, corrección, revisión e integración. Así comprobamos que entendimos el recorrido, no solo que copiamos los comandos.

## 13. Reglas para no estorbarnos

Cada uno trabaja en archivos acordados de su área. Las ramas separan nuestro trabajo, pero no evitan por sí solas que dos cambios necesiten la misma línea.

- Antes de editar, anotamos en la tarea qué parte y qué archivos vamos a tocar.
- Yo coordino rutas, configuración, dependencias, estilos globales y componentes compartidos. Si hace falta cambiarlos, acordamos quién lo hará.
- Los estilos propios van junto a la pantalla o componente, en su CSS Module.
- Entregamos cambios pequeños y descargamos los cambios integrados antes de empezar una tarea nueva; si continuamos una tarea abierta, los incorporamos a esa rama según la guía.
- No subimos bibliotecas, resultados de compilación ni secretos. Revisamos lo que seleccionamos para cada commit.
- No forzamos un push ni descartamos archivos para intentar resolver un mensaje que no entendemos.

Si Samuel quiere ayudar a Useche, acordamos una pieza concreta, sus archivos y su responsable en Jira. Cada uno conserva su rama y su PR; no necesitan escribir en el fork del otro. El [ejemplo de ayuda entre compañeros](docs/trabajo-colaborativo.md#10-cómo-podemos-ayudarnos-sin-pisarnos-los-archivos) explica también qué hacer si ambos necesitan modificar la misma pantalla.

Estas son nuestras reglas de trabajo. Las protecciones de `main` y las comprobaciones automáticas se configuran aparte en GitHub; escribirlas aquí no las activa. Mis cambios también necesitan revisión de un compañero.

## 14. Qué significa terminar una tarea

- Tiene el enlace del Figma y la ruta local.
- Se ve en 390 px y en escritorio; no hay desbordamiento horizontal accidental.
- Se puede navegar y usar por teclado; los campos tienen etiquetas.
- Los formularios se ven como en el diseño. No se exige validación ni envío real; el botón puede llevar a otra pantalla con datos de ejemplo.
- Si Figma incluye variantes de vacío, error o carga, se pueden mostrar como pantallas de ejemplo; no hace falta producir errores reales.
- Usa datos compartidos y diferencia una simulación de una acción real.
- Tiene PR con instrucciones y capturas, y está integrado para considerarlo entregado.

Si una página aún no está hecha, debe mostrar su título y que está pendiente. Un enlace que lleva a una página provisional no significa que la función esté terminada.

## 15. Jira: cómo lo vamos a usar

Vamos a usar Jira para organizar nuestro trabajo y GitHub para revisar e integrar el código. Nuestro tablero tiene este recorrido: **Pendiente → En curso → En revisión → Hecho**. Cada persona mantiene una tarea principal en curso.

Cada responsable pasa su subtarea a **En curso** al empezar y a **En revisión** cuando deja un PR listo. Después de revisar y fusionar, yo la paso a **Hecho**. Mis cambios los revisa otro compañero. Esto es un acuerdo, no un permiso restringido ya configurado. Una tarea principal solo se termina al completar y comprobar sus subtareas. El [ejemplo completo de una entrega](docs/jira-y-github.md#ejemplo-completo-de-una-entrega-pequeña) muestra el recorrido con KAN-31.

El [plan del equipo](docs/plan-equipo.md) tiene enlaces a las tareas y subtareas ya creadas, sus responsables, puntos y fechas. Los cinco tenemos el trabajo asignado en Jira.

Según el correo de la instructora, debemos retomar las actividades existentes de Jira, ajustar el desarrollo frontend, agregar tareas y subtareas, asignar responsables y puntos de esfuerzo, y registrar una reunión al finalizar cada semana. No duplicaremos tareas que ya existan.

Cada tarea lleva objetivo, pantalla de Figma, ruta, subtareas, responsable, puntos de esfuerzo y forma de comprobarla. El enlace al PR se pega en la tarea. Para nosotros, “Hecho” significa que revisamos e integramos la pantalla, no solamente que la subimos al fork.

El proyecto de Jira es **CowPay (KAN)** y su [tablero existente](https://rojasricosworkspace-65f8ece0.atlassian.net/jira/software/projects/KAN/boards/1). Los cinco ya tenemos acceso y tareas asignadas en el proyecto. Las 24 tareas y 69 subtareas están creadas y asignadas según el reparto. Si después se incorpora alguien más, primero lo invitamos al proyecto; no alcanza con escribir su nombre en la descripción.

Ya tenemos Backlog, Sprints y estimación por puntos activados. Nuestro sprint **CowPay · Frontend · 18 nov – 4 dic 2026** está activo, con inicio planificado el 18 a las 13:00 y cierre el 4 a las 17:45, hora de Colombia. Incluye 23 tareas principales de desarrollo y seguimiento. La entrega final del 7 está aparte en KAN-24. Los puntos están en el campo de estimación de las tareas principales y detallados en sus subtareas; no los sumamos dos veces.

En [Jira y GitHub](docs/jira-y-github.md) dejamos explicado cómo relacionamos cada subtarea con su rama y PR y cuándo la pasamos a Hecho. Ya instalamos la aplicación en Jira y GitHub con acceso seleccionado solo a `rx3card/cowpay`; falta confirmar la sincronización porque el asistente de Atlassian se queda cargando. Jira registra el estado que dejamos y la actividad conectada; no comprueba automáticamente que una pantalla esté bien.

### Nuestro horario y seguimiento presencial

Estudio de **12:00 a 18:00**. Para dudas, apoyo y revisión del proyecto me tienen en el SENA de **13:00 a 18:00, lunes, martes, jueves y viernes**. Los miércoles tenemos inglés y no cuento con ese bloque para atender el proyecto. Después del SENA no trabajo en CowPay ni contesto consultas del proyecto. Tampoco vamos a dar por hecho trabajo mío en fines de semana.

Esa es mi ventana de disponibilidad, no una promesa de cinco horas seguidas de desarrollo: seguimos teniendo clase. Si alguien más avanza por fuera del SENA, dejamos dudas y PR por escrito para la siguiente jornada; no esperamos respuesta esa noche. Cada uno puede aclarar su disponibilidad sin que asumamos que todo el equipo trabaja por fuera de clase.

- **Martes, 15:30–16:00, en el SENA:** seguimiento de trabajo. En este periodo quedan el 24 de noviembre y el 1 de diciembre. La sesión del 17 no se registra como realizada: ya pasó y no hemos dejado un acta.
- **Viernes, 17:00–17:15, en el SENA:** revisión breve y registro semanal, el 20 y 27 de noviembre y el 4 de diciembre. Así cumplimos el cierre de cada semana que pidió la instructora.
- **Hasta las 18:00:** dejamos el informe y los acuerdos de esa jornada. No programamos reuniones después de esa hora.

Voy a revisar nuestros PR y pantallas dentro de esa disponibilidad. Dejamos avances, dificultades, recomendaciones y acuerdos con responsables. El modelo está en [seguimiento semanal](docs/seguimiento-semanal.md). Las tareas no se cierran porque yo esté conectado de noche: se cierran después de revisar e integrar el trabajo en la jornada acordada.

## 16. Para leer más cuando haga falta

- [Instalar Next.js](https://nextjs.org/docs/app/getting-started/installation).
- [Backend dentro de Next.js: Route Handlers](https://nextjs.org/docs/app/getting-started/route-handlers).
- [CSS y CSS Modules en Next.js](https://nextjs.org/docs/app/getting-started/css).
- [Sesiones y autorización en Next.js](https://nextjs.org/docs/app/guides/authentication).
- [Evitar indexación con noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing).
- [Actualizar un fork](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/syncing-a-fork).
- [Crear tareas en Jira](https://support.atlassian.com/jira-software-cloud/docs/create-and-edit-work-items-in-your-list/).

Si algo no se entiende, lo revisamos con un ejemplo pequeño en el SENA durante el horario de apoyo. No necesitamos aprender todas las herramientas de una vez. Vamos a ir entendiendo qué archivo estamos tocando y cómo comprobar que funciona.

**Acuerdo actualizado:** usamos pnpm en todo el equipo. Dentro de CowPay no ejecutamos `npm install` ni creamos `package-lock.json`. Voy a dejar registrada la versión exacta de pnpm en `packageManager` al preparar la base. `node_modules/.pnpm` es almacenamiento interno normal de pnpm, no otra aplicación.

Date: Tue Nov 17 21:00
