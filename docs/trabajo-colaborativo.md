# Cómo vamos a trabajar juntos con Git y GitHub

[Volver al README](../README.md) · [Tareas y estados de Jira](jira-y-github.md).

Vamos a leer esta guía en orden la primera vez. Después consultamos el apartado que corresponda: **empezar una tarea nueva**, **continuar la misma tarea** o **entregar para revisión**. No ejecutamos todos los comandos de la guía de una vez.

Los ejemplos de pantallas corresponden a la base que vamos a preparar. Si todavía no está compartida o no existen esas carpetas, podemos entender el recorrido, pero no damos por instalados ni programados esos archivos. Los comandos de Git se escriben en la terminal de VS Code, dentro de la carpeta `cowpay`. Si una terminal está ocupada con `pnpm dev`, abrimos otra para Git.

## 1. Primero entendamos qué estamos compartiendo

Tenemos un repositorio principal: **[rx3card/cowpay](https://github.com/rx3card/cowpay)**. Ahí reunimos el trabajo revisado de todos. Yo, Oscar, trabajo directamente con ese repositorio. Los compañeros tienen cada uno un **fork**, una copia del repositorio dentro de su cuenta de GitHub.

También tenemos una copia en cada computador: la carpeta que abrimos en VS Code. Editar ahí no cambia automáticamente GitHub ni el computador de otra persona.

Por ejemplo, si Useche cambia el título del inicio:

1. Primero el cambio solo está en su computador.
2. Lo guarda como una versión de Git: un **commit**.
3. Lo sube a una rama de su fork: un **push**.
4. Abre una propuesta para incorporar ese trabajo al repositorio del equipo: un **Pull Request**, abreviado **PR**.
5. Revisamos y juntamos el cambio con `main`: una **fusión** o **merge**.
6. Después los demás descargamos el resultado para verlo en nuestras copias.

**Subir un cambio al fork no lo entrega automáticamente al proyecto del equipo.** También necesitamos el PR, la revisión y la integración.

### Las palabras que vamos a usar

| Palabra | Qué significa en nuestro trabajo |
| --- | --- |
| Repositorio | Los archivos del proyecto y su historial de cambios |
| Git | La herramienta que guarda y reúne versiones en nuestro computador |
| GitHub | La página donde alojamos los repositorios y revisamos los PR |
| Fork | La copia del proyecto en la cuenta de un compañero en GitHub |
| Clonar | Descargar un repositorio por primera vez al computador, con su historial |
| Rama | Una línea de trabajo para una tarea; no es una segunda carpeta |
| `main` | La rama donde integramos los cambios revisados del equipo |
| Commit | Una versión local de los archivos que seleccionamos, acompañada de un mensaje |
| Push | Subir commits desde el computador hacia GitHub |
| Fetch | Descargar información y commits nuevos sin mezclarlos todavía con nuestra rama |
| Merge | Incorporar los cambios de otra rama a la rama donde estamos |
| Pull | Descargar e incorporar cambios; por eso importa desde dónde y en qué rama lo hacemos |
| PR | Una propuesta de cambios en GitHub, con conversación y revisión |
| Conflicto | Git necesita que decidamos cómo combinar cambios que no pudo reunir automáticamente |

Una rama no copia todo el proyecto a otra carpeta visible. Seguimos abriendo `cowpay`, pero Git muestra los archivos correspondientes a la rama elegida. Por eso **no cambiamos de rama con trabajo sin guardar**.

### Cuatro cosas distintas que no debemos confundir

- **Ctrl+S:** guarda un archivo en el computador.
- **Commit:** registra una versión en el historial local de Git.
- **Push:** sube esa versión a GitHub.
- **Merge del PR:** incorpora la propuesta en `main` del equipo.

Necesitamos estos pasos por separado. Hacer Ctrl+S no envía el trabajo a nadie.

## 2. Oscar y los compañeros tenemos una diferencia importante

Git guarda direcciones con nombres cortos llamados **remotos**. Los vemos con:

```powershell
git remote -v
```

| En qué copia estamos | `origin` apunta a | `upstream` apunta a |
| --- | --- | --- |
| Mi copia, Oscar | `rx3card/cowpay`, el repositorio principal | No lo necesitamos para este recorrido |
| Copia de un compañero | Su fork, por ejemplo `USUARIO/cowpay` | `rx3card/cowpay`, el repositorio principal |

`origin` y `upstream` no son carpetas ni ramas. Son nombres que Git asocia con direcciones. Ver la misma dirección dos veces, una con `(fetch)` y otra con `(push)`, es normal.

Por eso no podemos dar el mismo `git pull` sin más explicación a todos: **mi `origin` es el repositorio principal, pero el `origin` de un compañero es su fork**. En esta guía elegimos explícitamente de dónde descargamos.

## 3. Preparación de un compañero: una sola vez

Si ya tenemos el fork y el proyecto clonado, empezamos comprobando los remotos; no clonamos otra copia encima.

### Crear el fork y descargarlo

1. Entramos con nuestra cuenta en [rx3card/cowpay](https://github.com/rx3card/cowpay).
2. Pulsamos **Fork** y creamos la copia en nuestra cuenta. Si ya existe, usamos esa.
3. Abrimos nuestro fork y copiamos su dirección HTTPS desde **Code**.
4. Abrimos una terminal en la carpeta donde guardamos nuestros proyectos y clonamos. En este ejemplo reemplazamos `NUESTRO_USUARIO` por nuestro usuario real:

```powershell
git clone https://github.com/NUESTRO_USUARIO/cowpay.git
cd cowpay
```

`clone` descarga la copia y crea la carpeta. `cd cowpay` entra en ella. Abrimos esa carpeta en VS Code. Si Git pide iniciar sesión para subir cambios, usamos nuestra cuenta de GitHub en el mecanismo de acceso que muestre; no pegamos contraseñas en archivos del proyecto.

### Conectar con el repositorio del equipo

Dentro de `cowpay` comprobamos:

```powershell
git remote -v
```

`origin` debe apuntar a nuestro fork. Si todavía no aparece `upstream`, lo añadimos una vez:

```powershell
git remote add upstream https://github.com/rx3card/cowpay.git
```

Comprobamos de nuevo con `git remote -v`. Si dice `remote upstream already exists`, ese nombre ya estaba configurado: miramos la dirección antes de hacer nada más. Si `origin` apunta al repositorio de Oscar en lugar de a nuestro fork, lo revisamos juntos; no cambiamos direcciones por adivinar.

### Descargar la base actual e instalar sus bibliotecas

Sin cambios locales pendientes y con la rama `main` existente:

```powershell
git switch main
git pull --ff-only upstream main
```

Después actualizamos nuestro fork:

```powershell
git push origin main
```

Cuando la base ya incluya `package.json`:

```powershell
pnpm install
pnpm dev
```

Abrimos la dirección que muestre la terminal. Si todavía no hemos compartido la base, no intentamos arreglar la ausencia de `package.json` creando otro proyecto: esperamos esa base y practicamos lo acordado.

## 4. Nuestra primera comprobación cada vez que abrimos el proyecto

Antes de descargar cambios o cambiar de rama escribimos:

```powershell
git status
```

Lo leemos, no solo lo ejecutamos:

- `On branch ...` indica en qué rama estamos.
- `nothing to commit, working tree clean` significa que no hay cambios locales pendientes de registrar. No garantiza que ya hayamos hecho push.
- `modified` indica un archivo cambiado.
- `Untracked files` indica archivos nuevos que Git todavía no sigue.
- `Changes to be committed` indica archivos seleccionados con `git add`, pero todavía sin commit.
- Si aparecen conflictos o una fusión pendiente, resolvemos eso antes de continuar con otra receta.

**Si tenemos cambios pendientes de una tarea, los guardamos en su rama con los pasos del apartado 7.** Después volvemos aquí. Si los hicimos accidentalmente en `main`, consultamos el apartado de problemas; no cambiamos de rama ni descartamos archivos a ciegas.

Con los cambios guardados, elegimos **una** situación:

| Lo que vamos a hacer | Apartado que seguimos |
| --- | --- |
| Empezar una tarea distinta | 5: tarea nueva |
| Continuar la tarea de ayer | 6: misma tarea |
| Pedir que revisen lo que terminamos | 8: abrir el PR |
| Revisar el trabajo de un compañero | 9: revisión e integración |

## 5. Empezar una tarea nueva

Ejemplo: Useche toma KAN-31, header y presentación principal. Primero la pasa a **En curso** en Jira y anota qué archivos va a modificar.

### Si soy un compañero con fork

Con `git status` limpio, actualizo `main` desde el repositorio del equipo:

```powershell
git switch main
git pull --ff-only upstream main
git push origin main
```

### En mi caso, Oscar

Con `git status` limpio, actualizo mi `main` desde el repositorio principal:

```powershell
git switch main
git pull --ff-only origin main
```

No necesito crear un fork de mi propio repositorio ni configurar `upstream` para seguir este recorrido.

### Después creamos nuestra rama de tarea

Useche, para el ejemplo de KAN-31:

```powershell
git switch -c feat/KAN-31-header-publico
```

Yo, para el ejemplo de menú del comensal dentro de KAN-44:

```powershell
git switch -c feat/KAN-44-menu-comensal
```

Elegimos **solo nuestra tarea**, no ejecutamos ambos ejemplos. `switch` cambia de rama y `-c` pide crearla. El nombre es una etiqueta que elegimos: `feat` señala una funcionalidad y `KAN-31` relaciona el trabajo con Jira. No crea carpetas de la aplicación.

Podemos comprobar el nombre actual con:

```powershell
git branch --show-current
```

Creamos una rama **por tarea o cambio concreto, no por día**. Si mañana seguimos con KAN-31, conservamos esa rama. Si una subtarea grande requiere varios PR, acordamos cómo separarlos en partes que podamos revisar.

### Qué significa `--ff-only` y por qué está aquí

En nuestra `main` local solo queremos recibir lo ya integrado por el equipo. `--ff-only` permite actualizarla si basta con avanzar al historial descargado. Si hay historias diferentes que Git tendría que combinar, se detiene y no crea esa combinación automáticamente.

Si falla, no significa que perdimos el código. Conservamos el mensaje y revisamos el caso; no quitamos el parámetro para forzar que pase. El apartado 12 explica qué hacer. **No utilizamos esta receta de actualización de `main` para incorporar cambios dentro de una rama de tarea que ya tiene commits propios.**

## 6. Continuar mañana con la misma tarea

Ejemplo: Useche empezó el header ayer y hoy lo continúa. **No necesita otra rama, otro fork ni volver a clonar.**

1. Abre `cowpay` y ejecuta `git status`.
2. Si tiene cambios sin commit, los guarda primero, siguiendo el apartado 7.
3. Comprueba que está en su rama. Si está en otra, con los cambios ya guardados puede volver a la existente:

```powershell
git switch feat/KAN-31-header-publico
```

Esta vez **no ponemos `-c`**, porque la rama ya existe.

### Recibir cambios del equipo en esa rama

Si soy un compañero con fork, estando en mi rama de tarea:

```powershell
git fetch upstream
git merge --no-edit upstream/main
```

En mi caso, Oscar, estando en mi rama de tarea:

```powershell
git fetch origin
git merge --no-edit origin/main
```

`fetch` descarga lo nuevo sin mezclarlo. `merge` incorpora la versión del equipo a la tarea que tenemos abierta, conservando nuestros commits. `--no-edit` utiliza el mensaje predeterminado si hace falta un commit de fusión; no decide cómo resolver conflictos.

Si aparece `Already up to date`, ya teníamos esos cambios. Si hay conflicto, vamos al apartado 12 antes de seguir. Si termina bien, comprobamos `git status` y subimos el resultado con `git push` cuando la rama ya tenga su primera subida.

Si varias personas trabajan **en la misma rama remota**, hace falta coordinar además sus cambios; ese no es nuestro recorrido habitual. Preferimos una rama propia por persona y tarea, como explica el apartado 10. Si cambiamos de computador, no basta con suponer que la rama local ya contiene el último push: revisamos ese caso antes de seguir.

Después ejecutamos `pnpm install` si recibimos cambios en dependencias o es la primera instalación; si tenemos dudas, podemos ejecutarlo igualmente. Iniciamos `pnpm dev` y continuamos. Si el servidor ya estaba abierto y cambió la configuración o las dependencias, lo detenemos con Ctrl+C y volvemos a iniciarlo.

## 7. Guardar y subir un avance

Podemos guardar avances aunque la pantalla no esté completa. Primero guardamos los archivos en VS Code con Ctrl+S y comprobamos:

```powershell
git status
git diff
```

`diff` muestra las líneas modificadas de archivos que Git ya conoce y que todavía no seleccionamos. Los archivos nuevos los abrimos también en VS Code para revisar su contenido. Si la salida ocupa la terminal y aparece un visor, pulsamos `q` para salir.

Seleccionamos **los archivos concretos de nuestra tarea**, con sus rutas reales. Ejemplo de Useche, cuando esos archivos existan:

```powershell
git add src/features/publico/components/PublicHeader.tsx
git add src/features/publico/components/PublicHeader.module.css
```

No copiamos estas rutas para una tarea del mesero o del comensal. Si Git dice que no encuentra un archivo, miramos el nombre y la ubicación en VS Code. Para seleccionar una carpeta entera tenemos que revisar primero todo su contenido.

Volvemos a comprobar:

```powershell
git status
git diff --staged
```

`--staged` muestra lo que hemos seleccionado para el siguiente commit. Comprobamos que solo estén nuestros archivos y guardamos la versión:

```powershell
git commit -m "KAN-31: agregar encabezado publico"
```

`-m` permite escribir el mensaje. No borra los cambios ni los envía a GitHub: registra esa versión local. Podemos tener varios commits dentro de una misma tarea.

### Primera subida de esta rama

```powershell
git push -u origin feat/KAN-31-header-publico
```

`origin` es el destino de subida de nuestra copia, según el apartado 2. `-u` recuerda con qué rama de GitHub queda relacionada nuestra rama local. La primera subida **crea o actualiza la rama**, pero no abre automáticamente el PR.

### Siguientes avances de la misma rama

Volvemos a guardar, seleccionar y hacer commit de los cambios nuevos. Después basta:

```powershell
git push
```

Solo usamos este comando abreviado después de haber relacionado la rama con la primera subida. Subimos al terminar el bloque de trabajo para que los commits no se queden únicamente en ese computador.

Antes de subir, revisamos que no aparezcan `node_modules`, `.next`, claves ni archivos `.env`. Estos no corresponden a una entrega de pantalla. Los archivos `package.json` y `pnpm-lock.yaml` sí pertenecen al proyecto, pero sus cambios los coordinamos.

## 8. Pedir revisión con un Pull Request

Un PR nos permite revisar antes de integrar. No necesitamos esperar a terminar todo nuestro módulo: una parte pequeña y comprobable puede tener su propio PR.

### Abrirlo en GitHub

1. Después del push entramos a GitHub y abrimos nuestro repositorio.
2. Si aparece **Compare & pull request**, lo utilizamos. Si no, vamos a **Pull requests → New pull request**. Para elegir otro repositorio puede aparecer **compare across forks**.
3. Revisamos el destino y el origen **antes** de crearlo:

| Campo | Useche u otro compañero con fork | Mi caso, Oscar |
| --- | --- | --- |
| Base repository: repositorio que recibe | `rx3card/cowpay` | `rx3card/cowpay` |
| Base: rama que recibe | `main` | `main` |
| Head repository: repositorio que propone | Nuestro fork | `rx3card/cowpay` |
| Compare: rama que propone | Nuestra rama de tarea | Mi rama de tarea |

Si Useche abre el PR solo dentro de su fork, no está solicitando integrar al repositorio del equipo. Miramos esos campos, no solo el título.

4. Revisamos **Files changed**: deben aparecer los cambios de esa entrega. Si aparecen archivos de otra tarea o una cantidad que no esperábamos, lo revisamos antes de pedir aprobación.
5. Escribimos un título con la clave real de Jira, por ejemplo `KAN-31: construir header y presentación principal`.
6. Completamos una descripción sencilla:

```text
Tarea: KAN-31
Qué hice: [cambio concreto]
Cómo verlo: [ruta y pasos necesarios]
Diseño: [enlace al frame de Figma o al boceto]
Capturas: [celular y escritorio]
Qué comprobé: [navegación, tamaños y resultado de build]
Qué falta: [pendientes dentro o fuera de esta entrega]
Ayuda recibida: [si la hubo]
```

Para una entrega frontend comprobamos el diseño, los enlaces de ejemplo y la adaptación a tamaños distintos. No pedimos validaciones de formularios, pagos reales ni backend. Antes de pedir revisión ejecutamos `pnpm build` y corregimos los errores; `pnpm lint` solo si la base tiene ese comando configurado.

### Borrador o listo para revisar

- **Draft PR:** lo abrimos mientras trabajamos para mostrar avances. Dejamos escrito qué falta. No equivale a una entrega aprobada.
- **Listo para revisión:** la parte prometida está preparada; si era borrador, pulsamos **Ready for review**. Pegamos el enlace en Jira y pasamos la subtarea a **En revisión**.

Si recibimos correcciones, editamos los archivos en **la misma rama**, hacemos nuevos commits y `git push`. El PR abierto se actualiza; no abrimos otro PR por cada comentario. Respondemos qué corregimos y volvemos a pedir revisión. Si seguimos programando esa subtarea, la dejamos en **En curso** hasta volver a tenerla lista.

## 9. Cómo voy a revisar e integrar el trabajo

Como Oscar tengo dos funciones: desarrollar mi parte y revisar la integración del equipo. No tengo que copiar manualmente los archivos de cada fork para juntarlos.

### Revisar en GitHub y abrir la pantalla

Abro el PR en `rx3card/cowpay` y compruebo:

- Qué subtarea pretende completar y qué archivos cambia.
- Que siga la distribución de carpetas y no altere trabajo ajeno sin coordinarlo.
- Que incluya ruta, referencia de diseño y capturas.
- Que la pantalla se pueda abrir, tenga la navegación de ejemplo y se adapte a celular y escritorio.
- El resultado de las comprobaciones que estén configuradas. Que GitHub diga que se puede fusionar no demuestra que el diseño esté bien.

Para ver el resultado puedo revisarlo con el compañero en su computador en el SENA. También puedo traer el PR a mi copia **sin integrarlo todavía en main**. Esta es una opción para mí, no un requisito de cada compañero.

Con mi trabajo guardado, `git status` limpio y `origin` apuntando a `rx3card/cowpay`, para revisar el **PR número 12**:

```powershell
git fetch origin pull/12/head:revision-pr-12
git switch revision-pr-12
pnpm install
pnpm dev
```

`12` es el número del PR de GitHub, **no la clave KAN de Jira**. Lo sustituimos por el real. `revision-pr-12` es una rama local de revisión; no cambia `main` ni aprueba el PR. Este ejemplo asume que ese nombre local aún no existe. Si ya lo usamos o el autor subió otra revisión, comprobamos su actualización juntos en vez de repetir el comando y asumir que descargó lo nuevo.

Abro la ruta indicada, recorro la pantalla y puedo comprobar `pnpm build` después de detener el servidor. No subo esta rama local como si fuera la entrega del autor. Al acabar, detengo el servidor, compruebo `git status` y vuelvo a mi rama con los cambios locales guardados o aclarados.

### Si hay algo pendiente

Dejo comentarios concretos en el PR: qué pantalla, qué parte y qué resultado esperamos. En GitHub puedo usar **Request changes** al enviar la revisión. El responsable corrige y sube a su misma rama. Esperamos esas correcciones antes de fusionar.

### Si está listo

Cuando la revisión y las comprobaciones estén bien, apruebo cuando corresponda y utilizo el botón de fusión que permita el repositorio. Confirmar **Merge** incorpora los cambios a `main`; cerrar un PR sin fusionar no hace eso.

Después paso la subtarea a **Hecho** en Jira y dejo el enlace al PR integrado. Una tarea principal no termina por fusionar su primera subtarea: revisamos el resto y el recorrido completo. Mis propios PR los revisa otro compañero; no puedo aprobar mi propio PR. Es nuestro acuerdo, no una protección de rama que demos por activada solo por escribirla aquí.

### Después de integrar

Si somos compañeros, con el trabajo local guardado:

```powershell
git switch main
git pull --ff-only upstream main
git push origin main
```

En mi caso, Oscar:

```powershell
git switch main
git pull --ff-only origin main
```

La próxima tarea empieza desde esa `main` actualizada y en una rama nueva. No reutilizamos la rama de una tarea cuyo PR ya se fusionó. Para una corrección posterior creamos otra rama y otro PR.

## 10. Cómo podemos ayudarnos sin pisarnos los archivos

No basta con tener ramas diferentes: **si cambiamos la misma línea, podemos tener un conflicto al integrar**. Nos coordinamos por tareas y archivos.

Ejemplo: Samuel termina una parte del mesero y quiere ayudar a Useche con el sitio público.

1. Miramos juntos la tarea y elegimos una pieza: el footer, no “ayudar con toda la página”.
2. Anotamos en Jira que Samuel hará `PublicFooter.tsx` y `PublicFooter.module.css`; Useche continúa con su header y sus secciones.
3. Si la subtarea actual mezcla footer y otras secciones, la dividimos antes de asignar solo el footer a Samuel. El trabajo de esa nueva pieza queda asignado a quien lo realiza; Useche sigue coordinando el área pública.
4. Samuel actualiza su `main` desde `upstream` y crea su rama de ayuda con la clave Jira que acordemos. Trabaja en su fork y abre PR hacia `rx3card/cowpay`.
5. Useche y Samuel acuerdan quién modifica la pantalla que importa el footer. Si ambos están editando ese archivo, uno espera o encargamos esa conexión a una sola persona.
6. Revisamos e integramos el footer. Useche recibe el cambio en su rama siguiendo el apartado 6 y continúa. No necesita editar ni tener permisos sobre el fork de Samuel.

Si el trabajo de Samuel depende de un archivo que Useche todavía no integró, primero integramos esa pieza pequeña o lo hacemos juntos en una sola computadora. No copiamos archivos entre forks por WhatsApp para intentar mantener dos versiones a mano.

### Archivos que coordinamos antes de modificar

Yo coordino `package.json`, `pnpm-lock.yaml`, configuraciones, `src/app/layout.tsx`, `globals.css`, rutas, datos y componentes compartidos. Si alguien necesita un cambio, lo anota y acordamos quién lo hace. No significa que nadie más pueda ayudar: significa que evitamos cambios paralelos sin avisarnos.

Cada pantalla tiene su CSS Module; no ponemos todos nuestros estilos en un único archivo global. También evitamos renombrar carpetas compartidas mientras los demás trabajan dentro.

## 11. Cómo queda cada entrega en Jira

| Momento | Acción en Git/GitHub | Acción en Jira |
| --- | --- | --- |
| Tomamos una subtarea | Actualizamos y creamos la rama | El responsable pasa a En curso y anota archivos |
| Mostramos un avance | Commit, push y, si queremos, Draft PR | Comentario corto con lo hecho y el bloqueo real |
| Pedimos revisión | PR listo con ruta y capturas | El responsable pega el enlace y pasa a En revisión |
| Recibimos correcciones | Nuevos commits y push a la misma rama | En curso mientras corregimos; después En revisión |
| Integramos | PR revisado y fusionado en el repositorio principal | Paso a Hecho la subtarea comprobada |

**El responsable de Jira no es necesariamente la única persona que escribió código.** El PR y los commits ayudan a ver las contribuciones; anotamos también la ayuda y el trabajo en pareja. Marcar Hecho sin evidencia no demuestra una entrega.

Los estados los cambiamos manualmente según este acuerdo. No damos por configurada una automatización ni un permiso que impida a otros mover tarjetas. La [guía de Jira](jira-y-github.md) explica el sprint, sus subtareas y las revisiones semanales. La sincronización automática con GitHub sigue pendiente de confirmación; mientras tanto pegamos los enlaces de los PR en Jira.

## 12. Si algo falla, qué hacemos

### “Tengo cambios sin guardar en Git y me toca actualizar”

Si estamos en la rama correcta de nuestra tarea, guardamos los archivos, revisamos `status`, seleccionamos los de la tarea y hacemos un commit de avance. No tiene que representar una pantalla terminada. Después seguimos la actualización del apartado 6. Si no sabemos a qué tarea pertenecen los archivos, lo aclaramos antes de cambiar de rama.

### “Empecé a programar en main por accidente”

Si **todavía no hicimos commit**, no ejecutamos `pull` ni descartamos los archivos. Podemos crear una rama nueva desde donde estamos, por ejemplo `git switch -c feat/KAN-31-header-publico`, y guardar ahí el trabajo. Primero comprobamos que el nombre y la tarea sean los correctos. Si Git se detiene o si ya hicimos commits en `main`, revisamos el caso juntos: no usamos un comando para borrar el historial.

### “Dice que la rama ya existe”

`-c` pide crear una rama nueva. Para volver a una existente usamos `git switch` y su nombre, sin `-c`, después de guardar el trabajo actual. Podemos listar las ramas locales con `git branch`; pulsamos `q` si se abre un visor.

### “Dice que no puede actualizar con --ff-only”

Nuestra `main` y la que descargamos no tienen un historial que pueda avanzar de forma directa. Puede pasar si hicimos commits propios en `main` o si nuestro fork recibió cambios diferentes. Conservamos el error, ejecutamos `git status` y revisamos con el equipo. No quitamos la comprobación ni borramos commits para hacer desaparecer el mensaje.

### “Aparece un conflicto después de merge”

Paramos los demás comandos. `git status` indica los archivos afectados. En un conflicto de texto puede aparecer algo como:

```text
<<<<<<< HEAD
<h1>Menú del restaurante</h1>
=======
<h1>Nuestro menú</h1>
>>>>>>> upstream/main
```

Git está mostrando dos versiones de esa parte, no el código final que debemos publicar. `HEAD` corresponde a nuestra rama actual en esta fusión y la otra parte viene de la rama que incorporamos. Revisamos con quien modificó el archivo, escribimos la versión que necesitamos y quitamos los marcadores. No siempre basta con escoger un lado: a veces necesitamos combinar partes. También existen conflictos de archivos borrados o renombrados sin este ejemplo exacto.

Cuando el contenido esté resuelto, seleccionamos **cada archivo resuelto por su ruta real** con `git add`, ejecutamos `git status` y, cuando no queden conflictos, terminamos la fusión con `git commit --no-edit`. Esto utiliza el mensaje preparado por Git. Comprobamos la aplicación y hacemos `git push` a nuestra rama ya relacionada.

No elegimos **Accept all incoming** ni **Accept all current** por costumbre. Si no entendemos la diferencia, lo revisamos juntos en el SENA antes de confirmar.

### “El push dice rejected o non-fast-forward”

No usamos `--force`. Puede haber commits remotos que no tenemos o podemos estar subiendo a la rama equivocada. Comprobamos `git status`, la rama y `git remote -v` y revisamos el mensaje. La solución depende del destino; no descargamos de una dirección cualquiera para intentar que pase.

### “GitHub no muestra cambios para abrir el PR”

Comprobamos que hicimos commit y push y que elegimos nuestra rama de tarea como origen, no `main`. También puede que el PR ya esté fusionado. No creamos archivos nuevos solo para forzar que aparezca una diferencia.

### “Aparecen muchísimos archivos que no reconozco”

Revisamos `.gitignore` y qué está mostrando Git. No usamos `git add .` a ciegas. Las bibliotecas, resultados de compilación y secretos no forman parte de la entrega. Si seleccionamos algo por error, pedimos ayuda para retirarlo de la selección sin borrar el archivo.

## 13. Recordatorio para cada jornada

**Al empezar:** abrimos la carpeta correcta, comprobamos `git status`, guardamos cambios pendientes y elegimos si continuamos la misma tarea o empezamos una nueva. Usamos el origen que corresponda a nuestra copia.

**Mientras trabajamos:** modificamos los archivos acordados, hacemos commits pequeños y avisamos si necesitamos tocar algo compartido. No esperamos a tener todo el módulo para mostrarlo.

**Al terminar el bloque:** guardamos y subimos el avance a nuestra rama, anotamos en Jira qué hicimos, qué falta y qué nos bloquea. Si está listo, dejamos el PR preparado y pedimos revisión en el horario del SENA.

**Después de integrar:** actualizamos `main`. La siguiente tarea tiene una rama nueva. No hacemos trabajo obligatorio fuera del SENA ni esperamos respuestas mías después de la jornada; dejamos las dudas para el siguiente bloque acordado.

## 14. Una práctica antes de comenzar todo el módulo

Cuando la base esté compartida, hacemos juntos este recorrido con una pieza pequeña y archivos distintos para cada uno:

1. Identificamos si estamos en mi copia o en un fork y comprobamos los remotos.
2. Actualizamos y creamos una rama para la práctica acordada.
3. Cambiamos un título o una regla de nuestro CSS.
4. Hacemos commit, push y abrimos un PR hacia `rx3card/cowpay`.
5. Un compañero pide una corrección pequeña; la subimos a la misma rama y vemos que el PR se actualiza.
6. Revisamos, integramos y descargamos el resultado en otra copia.

Si podemos explicar dónde quedó el cambio en cada paso, ya tenemos una base para colaborar. Si algo no se entiende, repetimos esa parte con un ejemplo; no hace falta memorizar todos los comandos de esta guía para hacer nuestra primera entrega.

**Seguimos con nuestra pantalla en el [mapa de rutas](rutas.md), su tarea en el [plan del equipo](plan-equipo.md) y el [seguimiento en Jira](jira-y-github.md).**

## Referencias oficiales para consultar

- [Git: qué hace pull y qué significa --ff-only](https://git-scm.com/docs/git-pull).
- [GitHub: configurar upstream en un fork](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/configuring-a-remote-repository-for-a-fork).
- [GitHub: resolver conflictos en la terminal](https://docs.github.com/en/pull-requests/how-tos/merge-and-close-pull-requests/resolving-a-merge-conflict-using-the-command-line).
- [GitHub: revisar un PR en nuestra copia local](https://docs.github.com/en/pull-requests/how-tos/review-pull-requests/checking-out-pull-requests-locally).
