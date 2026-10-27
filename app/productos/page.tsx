import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { WhatsAppIcon } from "@/components/icons";
import { productCategories } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Productos | Dulce y Salado",
  description:
    "Pan, bollería, tortas y dulces, y encargos en Dulce y Salado, despacho de pan y bollería en Torrenueva Costa.",
};

export default function ProductosPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PageHero
        eyebrow="Productos"
        title="Dulce y salado para cada momento"
        description="Un despacho de pan y bollería en Torrenueva Costa. Encuentra pan, bollería, tortas y dulces, y encargos para tus celebraciones."
      >
        <nav
          aria-label="Categorías de productos"
          className="mt-8 flex flex-wrap gap-2"
        >
          {productCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-crema/25 px-4 py-2 text-sm font-semibold text-crema/85 transition-colors hover:border-dorado hover:text-dorado focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dorado"
            >
              {category.name}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="space-y-20">
          {productCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              aria-labelledby={`${category.id}-title`}
              className="scroll-mt-24"
            >
              <div className="max-w-2xl">
                <h2
                  id={`${category.id}-title`}
                  className="font-display text-3xl font-semibold leading-tight tracking-tight text-marron sm:text-4xl"
                >
                  {category.name}
                </h2>
                <p className="mt-3 text-base leading-7 text-marron/70">
                  {category.description}
                </p>
              </div>

              <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.products.map((product) => (
                  <li
                    key={product.name}
                    className="group overflow-hidden rounded-3xl border border-marron/10 bg-blanco shadow-sm"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={`${product.name} de ${site.name}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-2xl font-semibold text-marron">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-marron/70">
                        {product.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <aside className="mt-20 overflow-hidden rounded-[2rem] bg-marron px-6 py-10 text-center text-crema sm:px-10 sm:py-12">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            ¿Tienes una celebración en mente?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-crema/80">
            Cuéntanos qué necesitas y te ayudamos con tu encargo.
          </p>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-naranja px-7 py-4 text-sm font-bold text-marron transition-colors hover:bg-dorado focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dorado sm:text-base"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Pedir por WhatsApp
          </a>
        </aside>
      </div>
    </main>
  );
}
