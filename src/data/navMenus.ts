import { INavItem } from "@/types";
import {
  faUser,
  faTimeline,
  faAward,
  faLaptopCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const navMenus: INavItem[] = [
  {
    name: "About",
    link: "/#about",
    icon: faUser,
  },
  {
    name: "Experiences",
    link: "/#experiences",
    icon: faTimeline,
  },
  {
    name: "Skills",
    link: "/#skills",
    icon: faAward,
  },
  {
    name: "Projects",
    link: "/#projects",
    icon: faLaptopCode,
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: faEnvelope,
  },
];
