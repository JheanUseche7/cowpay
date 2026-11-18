# Preparar nuestra base dentro de cowpay

[Volver al README](../README.md) · Después seguimos la [guía teórica y práctica](guia-desde-cero.md).

Esta parte la hago yo, Oscar, **una sola vez**. Vamos a instalar Next.js manualmente dentro de nuestra carpeta actual. Los demás descargamos esa base cuando esté compartida y ejecutamos `pnpm install` y `pnpm dev`, como explica el README.

Esta es una guía para escribir los archivos y ejecutar los comandos nosotros. Documentarlos aquí no los instala ni significa que la aplicación esté programada.

## 1. Antes de empezar

Ya debemos tener Node.js, pnpm, Git y VS Code; los pasos para Windows están al principio del [README](../README.md#4-qué-debemos-instalar-en-windows).

Abrimos **la carpeta cowpay existente** en VS Code y luego **Terminal → Nueva terminal**. En PowerShell comprobamos:

```powershell
Get-Location
dir
node --version
pnpm --version
git --version
```

`Get-Location` muestra dónde estamos. `dir` muestra los archivos. Debemos estar en `cowpay`, donde ya están `README.md` y `docs/`. Conservamos ambos y el historial de Git. Si aparecen carpetas ocultas del entorno, no hace falta tocarlas para esta instalación manual.

Antes de modificar, guardamos una copia de los documentos que estemos editando. No vamos a borrar el proyecto otra vez.

## 2. Por qué no creamos otra carpeta

En un comando de terminal, **`.` significa “la carpeta actual”**. Para un proyecto nuevo, `pnpm create next-app@latest . --use-pnpm` pide al generador crear la aplicación ahí mismo. Es distinto de pasarle un nombre de otra carpeta. El generador comprueba el contenido existente y puede detenerse si encuentra archivos incompatibles.

Aquí vamos a seguir un único camino: **la instalación manual que Next.js también admite**. Instalamos los paquetes en `cowpay` y escribimos sus archivos mínimos. Así conservamos nuestros documentos, no copiamos archivos desde una segunda aplicación y entendemos qué vamos añadiendo. No vamos a ejecutar también el generador después de estos pasos. [Instalación manual oficial](https://nextjs.org/docs/app/getting-started/installation#manual-installation).

## 3. Crear la lista de dependencias

Este paso corresponde al estado actual del repositorio: todavía no hay `package.json`. Si ya existe porque la base se preparó, no repetimos la inicialización; seguimos la instalación normal del README.

```powershell
pnpm init
pnpm add next react react-dom
pnpm add -D typescript @types/node @types/react @types/react-dom
```

Los ejecutamos uno a uno, esperando que termine cada comando:

- `init` crea `package.json`, donde guardamos el nombre del proyecto, sus dependencias y sus comandos.
- `add` instala Next.js y React. `react-dom` permite trabajar con la interfaz del navegador.
- `-D` guarda herramientas de desarrollo: TypeScript y los archivos de tipos que le permiten entender Node y React. Los paquetes con `@types/` no son aplicaciones adicionales.

pnpm crea `pnpm-lock.yaml`, que registra las versiones resueltas, y `node_modules/`, que contiene las bibliotecas. Ambos archivos de configuración van en la raíz de `cowpay`; nuestras pantallas no van en `node_modules`.

## 4. Definir nuestros comandos

Abrimos el `package.json` que acaba de crearse. Conservamos sus dependencias y demás campos. Comprobamos que el nombre sea `cowpay`, establecemos `"private": true` y dejamos la propiedad `scripts` así:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
```

Esto es **solo una propiedad del archivo**, no el contenido completo. Si ya hay otra propiedad `scripts`, la reemplazamos en vez de duplicarla. En JSON las propiedades van entre comillas y se separan con comas; no admite comentarios.

- `pnpm dev` ejecuta `next dev`: el servidor mientras programamos.
- `pnpm build` ejecuta `next build`: comprueba y genera la aplicación para publicarla.
- `pnpm start` ejecuta `next start`: sirve una compilación que ya hicimos con `build`. No es el comando de nuestro trabajo diario.

No añadimos aún un comando `lint` que no funcione. ESLint es una herramienta para detectar problemas de código; antes de compartir la base puedo configurarlo y comprobarlo. Hasta que esté instalado y configurado, no pedimos ejecutar `pnpm lint`.

## 5. Escribir los tres archivos mínimos

En el explorador de VS Code creamos `src`, dentro `app` y estos archivos. `.tsx` es la extensión que utilizamos para componentes con TypeScript y JSX; JSX es la estructura parecida a HTML que veremos en la guía siguiente.

```text
cowpay/
├── README.md
├── docs/
├── package.json
├── pnpm-lock.yaml
├── node_modules/
└── src/
    └── app/
        ├── layout.tsx
        ├── page.tsx
        └── globals.css
```

### src/app/layout.tsx

```tsx
import type { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
```

El **layout** es la estructura compartida que envuelve las páginas. `children` es el contenido de la página que Next.js coloca dentro. `ReactNode` describe el tipo de ese contenido. Importamos `globals.css` aquí para que sus estilos básicos lleguen a toda la aplicación.

### src/app/page.tsx

```tsx
export default function HomePage() {
  return (
    <main>
      <h1>CowPay</h1>
      <p>Ya tenemos nuestra base. Ahora vamos a construir las pantallas.</p>
    </main>
  );
}
```

Esta página responde a `/`, la dirección de inicio. Todavía no representa el diseño final: nos permite comprobar que la instalación funciona. Más adelante la ruta mostrará una pantalla de `src/features/publico/pages`, siguiendo la separación que practicamos en la guía.

### src/app/globals.css

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}
```

Es CSS normal. Empezamos con una base mínima; después añadimos los colores, tipografía y tamaños acordados desde Figma. Los estilos específicos de cada pantalla irán en su propio `.module.css`, no todos aquí.

## 6. Abrir la aplicación y preparar las importaciones

En la terminal de `cowpay` ejecutamos:

```powershell
pnpm dev
```

Next.js detecta los archivos TypeScript y prepara su configuración. Cuando termine, abrimos la dirección que muestre la terminal, normalmente `http://localhost:3000`. Debemos ver el título y el párrafo anteriores. Si indica otro puerto, usamos ese.

Aparecerán `tsconfig.json`, `next-env.d.ts` y la carpeta de resultados `.next/`. No son otra aplicación. `tsconfig.json` configura TypeScript; `next-env.d.ts` lo genera Next.js y no lo editamos a mano. `.next/` se vuelve a generar al ejecutar Next.js.

Nuestros ejemplos usan `@/` para referirse a `src/`, evitando importaciones largas. Abrimos `tsconfig.json` y **dentro del objeto `compilerOptions`**, conservando las opciones existentes, añadimos o ajustamos:

```json
"paths": {
  "@/*": ["./src/*"]
}
```

Si ya hay un objeto `paths`, añadimos la entrada sin duplicar la propiedad. `@/features/mesero/pages/MesasPage` significa el archivo dentro de `src/features/mesero/pages`. Esta abreviatura facilita importar archivos; **no define las rutas del navegador**. Al cambiar configuración podemos detener con Ctrl+C y volver a ejecutar `pnpm dev`.

## 7. Preparar Git antes de subir archivos

Creamos `.gitignore` en la raíz. Si ya existe, conservamos sus reglas y añadimos las que falten:

```gitignore
node_modules/
.next/
out/
.env*
!.env.example
*.tsbuildinfo
next-env.d.ts
```

Este archivo le indica a Git qué archivos locales no debemos añadir. `.env.example` podrá contener nombres de variables con valores de ejemplo, nunca claves reales. Subimos `package.json` y `pnpm-lock.yaml`, además de nuestro código y configuración; no subimos las bibliotecas descargadas.

Anotamos las versiones reales con `node --version` y `pnpm --version` en el README. En `package.json` conservamos o añadimos `packageManager` con el formato `pnpm@` seguido del número exacto que comprobamos. No escribimos un número inventado ni dejamos un marcador de ejemplo.

## 8. Comprobar y compartir la base

1. Cambiamos el párrafo de inicio y guardamos: el navegador debe reflejarlo.
2. Detenemos el servidor con Ctrl+C y ejecutamos `pnpm build`. Si falla, leemos y corregimos el error antes de compartir.
3. Ejecutamos `git status` y `git diff` y comprobamos que conservamos el README y `docs/` y que no vamos a subir `node_modules` ni `.next`.
4. Preparo las rutas y carpetas de trabajo acordadas y abro un PR de la base. No damos por programadas todas las pantallas porque exista la estructura.
5. Cuando la base esté revisada e integrada, los demás actualizamos nuestros forks, descargamos y ejecutamos `pnpm install` y `pnpm dev`.

**Terminamos esta guía con una sola aplicación dentro de cowpay.** El siguiente paso es la [guía teórica y práctica](guia-desde-cero.md): entender la primera página, separar su pantalla y CSS y reutilizar componentes. Después elegimos una tarea del [plan del equipo](plan-equipo.md).

## Referencias para consultar

- [Instalación y configuración de Next.js](https://nextjs.org/docs/app/getting-started/installation).
- [Importaciones y alias](https://nextjs.org/docs/app/api-reference/config/typescript#path-aliases-and-baseurl).
- [Qué hace pnpm install](https://pnpm.io/cli/install).
