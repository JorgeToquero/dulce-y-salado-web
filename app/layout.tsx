import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import { CookieConsentProvider } from "@/components/cookie-consent";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dulce y Salado | Despacho de pan y bollería en Torrenueva Costa",
  description:
    "Despacho de pan y bollería de Carmen Hidalgo Sánchez en Torrenueva Costa. Dulce y salado, recién hecho cada día.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
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
        </CookieConsentProvider>
      </body>
    </html>
  );
}
