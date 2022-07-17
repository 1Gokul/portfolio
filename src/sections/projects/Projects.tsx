import React from "react";
import { Flex } from "@chakra-ui/react";

import {
  AnimatedContainer,
  HomeContainer,
  SectionHeading
} from "../../components/LayoutComponents";
import { projectList } from "../../content/Projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <HomeContainer id="projects">
      <SectionHeading>My projects</SectionHeading>

      <Flex direction="column">
        {projectList.map((project, index) => (
          <AnimatedContainer key={index}>
            <ProjectCard project={project} />
          </AnimatedContainer>
        ))}
      </Flex>
    </HomeContainer>
  );
};

export default Projects;
