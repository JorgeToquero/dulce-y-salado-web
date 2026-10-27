"use client";

import dynamic from "next/dynamic";

const Studio = dynamic(
  async () => {
    const [{ NextStudio }, { default: config }] = await Promise.all([
      import("next-sanity/studio"),
      import("@/sanity.config"),
    ]);

    return function StudioWithConfig() {
      return <NextStudio config={config} />;
    };
  },
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center bg-white text-sm font-semibold text-marron">
        Cargando Sanity Studio…
      </div>
    ),
  },
);

export function StudioClient() {
  return <Studio />;
}
