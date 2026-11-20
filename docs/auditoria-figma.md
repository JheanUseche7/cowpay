# Revisión del Figma frente a la base de Cowpay

[Volver al README](../README.md) ; [Mapa de rutas](rutas.md) ; [Registro del inventario](inventario-figma.json).

Revisión del 20 de noviembre de 2026. Corregimos el conteo anterior: las 77 páginas de la base son direcciones preparadas, no un inventario completo de todas las interfaces y variantes del Figma.

## Qué se pudo verificar

Recorrimos la única página del archivo, COWPAY DESING (0:1), e inventariamos sus 173 elementos superiores: 166 frames, 3 vectores, 2 textos sueltos y 2 secciones vacías. No contamos los vectores ni textos como pantallas. Los contenedores con nombres genéricos se resolvieron para identificar la pantalla que contienen; no los sumamos otra vez.

Clasificamos los 166 frames por el contenido y los nombres de las áreas. Hay pantallas base, versiones para distintos tamaños, estados, formularios, referencias y copias. Por eso no son 166 pantallas independientes ni 166 rutas obligatorias.

La inspección detallada alcanzó el contenido de los 26 frames públicos y de los primeros 20 del comensal, los seis primeros estados del listado de mesas del mesero, los contenedores genéricos y capturas de checkout, confirmaciones y perfil de caja. Después Figma bloqueó más llamadas MCP por el límite del plan Starter. El inventario de identificadores y nombres es completo; la clasificación visual de todas las variantes no está terminada. No presentamos esa inspección pendiente como ya realizada.

## Conteo comprobado por área

| Responsable | Área | Frames superiores de Figma | Rutas/componentes de pantalla preparados |
| --- | --- | --- | --- |
| Useche | Sitio público y recorrido de planes | 26 | 13 |
| Oscar | Comensal, acceso y cuenta, con versiones de escritorio y móvil | 37 | 20 |
| Samuel | Mesero, con muchos estados y diálogos | 48 | 11 |
| Evanz | Cocina | 9 | 7 |
| Evanz | Caja | 10 | 9 |
| Palma | Administración del restaurante | 14 | 9 |
| Palma | Superadmin | 19 | 8 |
| Por acordar integración | Tres copias de la confirmación genérica EXITO | 3 | Sin ruta propia asignada |
| Total | | 166 | 77 |

Este reparto de frames utiliza las áreas actuales; no modifica los responsables en Jira. Checkout aparece ligado a la compra del plan del restaurante en la parte pública. Su incorporación al trabajo de Useche debe quedar explícita antes de tratarla como compromiso: no estaba desglosada en las tareas anteriores. Las confirmaciones genéricas pueden reutilizarse y no deben encargarse tres veces solo por tener tres copias.

## Useche: por qué 13 era una explicación incompleta

Los 26 frames de su zona se desglosan así:

| Grupo | Frames | Qué representa |
| --- | --- | --- |
| Inicio | 1 | Página principal extensa |
| Directorio de restaurantes | 5 | Versiones del directorio; una ruta puede mostrar sus variantes |
| Ficha pública del restaurante | 2 | Dos versiones dentro de contenedores distintos |
| Cómo funciona | 1 | Página informativa |
| Para restaurantes | 1 | Página informativa |
| Planes y precios | 2 | Versiones de la página de planes |
| Solicitar demostración | 1 | Formulario |
| Quiénes somos | 1 | Página informativa |
| Preguntas frecuentes | 1 | Página de preguntas |
| Términos, privacidad y cookies | 3 | Documentos públicos |
| Página no encontrada | 1 | Diseño público del 404 |
| Contacto | 1 | Página de contacto |
| Checkout del plan | 4 | Cuatro frames de compra de suscripción del restaurante |
| Mapas de Ibagué | 2 | Dos referencias o versiones de mapa; el mapa está en P2 |
| Total | 26 | No equivale a 26 URLs distintas |

Las 13 rutas existentes cubren el inicio, directorio, ficha y páginas informativas/legales. Seis frames adicionales corresponden a las versiones extra de directorio, ficha y planes. El diseño de 404 añade otro frame: el proyecto tiene not-found.tsx, pero su presentación visual de Figma no está implementada. El checkout no tiene ruta ni subtarea específica en la base. El mapa está expresamente fuera del compromiso inicial (P2).

En el contenido de los checkout se lee Datos del restaurante, Plan Pro y Resumen de tu compra. Es la suscripción del negocio, no el pago de la cuenta de una mesa del comensal. No trasladamos esa compra al comensal solo porque ambas pantallas hablen de pagar.

La comparación del texto de los cuatro checkout dio dos pares con el mismo contenido textual; eso no demuestra que sean visualmente idénticos. Debemos revisar sus diferencias visuales antes de encargar cuatro pantallas independientes.

## Oscar: de dónde salen las 20 rutas

La base preparó 9 rutas esenciales de mesa, 1 reseña posterior, 4 de acceso/recuperación y 6 de cuenta. Los frames son 37 porque también existen versiones de escritorio y móvil, error de acceso y varias pantallas de ajustes.

Los frames de escritorio incluyen acceso, registro, verificación de correo, inicio de cuenta, explorar, ficha de restaurante dentro de cuenta, favoritos, historial, recibo, reseñas, amigos, notificaciones y cinco pantallas de ajustes. Los móviles incluyen acceso y su error, inicio, perfil, favoritos, historial, reseñas, amigos, división, entrada por QR, menú, detalle de plato, pedido, estado, división de cuenta, pago, aprobado, reseña, registro y recuperación.

Faltan por concretar en el mapa: la verificación del correo del comensal, explorar dentro de cuenta y la ficha de restaurante dentro de cuenta. Los cinco ajustes pueden resolverse con pestañas o subpantallas dentro de /comensal/ajustes, pero deben enumerarse en la tarea. Amigos y notificaciones estaban clasificados como P2. No consideramos listo un diseño móvil solo porque haya una versión de escritorio; tampoco todos los frames demuestran que los huecos del flujo estén resueltos.

La ficha pública de Useche (312:1758 / 712:47) y la ficha dentro de la cuenta del comensal (297:2974) son frames distintos. Eso explica la confusión del reparto: pueden compartir componentes, pero debemos contemplar ambas presentaciones. La ficha de cuenta corresponde al área de Oscar según el reparto actual.

## Samuel: 48 frames no significan 48 rutas

Los nombres del archivo agrupan 15 familias:

| Familia en Figma | Frames |
| --- | --- |
| Acceso | 1 |
| Recuperación | 2 |
| Panel | 1 |
| Cuadrícula/listado de mesas | 13 |
| Detalle de mesa | 2 |
| Historial de mesa | 3 |
| Registro de pedido | 3 |
| Estado del pedido | 2 |
| Resumen de cuenta | 9 |
| Pago | 4 |
| Finalización del servicio | 3 |
| Perfil | 1 |
| Cambio de contraseña | 1 |
| Cambio de foto | 1 |
| Confirmación de salida | 2 |
| Total | 48 |

Comprobamos en los primeros seis listados que cambian estados, contadores y acciones de las mesas. No debemos convertir cada estado en una nueva URL. Las 11 rutas preparadas pueden alojar muchas de estas variantes, pero las subtareas deben enumerar recuperación/enviado, historial de mesa, pago, cierre, cambio de foto, contraseña y salida. Que el nombre se repita no demuestra que el frame sea una copia innecesaria. Falta inspección detallada de las variantes restantes por el límite de Figma.

## Evanz: cocina y caja

Cocina tiene 9 frames: acceso, error de acceso, tablero, historial, menú, turno, solicitud de recuperación, confirmación de envío y perfil. Hay 7 rutas preparadas; error y confirmación pueden representarse como variantes sin crear otra URL obligatoriamente.

Caja tiene 10 frames: acceso, apertura, cuentas abiertas, historial, turno, solicitud de recuperación, confirmación de envío, división de cuenta, historial de turno y perfil. Hay 9 rutas preparadas. La división puede vivir en el detalle de una cuenta y la confirmación en recuperación; el historial de turno debe quedar explícito en el alcance, aunque se agrupe en una pantalla existente.

## Palma: admin y superadmin

Admin tiene 14 frames: acceso, verificación, dos de recuperación/restablecimiento, panel, perfil, tres versiones del menú digital, inventario, personal, reportes, creación de personal y agregar inventario. Hay 9 rutas preparadas. Los formularios y variantes deben quedar enumerados en las tareas de menú, personal e inventario. Falta revisar visualmente la diferencia de los dos frames de restablecimiento.

Superadmin tiene 19 frames. Catorce corresponden a auditoría, equipo, reseñas, pagos, gestión de planes, ficha de restaurante, nuevo restaurante, listado de restaurantes, detalle de solicitud, solicitudes, panel, verificación, recuperación y acceso. Otros cinco muestran agregar usuario, agregar plan, usuario desactivado, plan desactivado y confirmación de desactivación.

La base tiene 8 rutas de Superadmin. Equipo, planes, pagos, reseñas y auditoría estaban en P2 y no están implementados como rutas. Tampoco está desglosado el formulario de nuevo restaurante. Las variantes de usuario y plan dependen de módulos que se dejaron fuera del compromiso inicial. Por eso no podemos afirmar que el Superadmin completo del Figma está cubierto por esas 8 rutas.

## Qué cambia en nuestra planificación

La base permite iniciar el trabajo de rutas y pantallas que ya existen. No demuestra que el backlog contenga todo el diseño. El reparto anterior necesita un ajuste de subtareas para las variantes e interfaces faltantes indicadas arriba.

No añadimos compromisos ni cambiamos responsables automáticamente en esta revisión. Para integrar todo el Figma debemos acordar especialmente checkout del negocio, los módulos P2, variantes del mesero y pantallas de cuenta del comensal. Antes de mover fechas o asignar pantallas adicionales, confirmamos ese alcance con Oscar.

El mayor número bruto de frames lo tiene Samuel (48); después Oscar (37), Palma entre sus dos áreas (33), Useche (26) y Evanz entre cocina/caja (19). Esto tampoco es una estimación de horas: muchos frames de Samuel comparten estructura, mientras Inicio y Planes de Useche son páginas largas. La revisión visual restante es necesaria para estimar y repartir mejor.

## Inventario completo con enlaces a Figma

Los nombres mantienen su significado y usan punto y coma como separador en este documento. Los identificadores son los originales y permiten abrir cada frame. Los contenedores genéricos están identificados en las notas anteriores.

### Sitio público; Useche

| Frame | Nombre en el inventario |
| --- | --- |
| [712:257](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=712-257) | mapa-ibague |
| [653:500](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=653-500) | INICIO |
| [312:1473](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=312-1473) | 02-sitio-público-restaurantes 1 |
| [508:803](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=508-803) | 02-sitio-público-restaurantes 4 |
| [508:1064](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=508-1064) | 02-sitio-público-restaurantes 5 |
| [508:284](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=508-284) | 02-sitio-público-restaurantes 2 |
| [508:545](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=508-545) | 02-sitio-público-restaurantes 3 |
| [623:21](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=623-21) | Frame 4 |
| [712:46](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=712-46) | Frame 8 |
| [313:1999](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=313-1999) | 04-sitio-público-como-funciona 1 |
| [313:2202](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=313-2202) | 05-sitio-público-para-restaurantes 1 |
| [313:2424](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=313-2424) | 06-sitio-público-planes-y-precios 1 |
| [686:87](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=686-87) | 06-sitio-público-planes-y-precios 2 |
| [313:2731](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=313-2731) | 07-sitio-público-solicitar-demostracion 1 |
| [623:8](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=623-8) | Frame 3 |
| [644:10](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=644-10) | Preguntas-frecuentes |
| [313:3269](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=313-3269) | 11-legal-terminos-y-condiciones 1 |
| [313:3397](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=313-3397) | 12-legal-politica-de-privacidad 1 |
| [504:18](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=504-18) | 12-legal-politica-de-cookies 2 |
| [313:3527](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=313-3527) | 13-legal-pagina-no-encontrada 1 |
| [313:3603](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=313-3603) | 09-sitio-público-contacto 1 |
| [562:217](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=562-217) | checkout_pro 1 |
| [689:497](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=689-497) | checkout_pro 3 |
| [689:419](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=689-419) | checkout_pro 2 |
| [689:576](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=689-576) | checkout_pro 4 |
| [699:5](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=699-5) | mapa-ibague |

### Comensal; Oscar

| Frame | Nombre en el inventario |
| --- | --- |
| [627:64](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=627-64) | Frame 5 |
| [295:2212](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=295-2212) | 15-acceso-crear-cuenta 1 |
| [629:88](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=629-88) | Frame 7 |
| [297:2486](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=297-2486) | 07-cuenta-inicio 1 |
| [297:2718](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=297-2718) | 08-cuenta-explorar 1 |
| [297:2974](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=297-2974) | 09-cuenta-ficha-del-restaurante 1 |
| [297:3215](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=297-3215) | 10-cuenta-favoritos 1 |
| [297:3313](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=297-3313) | 11-cuenta-historial 1 |
| [297:3446](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=297-3446) | 12-cuenta-recibo 1 |
| [297:3542](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=297-3542) | 13-cuenta-mis-resenas 1 |
| [310:2](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=310-2) | 14-cuenta-amigos 1 |
| [311:133](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=311-133) | 15-cuenta-notificaciones 1 |
| [311:236](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=311-236) | 16-ajustes-mi-perfil 1 |
| [311:410](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=311-410) | 17-ajustes-informacion-personal 1 |
| [311:558](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=311-558) | 18-ajustes-contrasena-y-seguridad 1 |
| [311:698](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=311-698) | 19-ajustes-metodos-de-pago 1 |
| [311:864](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=311-864) | 20-ajustes-preferencias-de-aviso 1 |
| [321:4361](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-4361) | 01 ; Iniciar sesión |
| [321:4434](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-4434) | 01b ; Iniciar sesión / error |
| [321:4512](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-4512) | 02 ; Inicio |
| [321:4681](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-4681) | 03 ; Mi perfil |
| [321:4857](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-4857) | 04 ; Favoritos |
| [321:4957](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-4957) | 05 ; Historial |
| [321:5055](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5055) | 06 ; Mis reseñas |
| [321:5170](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5170) | 07 ; Amigos |
| [321:5255](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5255) | 08 ; Dividir mi cuenta |
| [321:5333](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5333) | 09 ; Mesa (entrada por QR) |
| [321:5417](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5417) | 10 ; Menú |
| [321:5548](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5548) | 11 ; Detalle del plato |
| [321:5661](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5661) | 12 ; Mi pedido |
| [321:5755](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5755) | 13 ; Estado del pedido |
| [321:5879](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5879) | 14 ; Dividir la cuenta |
| [321:6031](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-6031) | 15 ; Pagar |
| [321:6146](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-6146) | 16 ; Pago aprobado |
| [321:6233](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-6233) | 17 ; Dejar reseña |
| [321:6304](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-6304) | 02accesocrearcuenta 1 |
| [321:6402](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-6402) | 04accesorecuperarcontrasena 1 |

### Mesero; Samuel

| Frame | Nombre en el inventario |
| --- | --- |
| [323:2](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-2) | mesero-login |
| [323:35](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-35) | mesero-password-request |
| [729:1074](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=729-1074) | mesero-password-request |
| [323:61](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-61) | mesero-dashboard |
| [323:124](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-124) | mesero-table-grid |
| [323:262](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-262) | mesero-table-grid |
| [450:1223](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=450-1223) | mesero-table-grid |
| [456:2358](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=456-2358) | mesero-table-grid |
| [464:466](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=464-466) | mesero-table-grid |
| [323:539](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-539) | mesero-table-grid |
| [416:144](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=416-144) | mesero-table-grid |
| [416:443](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=416-443) | mesero-table-grid |
| [416:517](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=416-517) | mesero-table-grid |
| [443:3](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=443-3) | mesero-table-grid |
| [443:127](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=443-127) | mesero-table-grid |
| [444:261](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=444-261) | mesero-table-grid |
| [444:338](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=444-338) | mesero-table-grid |
| [323:679](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-679) | mesero-table-detail |
| [323:759](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-759) | mesero-table-detail |
| [323:814](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-814) | mesero-table-history |
| [453:1870](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=453-1870) | mesero-table-history |
| [464:9](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=464-9) | mesero-table-history |
| [323:916](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-916) | mesero-order-registration |
| [323:1072](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-1072) | mesero-order-registration |
| [445:563](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=445-563) | mesero-order-registration |
| [323:1210](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-1210) | mesero-order-status |
| [464:331](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=464-331) | mesero-order-status |
| [323:1318](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-1318) | mesero-bill-summary |
| [450:1581](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=450-1581) | mesero-bill-summary |
| [464:156](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=464-156) | mesero-bill-summary |
| [469:631](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=469-631) | mesero-bill-summary |
| [450:1669](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=450-1669) | mesero-bill-summary |
| [464:244](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=464-244) | mesero-bill-summary |
| [676:81](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=676-81) | mesero-bill-summary |
| [448:829](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=448-829) | mesero-bill-summary |
| [453:1993](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=453-1993) | mesero-bill-summary |
| [323:1406](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-1406) | mesero-payment |
| [448:919](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=448-919) | mesero-payment |
| [323:1489](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-1489) | mesero-payment |
| [323:1572](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-1572) | mesero-payment |
| [456:2183](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=456-2183) | mesero-finalize-service |
| [456:2261](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=456-2261) | mesero-finalize-service |
| [448:1002](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=448-1002) | mesero-finalize-service |
| [323:1733](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-1733) | mesero-profile |
| [323:1808](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-1808) | mesero-password-change-profile |
| [323:1869](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-1869) | mesero-photo-change |
| [323:1932](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-1932) | mesero-logout-confirmation |
| [702:765](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=702-765) | mesero-logout-confirmation |

### Cocina; Evanz

| Frame | Nombre en el inventario |
| --- | --- |
| [319:3783](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=319-3783) | 01-acceso-iniciar-sesion 1 |
| [319:3843](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=319-3843) | 02-acceso-iniciar-sesion--error 1 |
| [321:4098](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-4098) | 03-pedidos-tablero-de-pedidos 1 |
| [457:87](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=457-87) | cocina_3_historial 1 |
| [460:578](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=460-578) | cocina_4_menu 1 |
| [460:685](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=460-685) | cocina_5_turno 1 |
| [460:746](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=460-746) | cocina_recuperar_1_solicitud 1 |
| [460:770](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=460-770) | cocina_recuperar_2_enviado 1 |
| [487:354](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=487-354) | cocina_ver_perfil 1 |

### Caja; Evanz

| Frame | Nombre en el inventario |
| --- | --- |
| [457:182](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=457-182) | cajero_1_login 1 |
| [457:218](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=457-218) | cajero_2_abrir_caja 1 |
| [457:338](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=457-338) | cajero_3_cuentas_abiertas 1 |
| [460:429](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=460-429) | cajero_4_historial 1 |
| [460:510](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=460-510) | cajero_5_turno 1 |
| [460:786](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=460-786) | cajero_recuperar_1_solicitud 1 |
| [460:810](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=460-810) | cajero_recuperar_2_enviado 1 |
| [487:2](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=487-2) | cajero_ver_division 1 |
| [487:68](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=487-68) | cajero_historial_turno 1 |
| [487:218](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=487-218) | ver_perfil 1 |

### Administrador del restaurante; Palma

| Frame | Nombre en el inventario |
| --- | --- |
| [749:2183](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-2183) | login |
| [749:2229](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-2229) | verificacion-2fa |
| [749:2272](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-2272) | restablecer-contrasena |
| [749:2311](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-2311) | restablecer-contrasena |
| [749:2344](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-2344) | dashboard-panel-principal |
| [749:2594](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-2594) | perfil |
| [749:2703](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-2703) | 1.3 menu-digital |
| [749:2911](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-2911) | 1.2 menu-digital |
| [749:3079](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-3079) | 1 menu-digital |
| [749:3229](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-3229) | inventario |
| [749:3405](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-3405) | cuentas-de-personal |
| [749:3630](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-3630) | reportes |
| [749:3842](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-3842) | cuentas-de-personal crear |
| [749:4143](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-4143) | inventario-agregar |

### Superadmin; Palma

| Frame | Nombre en el inventario |
| --- | --- |
| [745:37704](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-37704) | Superadmin-auditoria 8 |
| [745:37842](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-37842) | Superadmin-equipo 7 |
| [745:38026](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-38026) | Superadmin-resenas 6 |
| [745:38264](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-38264) | Superadmin-pagos 5 |
| [745:38454](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-38454) | Superadmin-gestion-planes 4 |
| [745:38592](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-38592) | Superadmin-Screen 2.2 (Ficha Restaurante) |
| [745:38747](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-38747) | Superadmin- Screen 2.1 (Restaurantes Nuevo Form) |
| [745:38902](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-38902) | Superadmin- Screen 2 (Restaurantes Listado) |
| [745:39053](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-39053) | Superadmin - Screen 1.2 (Detalle Solicitud) |
| [745:39170](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-39170) | Superadmin - Screen 1 (Solicitudes) |
| [745:39321](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-39321) | Superadmin-dashboard 1 |
| [745:39521](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-39521) | Superadmin-two-factor-auth |
| [745:39548](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-39548) | Superadmin-recuperar-contrasena |
| [745:39573](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-39573) | Superadmin-login |
| [745:39602](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-39602) | agregar-usuario |
| [745:39737](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-39737) | agregar-plan |
| [745:39879](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-39879) | equipo-usuario-desactivado |
| [745:40063](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-40063) | planes-toggle-desactivado |
| [745:40201](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-40201) | equipo-confirmacion-desactivar |

### Confirmación compartida; responsable de integración por acordar

| Frame | Nombre en el inventario |
| --- | --- |
| [565:574](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=565-574) | EXITO |
| [689:404](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=689-404) | EXITO |
| [689:659](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=689-659) | EXITO |

**Siguiente paso:** revisar el alcance faltante y completar las subtareas; el [mapa de rutas](rutas.md) sigue describiendo la base existente. No eliminamos diseños de Figma por no tenerles todavía una ruta.
