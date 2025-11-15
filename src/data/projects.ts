import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "atom-webapp",
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
    tags: ["Flutterflow","Javascript"],
  },
  {
    id: "log-entry-app-nodejs",
    title: "Log Entry App",
    description:
      "A secure digital log entry app for gated communities to record, monitor, and manage visitor and resident access efficiently",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/railwayard/log_entry-_app",
    tags: ["Node.js","MongoDB","Express.js"],
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


];
export default projects;
