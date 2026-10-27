export default function Home() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-dorado/20 blur-3xl"
      />

      <section className="relative w-full max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-naranja sm:text-sm">
          Panadería artesanal
        </p>

        <h1 className="mt-6 font-display text-5xl font-semibold leading-none tracking-tight text-marron sm:text-7xl">
          Dulce y Salado
        </h1>

        <p className="mx-auto mt-6 max-w-md text-base leading-7 text-marron/70 sm:text-lg">
          Dulce y salado, recién hecho cada día en Torrenueva Costa.
        </p>

        <div className="mx-auto mt-10 h-px w-20 bg-dorado" />

        <a
          href="tel:+34658879446"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-naranja px-8 py-4 text-base font-semibold text-blanco shadow-sm transition-colors hover:bg-marron focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dorado"
        >
          +34 658 87 94 46
        </a>
      </section>
    </main>
  );
}
