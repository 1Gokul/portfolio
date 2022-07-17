import React from "react";
import { LinkBox, SimpleGrid, Box } from "@chakra-ui/react";

import { useLazyImage } from "../../hooks/useLazyImage";
import { Project } from "../../types/HomeSections";
import DesktopProjectImage from "./DesktopProjectImage";
import ProjectInfo from "./ProjectInfo";

const ProjectCard = ({ project }: { project: Project }) => {
  // Lazy load background image for mobile
  const lazyLoadedImage = useLazyImage(
    `https://res.cloudinary.com/gokulv/image/upload/co_rgb:09424c,e_colorize:80/v1627890100/${project.source}.jpg`
  );

  return (
    <LinkBox>
      <SimpleGrid
        marginY={8}
        columns={{ base: 1, md: 2 }}
        alignItems="center"
        borderRadius="0.25rem"
        bg={{ base: "none", md: "aqua.700" }}
        color="white"
      >
        <ProjectInfo project={project} projectImage={lazyLoadedImage} />
        <DesktopProjectImage name={project.name} source={project.source} />
        <Box />
      </SimpleGrid>
    </LinkBox>
  );
};

export default ProjectCard;
