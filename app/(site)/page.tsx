import Image from "next/image";
import Link from "next/link";
import croissants from "@/public/images/obrador-croissants.jpg";
import heroBread from "@/public/images/hero-pan.jpg";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section
        id="inicio"
        className="relative isolate scroll-mt-24 overflow-hidden"
      >
        <Image
          src={heroBread}
          alt="Hogazas de pan recién horneadas con espigas de trigo"
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-marron/95 via-marron/80 to-marron/80 sm:bg-gradient-to-r sm:from-marron/95 sm:via-marron/75 sm:to-marron/30"
        />

        <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 sm:py-32 lg:min-h-[38rem] lg:py-40">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-dorado sm:text-sm">
            Despacho de pan y bollería · Torrenueva Costa
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-crema sm:text-6xl lg:text-7xl">
            Dulce y Salado
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-crema/85 sm:text-xl">
            El sabor de lo recién hecho. Pan, bollería, tortas y dulces para
            cada día.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-naranja px-7 py-4 text-sm font-semibold text-marron shadow-sm transition-colors hover:bg-dorado focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dorado sm:text-base"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pedir por WhatsApp
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-crema/40 px-7 py-4 text-sm font-semibold text-crema transition-colors hover:bg-crema hover:text-marron focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dorado sm:text-base"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section
        id="nosotros"
        aria-labelledby="nosotros-title"
        className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28"
      >
        <div className="relative order-2 lg:order-1">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 h-2/3 w-2/3 rounded-[2rem] bg-dorado/25 sm:-bottom-5 sm:-left-5"
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl shadow-marron/10">
            <Image
              src={croissants}
              alt="Croissants recién horneados espolvoreados con azúcar glas"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-marron/75">
            Nuestro despacho
          </p>
          <h2
            id="nosotros-title"
            className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-marron sm:text-5xl"
          >
            Dulce y salado, recién hecho
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-marron/75 sm:text-lg sm:leading-8">
            En Dulce y Salado encontrarás pan, bollería, tortas y dulces para
            que siempre tengas algo bueno cerca. Cada día cuidamos cada detalle
            para que llegue a tu mesa en su mejor momento.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-marron/75 sm:text-lg sm:leading-8">
            Carmen Hidalgo Sánchez te espera en Torrenueva Costa con una
            selección dulce y salada para compartir.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {["Pan", "Bollería", "Tortas y dulces"].map((label) => (
              <li
                key={label}
                className="rounded-full border border-dorado/50 bg-blanco px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-marron"
              >
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-marron px-7 py-4 text-sm font-semibold text-crema transition-colors hover:bg-naranja hover:text-marron focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marron sm:text-base"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Hablemos por WhatsApp
            </a>
            <Link
              href="/productos"
              className="inline-flex items-center justify-center rounded-full border border-marron/20 px-7 py-4 text-sm font-semibold text-marron transition-colors hover:bg-blanco focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marron sm:text-base"
            >
              Ver productos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
