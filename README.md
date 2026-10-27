# Dulce y Salado

Despacho de pan y bollería de Carmen Hidalgo Sánchez en Torrenueva Costa.

Proyecto base construido con Next.js (App Router), TypeScript y Tailwind CSS.

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

## Despliegue

El proyecto no incluye dependencias exclusivas de ninguna plataforma. Puede
desplegarse directamente en Vercel o Netlify importando el repositorio; ambas
plataformas detectan Next.js y usan `pnpm build`.

Configura `NEXT_PUBLIC_SITE_URL` con la URL pública definitiva para que el
sitemap use el dominio correcto.
