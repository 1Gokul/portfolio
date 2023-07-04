import { Project } from "../types/HomeSections";

export const projectList: Project[] = [
  {
    name: "pcpartfinder",
    description:
      "A web app that scrapes information from Indian pc component stores and displays them to the user. It can also give price drop alerts to users. (ongoing)",
    tags: ["React", "Next.js", "Chakra-UI", "FastAPI"],
    link: "https://pcpartfinder.vercel.app",
    github: "https://github.com/1Gokul/pcpartfinder",
    source: "Portfolio/pcpartfinder_screencap"
  },
  {
    name: "MediaScout",
    description:
      "A media recommender web application that shows the current trending movies and TV shows along with their details.",
    tags: ["Flask", "Bootstrap", "JS", "TMDB API"],
    link: "https://mediascout.onrender.com/",
    github: "https://github.com/1Gokul/MediaScout",
    source: "Portfolio/mediascout_screencap"
  },
  {
    name: "Table2Markdown",
    description:
      "A webapp that converts any type of table into a GitHub-flavoured Markdown table.",
    tags: ["Flask", "Bootstrap", "PapaParse", "JQuery"],
    link: "https://table2markdown.onrender.com/",
    github: "https://github.com/1Gokul/table2markdown",
    source: "Portfolio/table2markdown_screencap"
  },
  {
    name: "MedievalRPG",
    description:
      "A game that aims to imitate a RPG's basic game mechanics like combat, platforming, and interactions.",
    tags: ["Unreal Engine 4", "C++"],
    github: "https://github.com/1Gokul/MedievalCombatProject",
    source: "Portfolio/medievalrpg_screencap"
  }
];
