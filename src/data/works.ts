export type Work = {
  title: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  image: string;
  logo: string;
  url?: string;
};

export const works: Work[] = [
  {
    title: "ZEOTON – Gaming Accessories Store",
    description:
      "E-commerce store for gaming gear across Pakistan with category browsing, wishlist, compare, order tracking, Cash on Delivery and WhatsApp support.",
    year: "2025",
    role: "Full Stack Developer",
    tags: ["Next.js", "E-commerce", "Cloudinary"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85",
    logo: "/assets/images/logo/logo-2.svg",
    url: "https://www.zeoton.online/",
  },
  {
    title: "Nadeem Marbles – Tile & Marble Fixing",
    description:
      "Bilingual (English/Urdu) business site for a Karachi tile and marble contractor, with service pages and an interactive 3D floor preview for stones, patterns and tile sizes.",
    year: "2025",
    role: "Full Stack Developer",
    tags: ["Next.js", "i18n", "3D Preview"],
    image: "https://nadeem-marble.vercel.app/images/stock/hero-marble-lobby.webp",
    logo: "/assets/images/logo/logo-2.svg",
    url: "https://nadeem-marble.vercel.app/en",
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "Responsive web applications built with React JS, Next.js, Node.js, and modern API integrations.",
    year: "2025 - Present",
    role: "Full Stack Developer",
    tags: ["React JS", "Next.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    logo: "/assets/images/logo/logo-2.svg",
  },
  {
    title: "REST APIs & Business Dashboards",
    description:
      "Secure backend services, admin dashboards, and third-party integrations for business workflows.",
    year: "2025",
    role: "Backend Developer",
    tags: ["Express.js", "MongoDB", "MySQL"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
    logo: "/assets/images/logo/logo-2.svg",
  },
  {
    title: "Cross-Platform Mobile Apps",
    description:
      "Mobile experiences developed with React Native and connected to reliable Node.js backend services.",
    year: "2024 - 2025",
    role: "Full Stack Developer",
    tags: ["React Native", "REST APIs", "Database"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    logo: "/assets/images/logo/logo-2.svg",
  },
];
