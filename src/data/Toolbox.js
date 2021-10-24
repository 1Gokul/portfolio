import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoJavascript,
  IoLogoGithub,
  IoLogoPython,
} from "react-icons/io5"
import {
  SiFlask,
  SiJinja,
  SiMongodb,
  SiUnrealengine,
  SiHeroku,
  SiGit,
  SiFastapi,
} from "react-icons/si"

export const skills = {
  frontend: [
    {
      icon: IoLogoHtml5,
      name: "HTML5",
      color: "#e34c26"
    },
    {
      icon: IoLogoCss3,
      name: "CSS3",
      color: "#1572B6"
    },
    {
      icon: IoLogoJavascript,
      name: "Javascript",
      color: "#F7DF1E"
    },
    {
      icon: IoLogoReact,
      name: "React.js",
      color: "#61DAFB"
    },
    {
      icon: SiJinja,
      name: "Jinja",
      color: "#b51010"
    },
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
    },
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
      icon: SiHeroku,
      name: "Heroku",
      color: "#6762a6"
    },
    {
      icon: SiUnrealengine,
      name: "Unreal Engine 4",
      color: "#D2D7D3"
    },
  ],
}