# Dulce y Salado

Dulce y Salado — Web informativa para un despacho de pan y bollería en Torrenueva Costa. Desarrollada con Next.js, TypeScript, Tailwind CSS y Sanity CMS. Incluye gestión de productos, horarios, ubicación y contenidos desde un CMS.

## Desarrollo

```bash
pnpm install
pnpm dev
```

## Comprobaciones

```bash
pnpm lint
pnpm exec tsc --noEmit
```

## Sanity

El Studio está disponible en `/studio`, no se enlaza desde la web y no se
incluye en el sitemap.

1. Crea un proyecto y un dataset en [sanity.io/manage](https://www.sanity.io/manage).
2. Copia `.env.example` a `.env.local` y completa las variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION` (puedes mantener el valor del ejemplo)
   - `SANITY_API_READ_TOKEN` solo si el dataset no es público.
3. Añade `http://localhost:3000` como origen CORS del proyecto en Sanity.
4. Arranca `pnpm dev` y abre `http://localhost:3000/studio`.
5. Importa las categorías iniciales, sustituyendo `<dataset>` por el nombre de
   tu dataset:

```bash
pnpm exec sanity login
pnpm exec sanity dataset import sanity/seed/categories.ndjson <dataset>
```

6. Completa el resto del contenido desde el Studio.

`/productos` y `/horario` leen contenido publicado de Sanity cuando las
variables están configuradas y existe contenido. Si faltan variables, la
consulta falla o no hay documentos publicados, se usan los datos locales de
`lib/products.ts` y `lib/site.ts`.

No se ha configurado despliegue, dominio, webhooks ni servicios externos.

## Despliegue

El proyecto no incluye dependencias exclusivas de ninguna plataforma. Puede
desplegarse directamente en Vercel o Netlify importando el repositorio; ambas
plataformas detectan Next.js y usan `pnpm build`.

Configura `NEXT_PUBLIC_SITE_URL` con la URL pública definitiva para que el
sitemap use el dominio correcto.
