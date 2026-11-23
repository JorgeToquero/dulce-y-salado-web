# Dulce y Salado

Web informativa para un despacho de pan y bollería, desarrollada con Next.js, TypeScript, Tailwind CSS y Sanity CMS.

Permite presentar el negocio, mostrar sus productos y consultar información sobre horarios, ubicación y contacto. Incluye integración con un CMS para administrar productos, horarios y contenidos.

## Tecnologías utilizadas

- **Next.js:** estructura de la aplicación y navegación mediante App Router.
- **TypeScript:** tipado del código.
- **Tailwind CSS:** estilos y diseño adaptable a diferentes pantallas.
- **Sanity CMS:** gestión de productos, categorías y horarios.
- **pnpm:** gestión de dependencias y ejecución de comandos.

## Funcionalidades

- Presentación del negocio.
- Catálogo de productos organizado por categorías.
- Consulta de horarios, ubicación y datos de contacto.
- Diseño adaptable a móviles, tabletas y ordenadores.
- Panel de gestión de contenidos con Sanity Studio.
- Datos locales de respaldo cuando el contenido de Sanity no está disponible.

## Desarrollo local

Instala las dependencias:

```bash
pnpm install
```

Inicia el servidor de desarrollo:

```bash
pnpm dev
```

## Comprobaciones

Ejecuta el análisis del código:

```bash
pnpm lint
```

Comprueba los tipos de TypeScript:

```bash
pnpm exec tsc --noEmit
```

Genera la versión de producción:

```bash
pnpm build
```

## Configuración de Sanity

Sanity Studio está disponible en `/studio`. No se enlaza desde la navegación pública ni se incluye en el sitemap.

### 1. Crear el proyecto

Crea un proyecto y un dataset en [Sanity Manage](https://www.sanity.io/manage).

### 2. Configurar las variables de entorno

Copia `.env.example` a `.env.local` y completa las siguientes variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`: puedes mantener el valor del ejemplo.
- `SANITY_API_READ_TOKEN`: solo si el dataset no es público.

No subas `.env.local` ni tokens privados al repositorio.

### 3. Configurar CORS

Añade `http://localhost:3000` como origen CORS del proyecto en Sanity.

### 4. Abrir Sanity Studio

Arranca el servidor:

```bash
pnpm dev
```

Abre `http://localhost:3000/studio`.

### 5. Importar las categorías iniciales

Inicia sesión en Sanity:

```bash
pnpm exec sanity login
```

Importa las categorías, sustituyendo `<dataset>` por el nombre de tu dataset:

```bash
pnpm exec sanity dataset import sanity/seed/categories.ndjson <dataset>
```

Completa y publica el resto del contenido desde Sanity Studio.

## Contenido y datos de respaldo

Las páginas `/productos` y `/horario` consultan el contenido publicado en Sanity cuando las variables de entorno están configuradas y existen documentos publicados.

Si faltan variables, la consulta falla o no hay contenido publicado, se utilizan los datos locales de respaldo:

- `lib/products.ts`
- `lib/site.ts`

## Despliegue

El proyecto no incluye dependencias exclusivas de una plataforma de alojamiento.

Para desplegarlo, configura la plataforma elegida con las variables de entorno necesarias y el comando de construcción:

```bash
pnpm build
```

Configura `NEXT_PUBLIC_SITE_URL` con la URL pública definitiva para que el sitemap utilice el dominio correcto.

No se incluyen configuraciones específicas de dominio ni webhooks.

## Desarrollo con asistencia de IA

Para el desarrollo del proyecto se ha utilizado OpenCode como herramienta de asistencia de IA para generar y modificar código e implementar funcionalidades.

El proyecto forma parte de un proceso de aprendizaje y desarrollo práctico con Next.js, TypeScript, Tailwind CSS y Sanity CMS.

## Autor

Jorge Toquero
