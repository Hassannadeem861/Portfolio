export type TimelineItem = {
  period: string;
  role: string;
  description: string;
  details?: string[];
  icon?: { light: string; dark?: string; width: number; height: number };
  iconLabel?: string;
};

export const educationItems: TimelineItem[] = [
  {
    period: "November 2025 - Present",
    role: "Undergraduate Student at Virtual University of Pakistan",
    description:
      "Currently continuing my degree and preparing to start the third semester.",
    details: [
      "Admission completed in November 2025.",
      "Third semester is currently in progress.",
    ],
    iconLabel: "VU",
  },
  {
    period: "November 2025 - Present",
    role: "Full Stack Developer at Tecxeo Private Limited",
    description:
      "Building and maintaining full-stack web applications for client projects.",
    details: [
      "Developing and maintaining full-stack web applications using React JS and Node JS.",
      "Building RESTful APIs and integrating third-party services for client projects.",
      "Collaborating in an agile team to deliver product features on schedule.",
    ],
    iconLabel: "TP",
  },
  {
    period: "January 2025 - October 2025",
    role: "Full Stack Developer at EB Technologies",
    description:
      "Delivered responsive web and backend solutions for business and client projects.",
    details: [
      "Designed and developed responsive web interfaces with React JS and Bootstrap.",
      "Built and deployed backend services using Node JS, Express, and MongoDB.",
      "Worked on cross-platform mobile applications using React Native.",
    ],
    iconLabel: "EB",
  },
  {
    period: "July 2024 - October 2024",
    role: "Full Stack Developer Trainee at Saylani Boot Camp",
    description:
      "Completed intensive practical training in modern full-stack web development.",
    details: [
      "Completed an intensive bootcamp covering MERN stack fundamentals.",
      "Built capstone projects to apply frontend, backend, and database concepts.",
    ],
    iconLabel: "SB",
  },
];
