# Diario del proyecto

## 27 de octubre de 2026

### Avances

- Integración inicial de Sanity Studio en `/studio`, sin enlazarlo desde la web
  ni incluirlo en el sitemap.
- Esquemas creados para productos, categorías, horario y ajustes del sitio.
- Lectura de contenido desde Sanity en `/productos` y `/horario`, con reserva
  local cuando falta configuración, la consulta falla o no hay contenido
  publicado.
- Reorganización de las páginas públicas en `app/(site)`, con su propio layout.
  El layout raíz queda mínimo y Studio no hereda header, footer ni banner de
  cookies.
- Studio cargado dinámicamente en cliente y con metadata `noindex`, evitando
  problemas de prerender.
- Ajustes de configuración para imágenes de Sanity y compatibilidad del build.
- README actualizado con los pasos de configuración e importación inicial.
- Añadido `.env.example` sin valores reales; `.env.local` permanece ignorado.
- Verificados build, lint y TypeScript.
- Commit de la integración: `6a8be57 feat: paso 7 - preparación e integración de Sanity`.

### Decisiones

- Separar la web pública y Studio mediante el grupo de rutas `app/(site)`.
- Mantener datos locales como reserva para que la web funcione sin Sanity.
- No publicar Studio ni enlazarlo desde la navegación.
- No registrar credenciales, tokens ni valores de entorno en el repositorio ni
  en este diario.
- No configurar todavía despliegue, dominio, webhooks ni servicios externos.
- Gestionar las categorías de productos (Pan, Bollería, Tortas y dulces, Encargos) en Sanity.

### Pendientes

- Configurar el proyecto y el dataset de Sanity, los permisos CORS y las
  credenciales necesarias en el entorno local.
- Preparar una importación idempotente de categorías iniciales (Pan, Bollería,
  Tortas y dulces y Encargos).
- Importar y completar el contenido desde Studio (importación no ejecutada aún;
  sin documentos creados en Sanity).
- Probar `/studio`, `/productos` y `/horario` con datos reales publicados.
- Completar los datos legales pendientes y confirmar el horario definitivo.
- Definir el envío real del formulario de contacto.
- Revisar los avisos de peer dependencies detectados durante la instalación.
- Revisar la optimización de las imágenes de productos procedentes de Sanity
  (pendiente para más adelante): dimensiones, calidad, formatos modernos
  (WebP/AVIF) y uso de Sanity o `next/image`.
- Comprobar la implementación existente de imágenes antes de hacer cambios. No
  dar esta tarea por completada.
- Preparar el despliegue y la configuración del dominio.

## 20 de noviembre de 2026

### Avances

- Comprobada la lectura de productos reales publicados en Sanity:
  Pan de Pueblo y Caña de chocolate.
- Verificado que una modificación de la descripción publicada
  en Sanity se refleja en la web.
- Comprobada la aparición de productos en las categorías
  Pan y Bollería.
- Añadido un límite de Suspense en la página de productos,
  moviendo la consulta a un componente asíncrono hijo.
- Tras guardar y recargar, los productos cargan correctamente
  y desaparece el indicador del aviso Blocking Route.
- Conservada sin cambios la lógica de reserva local.

### Pendientes

- Ejecutar de nuevo build, lint y TypeScript tras el cambio.
- Probar /horario con datos reales publicados.
- Comprobar los casos de reserva local.
- Mantener los demás pendientes de la entrada anterior.
