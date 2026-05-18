import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Ambil URL domain dari environment variable, atau gunakan fallback jika tidak ada.
  // Ganti 'https://muhamadhafiudinbagir.my.id' jika domain Anda berbeda.
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hafiudinbagir.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
