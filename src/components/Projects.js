import React from "react"
import {
  Heading,
  Box,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
  Flex,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react"
import { VscLinkExternal, VscGithubInverted } from "react-icons/vsc"
import {
  Image as CNImage,
  Transformation,
} from "cloudinary-react"

import { AnimatedContainer, HomeContainer, SectionHeading } from "./Layout/LayoutComponents"
import { useLazyImage } from "../hooks"

const projectList = [
  {
    name: "MediaScout",
    description: "A media recommender web application that shows the current trending movies and TV shows along with their details.",
    tags: ["Flask", "Bootstrap", "JS", "TMDB API"],
    link: "https://mediascout.herokuapp.com/",
    github: "https://github.com/1Gokul/MediaScout",
    source: "Portfolio/mediascout_screencap",
  },
  {
    name: "Table2Markdown",
    description: "A webapp that converts any type of table into a GitHub-flavoured Markdown table.",
    tags: ["Flask", "Bootstrap", "PapaParse", "JQuery"],
    link: "https://table2markdown.herokuapp.com/",
    github: "https://github.com/1Gokul/table2markdown",
    source: "Portfolio/table2markdown_screencap",
  },
  {
    name: "MedievalRPG",
    description: "A game that aims to imitate a RPG's basic game mechanics like combat, platforming, and interactions.",
    tags: ["Unreal Engine 4", "C++"],
    link: "https://github.com/1Gokul/MedievalCombatProject",
    github: "https://github.com/1Gokul/MedievalCombatProject",
    source: "Portfolio/medievalrpg_screencap",
  },
  {
    name: "pic2ASCII",
    description: "Front-end to an ASCII generator GitHub repository. Built for a college project.",
    tags: ["Flask", "JS"],
    link: "https://pic-2ascii.herokuapp.com/",
    github: "https://github.com/1Gokul/ASCII-generator",
    source: "Portfolio/pic2ascii_screencap",
  },
  {
    name: "insertcoin",
    description: "My first webdev project. A basic Steam-clone CRUD app with adding, modifying and deleting users.",
    tags: ["Flask", "HTML5", "CSS3", "MongoDB"],
    link: "https://insertcoin-store.herokuapp.com/",
    github: "https://github.com/1Gokul/insertcoin",
    source: "Portfolio/insertcoin_screencap",
  },
]

const ProjectInfo = ({ project, projectImage }) => {
  return (
    <Box
      backgroundImage={{
        base: projectImage,
        md: "none",
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
      <Text marginY={8}>
        {project.description}
      </Text>
      <Tags tags={project.tags} />
      <Flex>
        <LinkOverlay
          aria-label={`Click to view the project, ${project.name}.`}
          href={project.link}
          marginX={3}
          target="_blank"
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
  )
}

const DesktopProjectImage = ({ name, source }) => (
  <Box display={{ base: "none", md: "block" }} height="100%">
    <CNImage
      publicId={`${source}.jpg`}
      style={{ height: "100%", objectFit: "cover" }}
      loading="lazy"
      alt={name}
    >
      <Transformation quality="10" crop="scale" />
    </CNImage>
  </Box>
)

const Tags = ({ tags }) => (
  <Flex marginY={5} flexWrap="wrap">
    {tags.map (tag => <Badge margin={2} key={tag}>{tag}</Badge>)}
  </Flex>
)

const ProjectCard = props => {
  // Lazy load background image for mobile
  const lazyLoadedImage = useLazyImage (
    `https://res.cloudinary.com/gokulv/image/upload/co_rgb:09424c,e_colorize:80,q_20/v1627890100/${props.project.source}.jpg`
  )

  return (
    <LinkBox>
      <SimpleGrid
        marginY={5}
        columns={{ base: 1, md: 2 }}
        alignItems="center"
        borderRadius="md"
        bg={{ base: "none", md: "aqua.700" }}
        color="white"
      >
        <ProjectInfo project={props.project} projectImage={lazyLoadedImage} />
        <DesktopProjectImage name={props.project.name} source={props.project.source} />
        <Box />
      </SimpleGrid>
    </LinkBox>
  )
}

const Projects = () => {
  return (
    <HomeContainer id="projects">
      <SectionHeading>
        Some of my projects
      </SectionHeading>

      <SimpleGrid flexGrow={1} columns={1} width="100%">
        {projectList.map ((project, index) => (
          <AnimatedContainer key={index}>
            <ProjectCard project={project} />
          </AnimatedContainer>
        ))}
      </SimpleGrid>
    </HomeContainer>
  )
}

export default Projects
