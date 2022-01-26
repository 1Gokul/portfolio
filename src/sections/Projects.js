import React from "react";
import {
  Heading,
  Box,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
  Flex,
  SimpleGrid,
  Badge
} from "@chakra-ui/react";
import { VscLinkExternal, VscGithubInverted } from "react-icons/vsc";
import { Image as CNImage, Transformation } from "cloudinary-react";

import { projectList } from "../../static/data/Projects";
import {
  AnimatedContainer,
  HomeContainer,
  SectionHeading
} from "../components/LayoutComponents";
import { useLazyImage } from "../hooks";

const ProjectInfo = ({ project, projectImage }) => {
  return (
    <Box
      backgroundImage={{
        base: projectImage,
        md: "none"
      }}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      borderRadius="sm"
      paddingY={10}
      paddingX={{ base: 6, md: 10 }}
    >
      <Heading size="lg" marginBottom={5}>
        {project.name}
      </Heading>
      <Text marginY={8}>{project.description}</Text>
      <Tags tags={project.tags} />
      <Flex>
        <LinkOverlay
          aria-label={`Click to view the project, ${project.name}.`}
          href={project.link}
          marginX={3}
          target="_blank"
          rel="noreferrer"
        >
          <VscLinkExternal size={30} />
        </LinkOverlay>
        <Link
          aria-label={`Click to view the GitHub repository of ${project.name}.`}
          href={project.github}
          marginX={3}
          target="_blank"
        >
          <VscGithubInverted size={30} />
        </Link>
      </Flex>
    </Box>
  );
};

const DesktopProjectImage = ({ name, source }) => (
  <Box display={{ base: "none", md: "block" }} height="100%">
    <CNImage
      publicId={`${source}.jpg`}
      style={{
        height: "100%",
        objectFit: "cover",
        borderRadius: "var(--chakra-radii-md)"
      }}
      loading="lazy"
      alt={name}
    >
      <Transformation crop="scale" />
    </CNImage>
  </Box>
);

const Tags = ({ tags }) => (
  <Flex marginY={5} flexWrap="wrap">
    {tags.map((tag) => (
      <Badge margin={2} key={tag}>
        {tag}
      </Badge>
    ))}
  </Flex>
);

const ProjectCard = (props) => {
  // Lazy load background image for mobile
  const lazyLoadedImage = useLazyImage(
    `https://res.cloudinary.com/gokulv/image/upload/co_rgb:09424c,e_colorize:80/v1627890100/${props.project.source}.jpg`
  );

  return (
    <LinkBox>
      <SimpleGrid
        marginY={8}
        columns={{ base: 1, md: 2 }}
        alignItems="center"
        borderRadius="md"
        bg={{ base: "none", md: "aqua.700" }}
        color="white"
      >
        <ProjectInfo project={props.project} projectImage={lazyLoadedImage} />
        <DesktopProjectImage
          name={props.project.name}
          source={props.project.source}
        />
        <Box />
      </SimpleGrid>
    </LinkBox>
  );
};

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
