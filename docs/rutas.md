# Mapa de rutas y reparto del frontend

[Volver al README](../README.md). Después de practicar nuestra primera pantalla, consultamos aquí las direcciones y el reparto. La explicación paso a paso está en la [guía teórica y práctica](guia-desde-cero.md).

Estado: propuesta de implementación basada en las pantallas inspeccionadas del Figma. No son rutas ya programadas. Yo las creo en la base y cada responsable desarrolla su contenido. Los nombres de URL son una convención del equipo; no tienen que copiar el nombre de cada frame.

## Cómo leer este documento

- `/restaurantes` es una dirección que abre el navegador.
- `src/app/restaurantes/page.tsx` es el archivo que crea esa dirección.
- `[slug]`, `[id]` y `[code]` son partes variables. Se usa un valor concreto al navegar, por ejemplo `/r/arepique`.
- Un modal, un error o una pestaña no siempre necesitan una página independiente.
- P0 es el recorrido mínimo. P1 se hace después del P0 del área. P2 queda fuera del compromiso inicial y se reevalúa el 27 de noviembre.
- Las páginas privadas serán visibles en la demo con acceso simulado. La protección real se implementa en el servidor posteriormente.

## Jehan Useche: sitio público

Referencia: [INICIO](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=653-500).

| Ruta | Archivo dentro de `src/app/` | Pantalla | Prioridad |
| --- | --- | --- | --- |
| `/` | `page.tsx` | Inicio | P0 |
| `/restaurantes` | `restaurantes/page.tsx` | Directorio con controles visuales de búsqueda y filtros | P0 |
| `/r/[slug]` | `r/[slug]/page.tsx` | Ficha pública de restaurante, sin pedir sin sesión de mesa | P0 |
| `/como-funciona` | `como-funciona/page.tsx` | Explicación del flujo | P1 |
| `/para-restaurantes` | `para-restaurantes/page.tsx` | Presentación para negocios | P1 |
| `/planes` | `planes/page.tsx` | Planes informativos | P1 |
| `/demo/solicitar` | `demo/solicitar/page.tsx` | Formulario de solicitud de demostración | P1 |
| `/nosotros` | `nosotros/page.tsx` | Equipo y proyecto | P1 |
| `/contacto` | `contacto/page.tsx` | Contacto visual, con navegación de ejemplo | P1 |
| `/preguntas-frecuentes` | `preguntas-frecuentes/page.tsx` | Preguntas desplegables | P1 |
| `/legal/terminos` | `legal/terminos/page.tsx` | Texto provisional de términos | P1 |
| `/legal/privacidad` | `legal/privacidad/page.tsx` | Texto provisional de privacidad | P1 |
| `/legal/cookies` | `legal/cookies/page.tsx` | Texto provisional de cookies | P1 |
| `/mapa` | `mapa/page.tsx` | Descubrimiento geográfico real | P2 |

Más referencias: [directorio](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=312-1473), [cómo funciona](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=313-1999), [planes](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=313-2424).

### La carga del sitio público y lo que reutilizamos

Al revisar Figma el 17 de noviembre, Inicio (`653:500`) mide 1440 × 4579 y Planes (`313:2424`), 1440 × 3168. No son pantallas pequeñas. Inicio incluye presentación, pasos, beneficios, sección para restaurantes, destacados, testimonios, preguntas, llamada final y footer. Planes incluye tarjetas, comparación y preguntas.

Nuestro mapa propone **13 rutas públicas**, además del mapa geográfico que está en P2. Ese número es nuestra propuesta de rutas, no un recuento de 13 diseños diferentes confirmados en Figma. Hay varias versiones del directorio y de Planes: no creamos una ruta por cada frame repetido. Tampoco damos por diseñado un contenido solo porque le asignamos una URL, como `/nosotros`.

Vamos a aprovechar `PublicHeader`, `PublicFooter`, tarjetas de restaurante, tarjetas de plan y bloques de preguntas. Cada página conserva su composición y CSS propios. Reutilizar el encabezado reduce trabajo; no elimina la maquetación de las secciones restantes.

Useche sigue encargado del sitio público. No vamos a exigirle todas las páginas de golpe: primero una entrega pequeña del inicio, después sus secciones y el directorio/ficha, y luego las informativas acordadas. Los puntos iniciales son estimaciones que revisamos con la primera práctica y el avance del viernes 20; no demuestran que el reparto esté equilibrado. Si falta capacidad, dejamos explícito qué subtarea apoyamos o qué alcance ajustamos.

Header y footer públicos se comparten en estas páginas. La página 404 se implementa con `not-found.tsx`; no hace falta inventar `/404`. Los textos legales y cifras comerciales del Figma son material de diseño, no certificaciones ni afirmaciones ya verificadas del producto.

## Oscar Rojas: comensal

Referencias: [entrada QR](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5333), [menú móvil](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5417), [división](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-5879).

Para la demo usaremos la mesa `/r/arepique/mesa/AX7K2`. El código del QR identifica una mesa, pero no será una autorización permanente para pedir: la sesión válida se resolverá en el servidor real.

| Ruta | Pantalla | Prioridad |
| --- | --- | --- |
| `/r/[slug]/mesa/[code]` | Bienvenida y entrada a sesión de mesa | P0 |
| `/r/[slug]/mesa/[code]/menu` | Menú por categorías | P0 |
| `/r/[slug]/mesa/[code]/platos/[id]` | Detalle, cantidad y observaciones | P0 |
| `/r/[slug]/mesa/[code]/carrito` | Mi pedido antes de enviar | P0 |
| `/r/[slug]/mesa/[code]/pedido` | Pedido enviado y estado | P0 |
| `/r/[slug]/mesa/[code]/cuenta` | Consumo y total | P0 |
| `/r/[slug]/mesa/[code]/dividir` | División de cuenta | P0 |
| `/r/[slug]/mesa/[code]/pagar` | Selección de método, simulada | P0 |
| `/r/[slug]/mesa/[code]/confirmacion` | Resultado de pago de demostración | P0 |
| `/r/[slug]/mesa/[code]/resena` | Reseña posterior al consumo, simulada | P1 |
| `/entrar` | Inicio de sesión de cuenta del comensal | P1 |
| `/registro` | Crear cuenta de comensal | P1 |
| `/recuperar` | Solicitar recuperación | P1 |
| `/restablecer` | Formulario de nueva contraseña | P1 |
| `/comensal` | Inicio de cuenta | P1 |
| `/comensal/favoritos` | Favoritos | P1 |
| `/comensal/historial` | Historial y acceso a recibo | P1 |
| `/comensal/recibos/[id]` | Recibo visual de una visita | P1 |
| `/comensal/resenas` | Mis reseñas | P1 |
| `/comensal/ajustes` | Perfil, información y preferencias | P1 |
| `/comensal/amigos` | Amigos | P2 |
| `/comensal/notificaciones` | Centro de notificaciones | P2 |

Los archivos siguen la misma regla: `/comensal/historial` corresponde a `src/app/comensal/historial/page.tsx`. Los ajustes pueden usar pestañas antes de crear más rutas. La cuenta de comensal no será obligatoria para pedir desde la mesa.

## Samuel Correa: mesero

Referencia: [panel](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-61), [mesas](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=323-124).

| Ruta | Pantalla | Prioridad |
| --- | --- | --- |
| `/mesero/entrar` | Acceso simulado y variante de error | P0 |
| `/mesero` | Resumen del turno | P0 |
| `/mesero/mesas` | Mesas y sus estados de ejemplo | P0 |
| `/mesero/mesas/[id]` | Detalle de mesa y acciones | P0 |
| `/mesero/mesas/[id]/pedido` | Registrar pedido de esa mesa | P0 |
| `/mesero/pedidos` | Estado y avisos de pedidos | P0 |
| `/mesero/mesas/[id]/cuenta` | Cuenta, división y enlace a cobro | P0 |
| `/mesero/mesas/[id]/cobrar` | Registro de efectivo simulado | P0 |
| `/mesero/recuperar` | Recuperación de contraseña visual | P1 |
| `/mesero/historial` | Historial de servicio | P1 |
| `/mesero/perfil` | Perfil, foto y cambio de contraseña visual | P1 |

Abrir/cerrar mesa y confirmar salida serán diálogos dentro de la página, no una ruta por variante del Figma.

## Santiago Evanz: cocina y caja

Referencias: [tablero de cocina](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=321-4098), [abrir caja](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=457-218), [cuentas](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=457-338).

| Ruta | Pantalla | Prioridad |
| --- | --- | --- |
| `/cocina/entrar` | Acceso simulado | P0 |
| `/cocina` | Tablero y cambio de estados locales | P0 |
| `/cocina/historial` | Pedidos preparados | P1 |
| `/cocina/menu` | Consulta de platos | P1 |
| `/cocina/turno` | Contadores del turno | P1 |
| `/cocina/perfil` | Perfil | P1 |
| `/cocina/recuperar` | Recuperación visual | P1 |
| `/caja/entrar` | Acceso simulado | P0 |
| `/caja/abrir` | Apertura de caja simulada | P0 |
| `/caja` | Resumen de caja | P0 |
| `/caja/cuentas` | Cuentas abiertas | P0 |
| `/caja/cuentas/[id]` | Detalle, división y registro de cobro simulado | P0 |
| `/caja/historial` | Historial del turno | P1 |
| `/caja/turno` | Turno y cierre simulado | P1 |
| `/caja/perfil` | Perfil | P1 |
| `/caja/recuperar` | Recuperación visual | P1 |

El acceso puede reutilizar un formulario común con textos y tema distintos. La simulación del tablero no debe anunciar que recibe pedidos reales de otros dispositivos.

## Santiago Diaz Palma: administrador y Central

Referencias: [panel administrador](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-2344), [menú](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-3079), [inventario](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=749-3229), [Central](https://www.figma.com/design/Jl44XTkbSj8jzWkU3n4VG1/COMPLETE-COWPAY-DESING?node-id=745-39321).

| Ruta | Pantalla | Prioridad |
| --- | --- | --- |
| `/gestion-restaurante/entrar` | Acceso simulado del administrador | P0 |
| `/gestion-restaurante` | Panel principal | P0 |
| `/gestion-restaurante/menu` | Lista, crear/editar plato y disponibilidad local | P0 |
| `/gestion-restaurante/inventario` | Lista y formulario de ingredientes | P0 |
| `/gestion-restaurante/personal` | Cuentas de personal y alta local | P0 |
| `/gestion-restaurante/reportes` | Resumen visual con datos de ejemplo | P1 |
| `/gestion-restaurante/perfil` | Perfil del negocio | P1 |
| `/gestion-restaurante/recuperar` | Recuperación visual | P1 |
| `/gestion-restaurante/verificar` | Código de verificación visual, no MFA real | P1 |
| `/operacion-cowpay/entrar` | Acceso simulado de SuperAdmin | P0 |
| `/operacion-cowpay` | Resumen mínimo | P0 |
| `/operacion-cowpay/solicitudes` | Listado y acceso al detalle | P0 |
| `/operacion-cowpay/solicitudes/[id]` | Aprobar/rechazar localmente | P0 |
| `/operacion-cowpay/restaurantes` | Restaurantes de demostración | P1 |
| `/operacion-cowpay/restaurantes/[id]` | Ficha administrativa | P1 |
| `/operacion-cowpay/verificar` | Verificación visual | P1 |
| `/operacion-cowpay/recuperar` | Recuperación visual | P1 |
| `/operacion-cowpay/planes` | Gestión avanzada de planes | P2 |
| `/operacion-cowpay/pagos` | Operación financiera real | P2 |
| `/operacion-cowpay/resenas` | Moderación avanzada | P2 |
| `/operacion-cowpay/equipo` | Gestión del equipo de plataforma | P2 |
| `/operacion-cowpay/auditoria` | Auditoría real | P2 |

Las variantes agregar ingrediente, editar plato y desactivar personal se harán con diálogos y estado local. No crean tres páginas independientes de la misma tabla.

## Base común: Oscar

- `/demo`: índice para entrar a cada área con datos simulados y ver qué sigue pendiente.
- `src/app/layout.tsx` y estilos base con variables de Figma; cada área tiene su navegación propia.
- `src/app/not-found.tsx`: dirección inexistente.
- Componentes iniciales: botón, campo, tarjeta, mensaje, diálogo y estado vacío.
- Acuerdo de un restaurante, mesa, platos y pedido común.
- No generar endpoints vacíos con respuestas de éxito para simular backend terminado.

## Cómo revisar las rutas

Voy a abrir el índice de demo y comprobar todos los P0 uno por uno. Cada responsable deja en su PR los enlaces concretos; nadie prueba literalmente una URL con `[id]`. Usamos identificadores de ejemplo para recorrer las pantallas; la gestión de identificadores reales vendrá con el backend.

En el control del 27 se deciden los P1 que caben. Los P2 pueden documentarse sin crearse como promesas de entrega.

## Privacidad de administración

`/gestion-restaurante/*` y `/operacion-cowpay/*` son privadas; no aparecen en navegación pública ni sitemap. Las rutas privadas y sus accesos llevarán `noindex` en la aplicación real. `/demo` será solo local o de demostración controlada, no un listado público de accesos privados.

El nombre menos evidente que pueda elegirse para Central no reemplaza autenticación. Las rutas son visibles en el código, historial y peticiones. Se comprobará sesión y rol en servidor, en cada acción y consulta, con aislamiento entre restaurantes. La elección final del prefijo la hago yo al crear la base y se aplica de manera consistente. No estamos creando aún un acceso real.

## Alcance visual que acordamos

Esta entrega es solo frontend. Se permiten datos fijos, botones que cambian de ruta y formularios sin validación ni envío. Las acciones de agregar, editar, cobrar o aprobar pueden llevar a una pantalla de ejemplo ya preparada. No se exige lógica de negocio, cálculos, persistencia ni sincronización. Se conserva separación de componentes, datos y servicios para una conexión futura.

El comensal tiene partes sin diseñar: voy a inventariar primero lo disponible y lo faltante y preparar versiones sencillas coherentes para continuar; no se considera todo Figma completo. Los nombres de carpetas de features (`admin`, `central`) no tienen que coincidir con URL; las rutas las preparo yo y muestran esas pantallas.

**Siguiente paso:** buscamos la tarea de nuestra pantalla en el [plan del equipo](plan-equipo.md) y acordamos los archivos que vamos a tocar antes de empezar.
