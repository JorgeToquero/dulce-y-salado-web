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

### Pendientes

- Configurar el proyecto y el dataset de Sanity, los permisos CORS y las
  credenciales necesarias en el entorno local.
- Importar las categorías iniciales y completar el contenido desde Studio.
- Probar `/studio`, `/productos` y `/horario` con datos reales publicados.
- Completar los datos legales pendientes y confirmar el horario definitivo.
- Definir el envío real del formulario de contacto.
- Revisar los avisos de peer dependencies detectados durante la instalación.
- Preparar el despliegue y la configuración del dominio.
