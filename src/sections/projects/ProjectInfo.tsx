import React from "react";
import { VscLinkExternal, VscGithubInverted } from "react-icons/vsc";
import {
  Box,
  Heading,
  Flex,
  Text,
  Badge,
  Button,
  Link
} from "@chakra-ui/react";

import { Project } from "../../types/HomeSections";

const ProjectInfo = ({
  project,
  projectImage
}: {
  project: Project;
  projectImage: any;
}) => {
  return (
    <Box
      backgroundImage={{
        base: projectImage,
        md: "none"
      }}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      borderRadius="0.25rem"
      paddingY={10}
      paddingX={{ base: 6, md: 10 }}
    >
      <Heading size="lg" marginBottom={5}>
        {project.name}
      </Heading>
      <Text marginY={8}>{project.description}</Text>
      <Tags tags={project.tags} />
      <Flex direction={{ base: "column", md: "row" }} alignItems="flex-start">
        {project.link && (
          <Link
            aria-label={`Click to view the project, ${project.name}.`}
            href={project.link}
            marginX={3}
            marginY={2}
            target="_blank"
            rel="noreferrer"
          >
            <Button
              bgColor="gray.100"
              color="gray.800"
              borderRadius="full"
              rightIcon={<VscLinkExternal />}
            >
              Website
            </Button>
          </Link>
        )}
        {project.github && (
          <Link
            aria-label={`Click to view the GitHub repository of ${project.name}.`}
            href={project.github}
            marginX={3}
            marginY={2}
            target="_blank"
          >
            <Button
              bgColor="gray.100"
              color="gray.800"
              borderRadius="full"
              rightIcon={<VscGithubInverted />}
            >
              Source Code
            </Button>
          </Link>
        )}
      </Flex>
    </Box>
  );
};

export default ProjectInfo;

const Tags = ({ tags }: { tags: string[] }) => (
  <Flex marginY={5} flexWrap="wrap">
    {tags.map((tag) => (
      <Badge margin={2} key={tag}>
        {tag}
      </Badge>
    ))}
  </Flex>
);
