import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { getSchedule } from "@/sanity/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Horario | Dulce y Salado",
  description:
    "Consulta el horario provisional de Dulce y Salado, despacho de pan y bollería en Torrenueva Costa.",
};

export default async function HorarioPage() {
  const schedule = await getSchedule();

  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Horario"
        title="Te esperamos cada día"
        description="Este es el horario provisional de Dulce y Salado en Torrenueva Costa."
      />

      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="rounded-[2rem] border border-marron/10 bg-blanco p-6 shadow-sm sm:p-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-dorado/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-marron">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-naranja"
            />
            Pendiente de confirmar
          </span>

          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-marron sm:text-4xl">
            Horario provisional
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-marron/70">
            Estas horas son orientativas y están pendientes de confirmación.
            Pueden variar en festivos.
          </p>

          <dl className="mt-8 divide-y divide-marron/10 border-t border-marron/10">
            {schedule.map((item) => (
              <div
                key={`${item.days}-${item.hours}`}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <dt className="font-semibold text-marron">{item.days}</dt>
                <dd className="text-sm text-marron/70 sm:text-base">
                  <span>{item.hours}</span>
                  {item.note ? (
                    <span className="mt-1 block text-xs text-marron/55">
                      {item.note}
                    </span>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8 rounded-[2rem] bg-blanco px-6 py-8 shadow-sm ring-1 ring-marron/10 sm:px-10">
          <h2 className="font-display text-2xl font-semibold text-marron sm:text-3xl">
            ¿Quieres confirmar antes de venir?
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-marron/70">
            Llámanos o escríbenos por WhatsApp y te ayudamos con cualquier duda.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-marron/20 px-6 py-3 text-sm font-semibold text-marron transition-colors hover:bg-crema focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marron"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-naranja px-6 py-3 text-sm font-bold text-marron transition-colors hover:bg-dorado focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marron"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
