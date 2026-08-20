import type { Metadata, Viewport } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import BootstrapClient from "@/hooks/BootstrapClient";
import SmoothScroll from "@/hooks/SmoothScroll";
import "./globals.scss";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-swart-eight-20.vercel.app";
const siteTitle = "Muhammad Hassan Nadeem | MERN Stack Developer";
const siteDescription =
    "Muhammad Hassan Nadeem is a MERN Stack Developer specializing in React, Next.js, Node.js, Express.js, MongoDB, and modern full-stack web applications.";
const profileImage = `${siteUrl}/assets/images/avatar/about2.png`;

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: siteTitle,
        template: "%s | Muhammad Hassan Nadeem",
    },
    description: siteDescription,
    keywords: [
        "MERN Stack Developer",
        "Full Stack Developer",
        "React Developer",
        "Next.js Developer",
        "Node.js Developer",
        "MongoDB",
        "JavaScript",
        "REST APIs",
        "web application development",
    ],
    authors: [{ name: "Muhammad Hassan Nadeem", url: siteUrl }],
    creator: "Muhammad Hassan Nadeem",
    publisher: "Muhammad Hassan Nadeem",
    alternates: { canonical: "/" },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    openGraph: {
        type: "website",
        url: siteUrl,
        title: siteTitle,
        description: siteDescription,
        siteName: "Muhammad Hassan Nadeem Portfolio",
        locale: "en_US",
        images: [{ url: profileImage, width: 1200, height: 630, alt: siteTitle }],
    },
    twitter: {
        card: "summary_large_image",
        title: siteTitle,
        description: siteDescription,
        images: [profileImage],
    },
    icons: {
        icon: "/assets/images/logo/favicon.svg",
        apple: "/assets/images/logo/favicon.svg",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Muhammad Hassan Nadeem",
        jobTitle: "MERN Stack Developer",
        url: siteUrl,
        image: profileImage,
        email: "mailto:m.hassan.nadeem987@gmail.com",
        telephone: "03164593747",
        description:
            "MERN Stack Developer and Full Stack Developer building modern web applications with React, Next.js, Node.js, Express.js, and MongoDB.",
        knowsAbout: [
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "MySQL",
            "JavaScript",
            "REST APIs",
            "Full Stack Development",
            "MERN Stack",
        ],
        sameAs: [
            "https://github.com/hassannadeem861",
            "https://www.linkedin.com/in/hassannadeem861",
        ],
    };

    return (
        <html lang="en-US" suppressHydrationWarning>
            <body>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
                <BootstrapClient />
                <SmoothScroll>
                    <ThemeProvider>{children}</ThemeProvider>
                </SmoothScroll>
            </body>
        </html>
    );
}
