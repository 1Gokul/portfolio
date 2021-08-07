
import React from "react"
import {
  Heading,
  Box,
  Link,
  Text,
  Flex,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react"
import { VscLinkExternal, VscGithubInverted } from "react-icons/vsc"
import { Image as CNImage, CloudinaryContext, Transformation } from "cloudinary-react"

import { MainContainer, SectionHeading } from "./Layout/Layout"
import { useLazyImage } from "../hooks"

const projectList = [
  {
    name: "MediaScout",
    description: "A media recommender web application that shows the current trending movies and TV shows along with their details.",
    tags: ["Flask", "Bootstrap", "JS", "TMDB API"],
    link: "https://mediascout.herokuapp.com/",
    github: "https://github.com/1Gokul/MediaScout",
    source: "Portfolio/mediascout_screencap"
  },
  {
    name: "Table2Markdown",
    description: "A webapp that converts any type of table into a GitHub-flavoured Markdown table.",
    tags: ["Flask", "Bootstrap", "PapaParse", "JQuery"],
    link: "https://insertcoin-store.herokuapp.com/",
    github: "https://github.com/1Gokul/table2markdown",
    source: "Portfolio/table2markdown_screencap"
  },
  {
    name: "MedievalRPG",
    description: "A game that aims to imitate a RPG's basic game mechanics like combat, platforming, and interactions.",
    tags: ["Unreal Engine 4", "C++"],
    github: "https://github.com/1Gokul/MedievalCombatProject",
    source: "Portfolio/medievalrpg_screencap"
  },
  {
    name: "pic2ASCII",
    description: "Front-end to an ASCII generator GitHub repository. Made with Python, Flask, HTML, CSS, and JavaScript.",
    tags: ["Flask", "JS"],
    link: "https://pic-2ascii.herokuapp.com/",
    github: "https://github.com/1Gokul/ASCII-generator",
    source: "Portfolio/pic2ascii_screencap"
  },
  {
    name: "insertcoin",
    description: "A Steam clone with accounts and payments. Currently undergoing a revamp.",
    tags: ["GraphQL", "React.js"],
    link: "https://insertcoin-store.herokuapp.com/",
    github: "https://github.com/1Gokul/insertcoin",
    source: "Portfolio/insertcoin_screencap"
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
      paddingX={{ base:6, md: 10 }}
    >
      <Heading size="lg" marginBottom={5}>
        {project.name}
      </Heading>
      <Text marginY={8}>
        {project.description}
      </Text>
      <Tags tags={project.tags}/>
      <Flex>
        <Link href={project.link} marginX={3}><VscLinkExternal size={20}/></Link>
        <Link href={project.github} marginX={3}><VscGithubInverted size={20}/></Link>
      </Flex>
    </Box>
  )
}

const DesktopProjectImage = ({ source }) => (
  <Box display={{ base: "none", md: "block" }} height="100%">
    <CNImage publicId={source} style={{ height:"100%", objectFit:"cover" }} loading="lazy">
      <Transformation quality="20" crop="scale" />
    </CNImage>
  </Box>
)

const Tags = ({ tags }) => (
  <Flex marginY={5} flexWrap="wrap">
    {tags.map(tag => <Badge margin={2} key={tag}>{tag}</Badge>)}
  </Flex>

)

const ProjectCard = props => {

  // Lazy load background image for mobile
  const lazyLoadedImage = useLazyImage(
    `https://res.cloudinary.com/gokulv/image/upload/co_rgb:09424c,e_colorize:80,q_20/v1627890100/${props.project.source}.jpg`)

  return(
    <SimpleGrid
      marginY={5}
      columns={{ base: 1, md: 2 }}
      alignItems="center"
      borderRadius="md"
      bg={{ base: "none", md: "aqua.700" }}
      color="white"
    >
      <ProjectInfo project={props.project} projectImage={lazyLoadedImage}/>
      <DesktopProjectImage source={lazyLoadedImage} />
      <Box />
    </SimpleGrid>
  )
}


const Projects = () => {
  return (
    <MainContainer>
      <SectionHeading>
        Some of my projects
      </SectionHeading>

      <CloudinaryContext cloudName="gokulv" secure="true">
        <SimpleGrid flexGrow={1} columns={1} width="100%">
          {projectList.map (project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </SimpleGrid>
      </CloudinaryContext>


    </MainContainer>
  )
}

export default Projects
