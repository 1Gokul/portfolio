import { IoLogoLinkedin } from "react-icons/io5";
import { RiRedditFill } from "react-icons/ri";
import { VscGithub, VscTwitter } from "react-icons/vsc";
import { SocialLink } from "../types/HomeSections";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    icon: VscGithub,
    color: "#2ea650",
    link: "https://github.com/1Gokul"
  },
  {
    label: "Linkedin",
    icon: IoLogoLinkedin,
    color: "#0077b5",
    link: "https://www.linkedin.com/in/gokul-viswanath-31383b193/"
  },
  {
    label: "Twitter",
    icon: VscTwitter,
    color: "#1da1f2",
    link: "https://twitter.com/1GokulV"
  },
  {
    label: "Reddit",
    icon: RiRedditFill,
    color: "#ff4500",
    link: "https://old.reddit.com/message/compose?to=_zygoat"
  }
];
