"use client";

import { useCookieConsent } from "@/components/cookie-consent";
import { MapPinIcon } from "@/components/icons";
import { site } from "@/lib/site";

type GoogleMapProps = {
  address: string;
};

export function GoogleMap({ address }: GoogleMapProps) {
  const { canLoadMap, acceptMap } = useCookieConsent();
  const addressQuery = encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps?q=${addressQuery}&output=embed`;
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

  return (
    <div className="overflow-hidden rounded-[2rem] border border-marron/10 bg-blanco shadow-sm">
      {canLoadMap ? (
        <iframe
          title={`Mapa de ${site.name} en ${address}`}
          src={mapSrc}
          className="h-[26rem] w-full border-0 sm:h-[30rem]"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex min-h-[26rem] flex-col items-center justify-center px-6 py-12 text-center sm:min-h-[30rem]">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-dorado/20 text-marron">
            <MapPinIcon className="h-7 w-7" />
          </span>
          <h2 className="mt-5 font-display text-2xl font-semibold text-marron">
            Mapa de Google
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-marron/70">
            El mapa no se carga sin tu consentimiento. Puedes activarlo cuando
            quieras; al hacerlo, Google puede usar cookies de terceros.
          </p>
          <button
            type="button"
            onClick={acceptMap}
            className="mt-6 rounded-full bg-naranja px-7 py-3 text-sm font-bold text-marron transition-colors hover:bg-dorado focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-marron"
          >
            Cargar mapa
          </button>
          <a
            href={mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded-sm text-sm font-semibold text-marron underline underline-offset-4 transition-colors hover:text-naranja focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marron"
          >
            Abrir en Google Maps
            <span className="sr-only"> (se abre en una nueva pestaña)</span>
          </a>
        </div>
      )}
    </div>
  );
}
