import Link from "next/link";
import { CroissantLogo, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { site } from "@/lib/site";
import type { ScheduleItem } from "@/sanity/lib/data";

type FooterProps = {
  address: string;
  phoneDisplay: string | null;
  phoneHref: string | null;
  whatsappHref: string | null;
  schedule: ScheduleItem[];
};

export function Footer({
  address,
  phoneDisplay,
  phoneHref,
  whatsappHref,
  schedule,
}: FooterProps) {
  return (
    <footer className="bg-marron text-crema">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
        <div className="lg:col-span-2">
          <Link
            href="/#inicio"
            className="inline-flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dorado"
            aria-label="Dulce y Salado, ir al inicio"
          >
            <CroissantLogo className="h-8 w-8 text-dorado" />
            <span className="font-display text-2xl font-semibold text-crema">
              Dulce y Salado
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-crema/70">
            Despacho de pan y bollería. Dulce y
            salado, recién hecho cada día.
          </p>
        </div>

        <div id="horario" className="scroll-mt-24">
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-dorado">
            Horario
          </h2>
          <p className="mt-1 text-xs text-crema/70">Provisional</p>
          <dl className="mt-4 space-y-3 text-sm">
            {schedule.map((item) => (
              <div key={item.days}>
                <dt className="font-semibold text-crema">{item.days}</dt>
                <dd className="mt-0.5 text-crema/70">{item.hours}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div id="ubicacion" className="scroll-mt-24">
          <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-dorado">
            Contacto
          </h2>
          <address className="mt-4 space-y-3 text-sm not-italic leading-6 text-crema/70">
            <p>{address}</p>
            <p>
              {phoneHref && phoneDisplay ? (
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2 rounded-sm font-semibold text-dorado transition-colors hover:text-crema focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dorado"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {phoneDisplay}
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  title="Teléfono próximamente"
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-sm font-semibold text-crema/40"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Teléfono próximamente
                </span>
              )}
            </p>
            <p>
              {whatsappHref ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm font-semibold text-dorado transition-colors hover:text-crema focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dorado"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  title="WhatsApp próximamente"
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-sm font-semibold text-crema/40"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp próximamente
                </span>
              )}
            </p>
            <p>
              <Link
                href="/contacto"
                className="rounded-sm font-semibold text-dorado transition-colors hover:text-crema focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dorado"
              >
                Formulario de contacto
              </Link>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-crema/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-crema/60 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>© Dulce y Salado · {site.owner}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {site.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-sm transition-colors hover:text-dorado focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dorado"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
