# SierraDirecta

Prototipo académico de una plataforma de comercialización agrícola directa para asociaciones de productores de la Sierra ecuatoriana. Acerca las cosechas a compradores y permite demostrar el seguimiento de pedidos y las referencias de precios.

## Cómo ejecutarlo

1. Descarga o clona el repositorio.
2. Abre `dist/index.html` en un navegador moderno, como Chrome, Firefox o Edge.
3. En la bienvenida, pulsa **Iniciar sesión** para entrar directamente. El acceso es simulado y no solicita credenciales.

No se necesita instalar dependencias ni configurar una base de datos para probar el prototipo. Los datos de demostración y los cambios se guardan en el almacenamiento local del navegador y solo están disponibles en ese navegador y dispositivo. Al borrar los datos del navegador se pueden perder los cambios.

## Funciones disponibles

- Pantalla de bienvenida con paisaje ilustrativo y acceso directo.
- Tema claro predeterminado y opción de activar el tema oscuro durante la sesión.
- Catálogo con imágenes ilustrativas, búsqueda y filtros por grupos: tubérculos y raíces, cereales y granos, legumbres, hortalizas y frutas.
- Vistas de demostración para comprador, líder de asociación, encargado de precios y administrador, seleccionables desde la parte superior.
- Como comprador: consultar productos, solicitar una cosecha, consultar pedidos, cancelar un pedido pendiente y confirmar la recepción cuando esté listo. La fecha de entrega debe ser hoy o posterior.
- Como líder: publicar cosechas de ejemplo, aceptar o rechazar pedidos y avanzar pedidos aceptados a preparación y listos para entrega. La solicitud pendiente no descuenta inventario; al aceptarla se comprueba y descuenta la cantidad disponible.
- Como encargado de precios: consultar y agregar referencias con producto, mercado, rango, fuente y fecha. Se señalan las referencias de más de siete días.
- Como administrador: consultar los perfiles de demostración.

## Estructura

- `dist/index.html`: entrada de la aplicación.
- `dist/app.js`: datos, vistas y acciones del prototipo.
- `dist/bienvenida.js`: acceso desde la bienvenida.
- `dist/tema.js`: selector de tema claro y oscuro.
- `dist/*.css`: estilos de las vistas y componentes.
- `dist/*.svg` y `dist/*.png`: logo, paisajes e imágenes ilustrativas.

## Alcance y limitaciones

Este proyecto es un **prototipo de demostración**, no un sistema listo para producción. La selección de roles no es autenticación ni control de acceso: todas las acciones y los datos están en el navegador. No se deben ingresar datos personales reales. No existe servidor, base de datos compartida, pagos, notificaciones reales, carga de documentos ni integración gubernamental o con el PAE. Los precios, cantidades, asociaciones y productores son ejemplos; las imágenes son ilustrativas y algunas fueron generadas con IA.

Las operaciones de inventario se simulan localmente y no garantizan consistencia entre usuarios o dispositivos. Para un sistema real harían falta autenticación, permisos verificados en el servidor, almacenamiento compartido, transacciones y pruebas de seguridad.

## Tecnologías

HTML, CSS y JavaScript sin framework; almacenamiento local mediante `localStorage`. Las fuentes web se cargan desde Google Fonts cuando hay conexión y cuentan con fuentes alternativas del navegador.
