import type { Metadata } from "next";
import { GoogleMap } from "@/components/google-map";
import {
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ubicación | Dulce y Salado",
  description:
    "Encuentra Dulce y Salado en C/ Acera del Mar 66, Torrenueva Costa.",
};

export default function UbicacionPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Ubicación"
        title="En el corazón de Torrenueva Costa"
        description="Ven a visitarnos y descubre nuestro despacho de pan y bollería."
      />

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-10 lg:py-24">
        <div className="rounded-[2rem] border border-marron/10 bg-blanco p-6 shadow-sm sm:p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-dorado/20 text-marron">
            <MapPinIcon className="h-6 w-6" />
          </span>

          <h2 className="mt-5 font-display text-2xl font-semibold text-marron sm:text-3xl">
            Dirección
          </h2>
          <address className="mt-2 text-base not-italic leading-7 text-marron/75">
            {site.address}
          </address>

          <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-marron/60">
            Contacto
          </h3>
          <p className="mt-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-sm text-base font-semibold text-marron transition-colors hover:text-naranja focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marron"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
          </p>

          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-naranja px-6 py-3 text-sm font-bold text-marron transition-colors hover:bg-dorado focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marron"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pedir por WhatsApp
          </a>
        </div>

        <GoogleMap />
      </section>
    </main>
  );
}
