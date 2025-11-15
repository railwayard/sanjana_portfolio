import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/javascript.svg",
      },
      // {
      //   title: "TypeScript",
      //   level: SkillLevel.Intermediate,
      //   icon: "/skills/typescript.svg",
      // },
      {
        title: "Node.js",
        level: SkillLevel.Intermediate,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "Python",
        level: SkillLevel.Expert,
        icon: "/skills/python.png",
      },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Intermediate,
        icon: "/skills/nextjs.png",
      },
      // {
      //   title: "React.js",
      //   level: SkillLevel.Intermediate,
      //   icon: "/skills/react.svg",
      // },
      {
        title: "Tailwind CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/tailwindcss.png",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "FastAPI",
        level: SkillLevel.Intermediate,
        icon: "/skills/FastAPI.svg",
      },
      {
        title: "Express.js",
        level: SkillLevel.Intermediate,
        icon: "/skills/express.svg",
      },
      {
        title: "Socket.io",
        level: SkillLevel.Intermediate,
        icon: "/skills/socket-io.png",
      },
      {
        title: "Auth0",
        level: SkillLevel.Intermediate,
        icon: "/skills/auth0-icon.png",
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Beginner,
        icon: "/skills/mysql.svg",
      },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      {
        title: "Docker",
        level: SkillLevel.Beginner,
        icon: "/skills/docker.png",
      },
      {
        title: "AWS",
        level: SkillLevel.Beginner,
        icon: "/skills/aws.svg",
      },
      {
        title: "Celery",
        level: SkillLevel.Intermediate,
        icon: "/skills/celery_logo.png",
      },
    ],
  },
  {
    title: "Version Control & Tools",
    items: [
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
      {
        title: "Postman",
        level: SkillLevel.Intermediate,
        icon: "/skills/postman-icon.svg",
      },
    ],
  },
  {
    title: "Design & Prototyping",
    items: [
      {
        title: "Figma",
        level: SkillLevel.Intermediate,
        icon: "/skills/figma-icon.png",
      },
      {
        title: "Canva",
        level: SkillLevel.Intermediate,
        icon: "/skills/canva-icon.svg",
      },
      {
        title: "Framer",
        level: SkillLevel.Beginner,
        icon: "/skills/framer.png",
      },
    ],
  },
  {
    title: "Soft Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/problem-solving.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Thinking",
        level: SkillLevel.Expert,
        icon: "/images/critical-thinking.png",
      },
    ],
  },
];

export default skills;