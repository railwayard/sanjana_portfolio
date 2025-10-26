import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "social-media-api-nodejs",
    title: "ATOM",
    description:
      "Atomias is a Next.js UPSC test app using Firebase for secure authentication and data management.",
    icon: "/skills/firebase.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    url: "https://www.atomias.com/",
    tags: ["Next.js","Firebase"],
  },
  {
    id: "low-code-software",
    title: "PVR Cars",
    description:
      "PVR Car is a low-code platform built with FlutterFlow, developed using JavaScript.",
    icon: "/skills/flutterflow.jpeg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    tags: ["Flutterflow"],
  },
  {
    id: "review-app-api-python",
    title: "Review App",
    description:
      "Book review and management app for book lovers, built using FastAPI and PostgreSQL for efficient data handling and performance.",
    icon: "/skills/python.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    // url: "",
    tags: ["Fastapi","Next.js","Postgresql","Docker"],
  },
    {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js and Sass.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nixrajput/portfolio-website",
    tags: ["Next.js"],
  },

];
export default projects;
