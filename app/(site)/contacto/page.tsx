import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { getSiteContact, getSiteSchedule } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contacto | Dulce y Salado",
  description:
    "Contacta con Dulce y Salado en Torrenueva Costa por WhatsApp, teléfono o formulario. Consulta la dirección y el horario provisional.",
};

export default async function ContactoPage() {
  const [contact, schedule] = await Promise.all([
    getSiteContact(),
    getSiteSchedule(),
  ]);

  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de lo que necesitas"
        description="Escríbenos por WhatsApp, llámanos o déjanos tu consulta en el formulario. Te ayudamos con pedidos, encargos y cualquier duda."
      />

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-10 lg:py-24">
        <div className="space-y-6">
          <div className="rounded-[2rem] bg-marron p-6 text-crema shadow-sm sm:p-8">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Contacto directo
            </h2>
            <p className="mt-2 text-sm leading-6 text-crema/75">
              La forma más rápida de resolver una duda o hacer un encargo.
            </p>

            {contact.whatsappHref ? (
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-naranja px-6 py-3.5 text-sm font-bold text-marron transition-colors hover:bg-dorado focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dorado sm:text-base"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Escribir por WhatsApp
                <span className="sr-only"> (se abre en una nueva pestaña)</span>
              </a>
            ) : (
              <span
                aria-disabled="true"
                title="WhatsApp próximamente"
                className="mt-6 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-naranja/60 px-6 py-3.5 text-sm font-bold text-marron/80 sm:text-base"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp próximamente
              </span>
            )}

            {contact.phoneHref && contact.phone ? (
              <a
                href={contact.phoneHref}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-crema/25 px-6 py-3.5 text-sm font-semibold text-crema transition-colors hover:border-dorado hover:text-dorado focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dorado sm:text-base"
              >
                <PhoneIcon className="h-5 w-5" />
                {contact.phone}
              </a>
            ) : (
              <span
                aria-disabled="true"
                title="Teléfono próximamente"
                className="mt-3 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-crema/25 px-6 py-3.5 text-sm font-semibold text-crema/45 sm:text-base"
              >
                <PhoneIcon className="h-5 w-5" />
                Teléfono próximamente
              </span>
            )}
          </div>

          <div className="rounded-[2rem] border border-marron/10 bg-blanco p-6 shadow-sm sm:p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-dorado/20 text-marron">
              <MapPinIcon className="h-6 w-6" />
            </span>

            <h2 className="mt-5 font-display text-2xl font-semibold text-marron sm:text-3xl">
              Dirección
            </h2>
            <address className="mt-2 text-base not-italic leading-7 text-marron/75">
              {contact.address}
            </address>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-marron/60">
                Horario provisional
              </h3>
              <span className="inline-flex items-center gap-2 rounded-full bg-dorado/20 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-marron">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-naranja"
                />
                Pendiente de confirmar
              </span>
            </div>

            <dl className="mt-4 divide-y divide-marron/10 border-t border-marron/10">
              {schedule.map((item) => (
                <div
                  key={item.days}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <dt className="font-semibold text-marron">{item.days}</dt>
                  <dd className="text-sm text-marron/70">{item.hours}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-3 text-xs leading-5 text-marron/60">
              Estas horas son orientativas y pueden variar en festivos.
            </p>

            <Link
              href="/horario"
              className="mt-5 inline-flex rounded-sm text-sm font-semibold text-marron underline underline-offset-4 transition-colors hover:text-naranja focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marron"
            >
              Ver horario completo
            </Link>
          </div>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
