import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-swart-eight-20.vercel.app";

const publicRoutes = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
    return publicRoutes.map((route) => ({
        url: new URL(route.path, siteUrl).toString(),
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
