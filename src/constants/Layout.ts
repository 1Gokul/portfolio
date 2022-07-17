import { HeaderLink } from "../types/Header";

export const homeInternalLinks: HeaderLink[] = [
  {
    name: "about"
  },
  {
    name: "projects"
  },
  {
    name: "toolbox"
  },
  {
    name: "say hi"
  }
];

export const homeExternalLinks: HeaderLink[] = [
  {
    name: "DevLogs",
    to: "/blogs"
  }
];

export const blogExternalLinks: HeaderLink[] = [
  {
    name: "Home",
    to: "/"
  },
  {
    name: "DevLogs",
    to: "/blogs"
  }
];
