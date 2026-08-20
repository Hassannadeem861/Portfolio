export type TechItem = {
  name: string;
  duty: string;
  image?: { light: string; dark?: string; width: number; height: number };
  progress: number;
};

export const techStack: TechItem[] = [
  {
    name: "React JS",
    duty: "Component-based frontend development",
    progress: 90,
  },
  {
    name: "Next.js",
    duty: "Production-ready React applications",
    progress: 88,
  },
  {
    name: "Node.js",
    duty: "Scalable server-side JavaScript",
    progress: 85,
  },
  {
    name: "Express.js",
    duty: "Fast and maintainable APIs",
    progress: 84,
  },
  {
    name: "MongoDB",
    duty: "Flexible document database solutions",
    progress: 82,
  },
  {
    name: "MySQL",
    duty: "Reliable relational data modeling",
    progress: 80,
  },
];
