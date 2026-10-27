import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { isSanityConfigured } from "@/sanity/env";
import { StudioClient } from "./studio-client";

export const instant = false;

export const metadata: Metadata = {
  title: "Sanity Studio | Dulce y Salado",
  robots: { index: false, follow: false },
  referrer: "same-origin",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="fixed inset-0 z-[100] flex items-center justify-center overflow-auto bg-crema p-4">
        <div className="w-full max-w-xl rounded-[2rem] border border-marron/10 bg-blanco p-6 shadow-sm sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-naranja">
            Sanity Studio
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-marron">
            Falta configurar el proyecto
          </h1>
          <p className="mt-3 text-sm leading-6 text-marron/70">
            Añade estas variables en <code>.env.local</code> y vuelve a cargar
            la página:
          </p>
          <ul className="mt-4 space-y-2 rounded-2xl bg-crema p-4 text-sm text-marron">
            <li>
              <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code>
            </li>
            <li>
              <code>NEXT_PUBLIC_SANITY_DATASET</code>
            </li>
            <li>
              <code>NEXT_PUBLIC_SANITY_API_VERSION</code>
            </li>
            <li>
              <code>SANITY_API_READ_TOKEN</code> (opcional)
            </li>
          </ul>
          <Link
            href="/"
            className="mt-6 inline-flex rounded-full bg-marron px-6 py-3 text-sm font-semibold text-crema transition-colors hover:bg-naranja hover:text-marron focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marron"
          >
            Volver al sitio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-white">
      <Suspense
        fallback={
          <div className="flex h-full items-center justify-center text-sm font-semibold text-marron">
            Cargando Sanity Studio…
          </div>
        }
      >
        <StudioClient />
      </Suspense>
    </div>
  );
}
