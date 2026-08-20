export type Work = {
  title: string;
  description: string;
  year: string;
  role: string;
  tags: string[];
  image: string;
  logo: string;
};

export const works: Work[] = [
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
