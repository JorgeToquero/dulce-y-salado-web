import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";

type LegalPageProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function LegalPage({ title, description, children }: LegalPageProps) {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Información legal"
        title={title}
        description={description}
      />

      <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <article className="rounded-[2rem] border border-marron/10 bg-blanco p-6 shadow-sm sm:p-10">
          <div className="space-y-8 text-sm leading-7 text-marron/80 sm:text-base sm:leading-8">
            {children}
          </div>
          <p className="mt-10 border-t border-marron/10 pt-6 text-xs leading-6 text-marron/60">
            Este texto es una versión inicial. Los datos marcados como
            «Pendiente» deben completarse y el contenido debe revisarse antes de
            la publicación definitiva.
          </p>
        </article>
      </div>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold leading-tight text-marron">
        {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export function PendingBadge() {
  return (
    <span className="ml-1 inline-flex align-middle rounded-full bg-dorado/25 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-marron">
      Pendiente
    </span>
  );
}
