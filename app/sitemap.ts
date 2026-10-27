import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dulceysalado.es";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: new URL("/", baseUrl).toString(),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL("/productos", baseUrl).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: new URL("/horario", baseUrl).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: new URL("/ubicacion", baseUrl).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: new URL("/aviso-legal", baseUrl).toString(),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: new URL("/privacidad", baseUrl).toString(),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: new URL("/cookies", baseUrl).toString(),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
