# Practiquemos antes de desarrollar nuestra parte

[Volver al README](../README.md) · [Teoría y ejemplos](guia-desde-cero.md) · [Git y GitHub paso a paso](trabajo-colaborativo.md).

Vamos a hacer estas prácticas en orden, sin intentar terminar todas de una vez. La idea es que podamos explicar lo que escribimos y comprobar el resultado. No vamos a exigir que aprendamos React solo leyendo: primero construimos algo pequeño y después lo utilizamos en nuestra pantalla.

**Los ejercicios son instrucciones, no archivos de aplicación ya creados.** Cada uno escribirá sus archivos. La parte de HTML/CSS se puede empezar antes de compartir la base; la de React requiere tener nuestra base de Next.js funcionando.

## 1. Dónde vamos a practicar

Usaremos carpetas propias dentro de CowPay. No instalamos un segundo proyecto ni otro `node_modules`.

Elegimos uno de estos nombres, sin espacios ni tildes:

| Persona | Nombre de carpeta |
| --- | --- |
| Yo, Oscar | `oscar` |
| Useche | `useche` |
| Samuel | `samuel` |
| Santiago Evanz | `evanz` |
| Santiago Diaz Palma | `palma` |

Por ejemplo, mi primera práctica será:

```text
cowpay/
└── practicas/
    └── oscar/
        ├── index.html
        ├── estilos.css
        └── notas.md
```

Cada compañero sustituye `oscar` por su carpeta. Estas carpetas las vamos creando nosotros; no están preparadas por escribir este esquema. `practicas/` queda fuera de `src/app`, así que no crea rutas en Next.js.

En `notas.md` anotamos qué entendimos, qué probamos y qué duda nos quedó. No copiamos datos personales ni contraseñas.

**English:** practice = práctica; file = archivo; folder = carpeta; preview = vista previa.

## 2. Antes de escribir: preparar nuestra rama

Esta práctica se hace después de integrar el avance actual y tener el repositorio compartido. No cambiamos de rama ahora con archivos pendientes por intentar seguirla toda de una vez.

Seguimos la [preparación de una tarea nueva](trabajo-colaborativo.md#5-empezar-una-tarea-nueva): comprobamos `git status`, guardamos lo pendiente y actualizamos `main` desde el repositorio del equipo. Yo uso `origin`; los compañeros usan `upstream`, como explica esa guía.

Después creamos nuestra rama. En mi caso:

```bash
git switch -c practica/oscar-tarjetas
```

`switch` cambia de rama; `-c` pide crearla. `practica/oscar-tarjetas` es el nombre de la rama, no una carpeta. Cada uno utiliza su nombre. No necesitamos una rama nueva por cada ejercicio: continuamos la práctica en la misma hasta cerrar su PR.

## 3. Ejercicio de HTML: una tarjeta de restaurante

En nuestro `index.html` vamos a escribir un documento HTML completo y una tarjeta que contenga:

- Nombre de un restaurante inventado.
- Descripción corta.
- Tipo de comida.
- Un enlace que lleve a una sección de información dentro del mismo documento.

Usamos etiquetas con significado: `main` para el contenido principal, `article` para la tarjeta, un encabezado para su nombre y párrafos para el texto. Conectamos `estilos.css` mediante un elemento `link`.

Abrimos `index.html` con el navegador. No necesitamos instalar extensiones para este ejercicio.

**Comprobación:** podemos ver el contenido y pulsar el enlace para llegar a la sección correcta. Si el CSS todavía no existe, la estructura debe seguir siendo comprensible.

**Preguntas:** ¿qué parte es estructura y cuál será presentación? ¿Qué relación hay entre el `href` del enlace y el `id` de la sección?

**English:** heading = encabezado; link = enlace; restaurant = restaurante.

## 4. Ejercicio de CSS: medir una caja de verdad

A la tarjeta le ponemos una clase propia y estas medidas:

```css
.tarjeta {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
  box-sizing: content-box;
}
```

Primero hacemos la cuenta antes de mirar el navegador:

```text
Contenido:                         200px
Relleno izquierdo + derecho: 20 + 20 = 40px
Borde izquierdo + derecho:    2 + 2 = 4px
Ancho hasta el exterior del borde: 244px
Márgenes horizontales:        10 + 10 = 20px
Espacio horizontal de este ejemplo: 264px
```

El margen queda fuera de la caja y su distribución puede depender del contexto de la página; aquí usamos márgenes horizontales fijos para comparar.

Ahora cambiamos solo:

```css
box-sizing: border-box;
```

Calculamos de nuevo:

```text
Ancho hasta el exterior del borde: 200px
Espacio de contenido: 200 - 40 - 4 = 156px
Con los márgenes horizontales: 200 + 20 = 220px
```

Abrimos las herramientas de desarrollo del navegador, inspeccionamos la tarjeta y buscamos el diagrama del modelo de caja. Comparamos contenido, padding y border con nuestras cuentas. No confundimos el ancho de contenido con el ancho hasta el exterior del borde.

**Reto:** repetimos con `width: 300px`, `padding: 16px` y borde de `3px`. Anotamos ambos resultados en `notas.md` antes de comprobarlos. Después añadimos `max-width: 100%` y revisamos qué sucede en una ventana estrecha.

**English:** box = caja; width = ancho; padding = relleno interior; border = borde; margin = margen exterior.

## 5. Ejercicio de diseño adaptable

Duplicamos nuestra tarjeta para mostrar tres restaurantes. Utilizamos grid o flexbox para organizarlas. En una ventana estrecha deben quedar legibles y no provocar desplazamiento horizontal accidental.

No buscamos reproducir todo Figma en esta práctica. Probamos una fila en escritorio y una columna en celular, leyendo qué regla de CSS cambia cada resultado.

**Comprobación:** cambiamos el tamaño del navegador y explicamos qué hace la regla adaptable. No confundimos una tarjeta cortada o fuera de pantalla con una tarjeta terminada.

## 6. Pasar nuestra tarjeta a React

A partir de aquí necesitamos que la base de Next.js esté compartida y arranque con `pnpm dev`.

Yo prepararé o revisaré el acceso de práctica de cada uno. Mi ejemplo será `/practica/oscar`, conectado mediante:

```text
src/app/practica/oscar/page.tsx
```

El contenido del ejercicio estará separado:

```text
src/features/practicas/oscar/
├── TarjetaRestaurante.tsx
├── TarjetaRestaurante.module.css
└── PracticaPage.tsx
```

Los compañeros utilizan sus nombres. No editamos todos la misma página. Estas rutas son para aprender en local y no forman parte de las pantallas públicas prometidas para la entrega.

Vamos a trasladar una tarjeta del HTML a `TarjetaRestaurante.tsx` y sus estilos al CSS Module. Podemos consultar el [ejemplo de pantalla y CSS](guia-desde-cero.md#6-nuestra-pantalla-vive-fuera-de-las-rutas).

**Cambios que debemos explicar:**

- La función devuelve JSX mediante `return`.
- Usamos `className` en lugar de `class`.
- Importamos el CSS Module y usamos su clase mediante `styles`.
- Importamos el componente en la pantalla y lo utilizamos con un nombre que empieza con mayúscula.

**Comprobación:** la tarjeta se ve al abrir nuestra ruta. Cambiamos un título, guardamos y observamos la actualización. No abrimos el `.tsx` directamente como un HTML: lo sirve Next.js.

**English:** component = componente; return = devolver; import = importar; export = exportar.

## 7. Reutilizar sin copiar tres veces el componente

Primero mostramos nuestra tarjeta con un nombre fijo. Después hacemos que reciba dos propiedades: nombre y descripción.

Las **props** son los datos que recibe un componente. `string` indica texto. Por ejemplo, el nombre que recibimos será texto; no necesitamos aprender todos los tipos de TypeScript para esta práctica.

Utilizamos el mismo componente tres veces con datos distintos. Después guardamos esos datos en un arreglo y usamos `map`, siguiendo el [ejercicio de tarjetas reutilizables](guia-desde-cero.md#10-reutilizamos-una-tarjeta-sin-copiarla-cinco-veces).

**Comprobación:** al cambiar el estilo del componente cambian las tres tarjetas. Al cambiar el nombre de un restaurante solo cambia esa tarjeta. Al añadir un dato al arreglo aparece otra tarjeta sin copiar su estructura completa.

**Preguntas:** ¿qué parte se reutiliza? ¿Dónde están los datos? ¿Para qué utiliza React una `key` estable en una lista?

**English:** properties = propiedades; props es su abreviatura; string = cadena de texto; key = clave.

## 8. Comprender children antes de usarlo por costumbre

Creamos un componente de práctica llamado `MiCaja` y pasamos dentro un título y un párrafo:

```tsx
<MiCaja>
  <h2>Restaurante de prueba</h2>
  <p>Este contenido lo recibe MiCaja.</p>
</MiCaja>
```

`MiCaja` puede devolver una sección con el contenido recibido:

```tsx
import type { ReactNode } from "react";

export function MiCaja({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
```

`children` contiene lo que escribimos entre la apertura y cierre del componente. `ReactNode` describe el tipo de ese contenido para TypeScript; no es el contenido mismo ni una función que busca archivos.

**No aparecen dos etiquetas HTML, `MiCaja` y `section`.** `MiCaja` es nuestro componente; React lo utiliza para obtener la sección que devuelve. En este ejemplo, al inspeccionar el HTML veremos una `section` con el título y el párrafo. La herramienta de componentes de React puede mostrar el nombre del componente, que es otra vista distinta del HTML.

**Prueba:** dentro de `MiCaja` sustituimos el título y párrafo por otro contenido. Después quitamos temporalmente `{children}` de su `return` y observamos que el contenido deja de aparecer. Lo restauramos y explicamos por qué vuelve. No quitamos `children` del layout principal para hacer este experimento.

En Next.js, el archivo `layout.tsx` no busca ni importa `page.tsx` por su cuenta: **Next.js reconoce esos nombres especiales, resuelve la ruta y conecta la página con su layout**, pasándole el contenido a través de `children`. Practicamos primero la caja para entender esa pieza y luego volvemos al layout.

**English:** children = hijos; parent = padre o elemento que contiene a otros; layout = estructura o disposición.

## 9. Practicar una entrega y una corrección

Cada uno abre un PR con su carpeta y ruta de práctica, como explica la [guía de colaboración](trabajo-colaborativo.md). Indicamos que es una práctica y no una pantalla final. No usamos una clave KAN de otra tarea para que parezca una entrega real: si registramos esta práctica en Jira, acordamos su actividad primero.

En el PR dejamos:

- Qué ejercicio hicimos y qué aprendimos.
- Nuestra ruta local y cómo abrirla.
- Captura estrecha y de escritorio.
- Una pregunta concreta que todavía tengamos.

Un compañero pide una corrección pequeña, por ejemplo ajustar el espacio de una tarjeta. La hacemos en la misma rama, guardamos otro commit y lo subimos. Comprobamos que el PR se actualiza sin abrir uno nuevo.

Después de revisar e integrar, otro compañero actualiza su copia y comprueba que puede ver la práctica. Así recorremos el ciclo completo, no solo el push.

Los comandos los ejecutamos nosotros: leemos su explicación en la guía, comprobamos la rama y revisamos los archivos seleccionados. Si usamos `git add .`, lo hacemos desde la raíz de CowPay y revisamos `git status` y `git diff --staged` antes del commit. El punto selecciona los cambios bajo la carpeta actual, incluidas eliminaciones, salvo archivos ignorados que no se siguen; no significa «solo mi ejercicio».

## 10. Qué necesitamos poder explicar al terminar

- Dónde está nuestro código y en qué rama trabajamos.
- Qué diferencia hay entre HTML, JSX y un componente.
- Cómo se calcula el ancho con ambos valores de `box-sizing`.
- Cómo llegan los datos mediante props y cómo reutilizamos una tarjeta.
- Qué contiene `children` y para qué sirve `ReactNode`.
- Cómo llegan la página y su contenido al layout por la organización de Next.js.
- Qué guardamos con un commit, qué subimos con push y qué incorporamos al fusionar el PR.

No es un examen para memorizar palabras. Si una parte no se entiende, repetimos el ejercicio y la revisamos en el SENA. Después tomamos una pieza pequeña de nuestra pantalla en el [mapa de rutas](rutas.md) y aplicamos lo aprendido.
