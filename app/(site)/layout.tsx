import { Suspense } from "react";
import {
  CookieConsentBanner,
  CookieConsentProvider,
} from "@/components/cookie-consent";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getSiteContact, getSiteSchedule } from "@/lib/site-content";

export default async function SiteLayout({ children }: LayoutProps<"/">) {
  const [contact, schedule] = await Promise.all([
    getSiteContact(),
    getSiteSchedule(),
  ]);

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-naranja focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-marron"
      >
        Saltar al contenido
      </a>
      <CookieConsentProvider>
        <Header whatsappHref={contact.whatsappHref} />
        <div id="contenido" className="flex flex-1 flex-col">
          {children}
        </div>
        <Footer
          address={contact.address}
          phoneDisplay={contact.phone}
          phoneHref={contact.phoneHref}
          whatsappHref={contact.whatsappHref}
          schedule={schedule}
        />
        <Suspense fallback={null}>
          <CookieConsentBanner />
        </Suspense>
      </CookieConsentProvider>
    </>
  );
}
