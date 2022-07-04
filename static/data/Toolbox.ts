import {
  IoLogoReact,
  IoLogoGithub,
  IoLogoPython
} from "react-icons/io5";
import {
  SiFlask,
  SiMongodb,
  SiUnrealengine,
  SiGit,
  SiFastapi,
  SiTypescript,
  SiNextdotjs,
  SiGatsby
} from "react-icons/si";

export const skills = {
  frontend: [
    {
      icon: SiTypescript,
      name: "TypeScript",
      color: "#3178c6"
    },
    {
      icon: IoLogoReact,
      name: "React",
      color: "#61DAFB"
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      color: "#FFFFFF"
    },
    {
      icon: SiGatsby,
      name: "Gatsby",
      color: "#663399"
    }
  ],

  backend: [
    {
      icon: IoLogoPython,
      name: "Python",
      color: "#4584b6"
    },
    {
      icon: SiFlask,
      name: "Flask",
      color: "#EEEEEE"
    },
    {
      icon: SiFastapi,
      name: "FastAPI",
      color: "#05998b"
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      color: "#4EA94B"
    }
  ],

  others: [
    {
      icon: SiGit,
      name: "Git",
      color: "#F05032"
    },
    {
      icon: IoLogoGithub,
      name: "GitHub",
      color: "#2ea650"
    },
    {
      icon: SiUnrealengine,
      name: "Unreal Engine 4",
      color: "#D2D7D3"
    }
  ]
};
