"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CroissantLogo, MenuIcon, WhatsAppIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-marron/10 bg-crema/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/#inicio"
          className="flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marron"
          aria-label="Dulce y Salado, ir al inicio"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blanco ring-1 ring-dorado/40">
            <CroissantLogo className="h-7 w-7 text-naranja" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-naranja sm:text-2xl">
            Dulce y Salado
          </span>
        </Link>

        <nav aria-label="NavegaciÃ³n principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`rounded-md text-sm font-semibold transition-colors hover:text-naranja focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marron ${
                    isActive(item.href)
                      ? "text-marron underline decoration-naranja decoration-2 underline-offset-8"
                      : "text-marron/75"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-naranja px-5 py-2.5 text-sm font-bold text-marron transition-colors hover:bg-dorado focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marron sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menÃº" : "Abrir menÃº"}
            onClick={() => setOpen((isOpen) => !isOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-marron/15 text-marron transition-colors hover:bg-dorado/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marron lg:hidden"
          >
            <MenuIcon className="h-6 w-6" open={open} />
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        hidden={!open}
        className="border-t border-marron/10 bg-crema lg:hidden"
      >
        <nav
          aria-label="NavegaciÃ³n mÃ³vil"
          className="mx-auto max-w-6xl px-4 py-6 sm:px-6"
        >
          <ul className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-3 py-3 text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marron ${
                    isActive(item.href)
                      ? "bg-dorado/20 text-marron"
                      : "text-marron hover:bg-dorado/15"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-naranja px-5 py-3 text-sm font-bold text-marron transition-colors hover:bg-dorado focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marron"
          >
            <WhatsAppIcon className="h-4 w-4" />
            EscrÃ­benos por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
