import { Suspense } from "react";
import {
  CookieConsentBanner,
  CookieConsentProvider,
} from "@/components/cookie-consent";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-naranja focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-marron"
      >
        Saltar al contenido
      </a>
      <CookieConsentProvider>
        <Header />
        <div id="contenido" className="flex flex-1 flex-col">
          {children}
        </div>
        <Footer />
        <Suspense fallback={null}>
          <CookieConsentBanner />
        </Suspense>
      </CookieConsentProvider>
    </>
  );
}
