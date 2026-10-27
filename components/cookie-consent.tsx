"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

const STORAGE_KEY = "cookie-consent";

type ConsentValue = "accepted" | "rejected" | "map-accepted";
type ConsentSnapshot = ConsentValue | "none" | "loading";

type CookieConsentContextValue = {
  canLoadMap: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  acceptMap: () => void;
};

const CookieConsentContext =
  createContext<CookieConsentContextValue | null>(null);

let cachedConsent: ConsentSnapshot | undefined;
const listeners = new Set<() => void>();

function parseConsent(value: string | null): ConsentValue | null {
  if (
    value === "accepted" ||
    value === "rejected" ||
    value === "map-accepted"
  ) {
    return value;
  }

  return null;
}

function readStoredConsent(): ConsentValue | null {
  try {
    return parseConsent(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

function writeStoredConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    return;
  }
}

function getConsentSnapshot(): ConsentSnapshot {
  if (typeof window === "undefined") {
    return "loading";
  }

  if (cachedConsent === undefined) {
    cachedConsent = readStoredConsent() ?? "none";
  }

  return cachedConsent;
}

function getServerConsentSnapshot(): ConsentSnapshot {
  return "loading";
}

function subscribeToConsent(listener: () => void) {
  listeners.add(listener);

  const handleStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) {
      return;
    }

    cachedConsent = parseConsent(event.newValue) ?? "none";
    listener();
  };

  window.addEventListener("storage", handleStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function updateConsent(value: ConsentValue) {
  cachedConsent = value;
  writeStoredConsent(value);
  listeners.forEach((listener) => listener());
}

function isExcludedPath(pathname: string) {
  return ["/admin", "/studio"].some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );
}

export function CookieConsentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const pathname = usePathname();

  const acceptAll = useCallback(() => updateConsent("accepted"), []);
  const rejectAll = useCallback(() => updateConsent("rejected"), []);
  const acceptMap = useCallback(() => updateConsent("map-accepted"), []);

  const canLoadMap = consent === "accepted" || consent === "map-accepted";
  const showBanner = consent === "none" && !isExcludedPath(pathname);

  const value = useMemo(
    () => ({ canLoadMap, acceptAll, rejectAll, acceptMap }),
    [canLoadMap, acceptAll, rejectAll, acceptMap],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {showBanner ? (
        <CookieBanner onAcceptAll={acceptAll} onReject={rejectAll} />
      ) : null}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error(
      "useCookieConsent debe utilizarse dentro de CookieConsentProvider",
    );
  }

  return context;
}

function CookieBanner({
  onAcceptAll,
  onReject,
}: {
  onAcceptAll: () => void;
  onReject: () => void;
}) {
  const buttonClassName =
    "inline-flex justify-center rounded-full bg-marron px-6 py-3 text-sm font-semibold text-crema transition-colors hover:bg-naranja hover:text-marron focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marron";

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] p-4 sm:p-6">
      <section
        role="region"
        aria-labelledby="cookie-consent-title"
        className="mx-auto max-w-4xl rounded-[1.75rem] border border-marron/15 bg-crema p-5 shadow-2xl shadow-marron/20 sm:p-6"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2
              id="cookie-consent-title"
              className="font-display text-xl font-semibold text-marron"
            >
              Cookies
            </h2>
            <p className="mt-2 text-sm leading-6 text-marron/75">
              Usamos almacenamiento técnico necesario. El mapa de Google solo se
              carga si aceptas todas o si lo activas manualmente. Más
              información en la{" "}
              <Link
                href="/cookies"
                className="rounded-sm font-semibold underline underline-offset-4 hover:text-naranja focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marron"
              >
                política de cookies
              </Link>
              .
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={onAcceptAll}
              className={buttonClassName}
            >
              Aceptar todas
            </button>
            <button
              type="button"
              onClick={onReject}
              className={buttonClassName}
            >
              Rechazar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
