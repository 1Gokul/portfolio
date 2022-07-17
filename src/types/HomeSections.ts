import { IconType } from "react-icons";

export type Skill = {
  icon: IconType;
  name: string;
  color: string;
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  link?: string;
  github: string;
  source: string;
};

export type SocialLink = {
  color: string;
  label: string;
  icon: IconType;
  link: string;
};
