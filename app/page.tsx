import Image from "next/image";
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
          alt="Hogazas de pan artesanal recién horneadas con espigas de trigo"
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
            Panadería artesanal · Torrenueva Costa
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-crema sm:text-6xl lg:text-7xl">
            Dulce y Salado
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-crema/85 sm:text-xl">
            El sabor de lo recién hecho. Panes, dulces y salados elaborados cada
            día con calma y cariño.
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
        id="productos"
        aria-labelledby="productos-title"
        className="mx-auto grid w-full max-w-6xl scroll-mt-24 gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-28"
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
            Nuestra panadería
          </p>
          <h2
            id="productos-title"
            className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-marron sm:text-5xl"
          >
            Hecho a mano, con calma y cariño
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-marron/75 sm:text-lg sm:leading-8">
            En Dulce y Salado creemos que las cosas buenas se hacen despacio.
            Cada mañana amasamos, horneamos y cuidamos cada pieza para que llegue
            a tu mesa recién salida del horno.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-marron/75 sm:text-lg sm:leading-8">
            Carmen Hidalgo Sánchez te espera en Torrenueva Costa con panes,
            bollería y salados para compartir.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {["Panadería", "Bollería", "Salados"].map((label) => (
              <li
                key={label}
                className="rounded-full border border-dorado/50 bg-blanco px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-marron"
              >
                {label}
              </li>
            ))}
          </ul>

          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-marron px-7 py-4 text-sm font-semibold text-crema transition-colors hover:bg-naranja hover:text-marron focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marron sm:text-base"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Hablemos por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
