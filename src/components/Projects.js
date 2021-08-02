import {
  Heading,
  Box,
  Link,
  Text,
  Flex,
  Image,
  SimpleGrid,
  Code,
} from "@chakra-ui/react"
import { VscLinkExternal, VscGithubInverted } from "react-icons/vsc"
import React from "react"

import { MainContainer } from "./Layout"

const projectList = [
  {
    name: "MediaScout",
    description: "A media recommender web application that shows the current trending movies and TV shows along with their details.",
    tags: ["Flask", "Bootstrap", "JS", "TMDB API"],
    link: "https://mediascout.herokuapp.com/",
    github: "https://github.com/1Gokul/MediaScout",
  },
  {
    name: "Table2Markdown",
    description: "A webapp that converts any type of table into a GitHub-flavoured Markdown table.",
    tags: ["Flask", "Bootstrap", "PapaParse", "JQuery"],
    link: "https://insertcoin-store.herokuapp.com/",
    github: "https://github.com/1Gokul/table2markdown",
  },
  {
    name: "MedievalRPG",
    description: "A game that aims to imitate a RPG's basic game mechanics like combat, platforming, and interactions.",
    tags: ["Unreal Engine 4", "C++"],
    github: "https://github.com/1Gokul/MedievalCombatProject",
  },
  {
    name: "Pic2ASCII",
    description: "Front-end to an ASCII generator GitHub repository. Made with Python, Flask, HTML, CSS, and JavaScript.",
    tags: ["Flask", "JS"],
    link: "https://pic-2ascii.herokuapp.com/",
    github: "https://github.com/1Gokul/ASCII-generator",
  },
  {
    name: "insertcoin",
    description: "A Steam clone with accounts and payments. Currently undergoing a revamp.",
    tags: ["GraphQL", "React.js"],
    link: "https://insertcoin-store.herokuapp.com/",
    github: "https://github.com/1Gokul/insertcoin",
  },
]

const ProjectCard = props => (
  <SimpleGrid
    marginY={5}
    columns={{ base: 1, md: 2 }}
    alignItems="center"
    borderRadius="md"
    bg={{ base: "none", md: "aqua.700" }}
    color="white"
  >
    <ProjectInfo project={props.project}/>
    <ProjectImage source={props.project.image} />
    <Box />
  </SimpleGrid>
)

const ProjectInfo = ({ project }) => (
  <Box
    backgroundImage={{
      base: "url('https://res.cloudinary.com/gokulv/image/upload/co_rgb:004358,e_colorize:74,o_100,q_48/v1627826157/Portfolio/firefox192500_npoqsm.jpg')",
      md: "none",
    }}
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    borderRadius="sm"
    padding={10}
  >
    <Heading size="lg" marginBottom={5}>
      {project.name}
    </Heading>
    <Text marginY={8}>
      {project.description}
    </Text>
    <Tags tags={project.tags}/>
    <Flex>
      <Link href={project.github} marginX={3}><VscGithubInverted size={20}/></Link>
      <Link href={project.link} marginX={3}><VscLinkExternal size={20}/></Link>
    </Flex>
  </Box>
)

const ProjectImage = ({ source }) => (
  <Box display={{ base: "none", md: "block" }} height="100%">
    <Image
      src="https://res.cloudinary.com/gokulv/image/upload/q_auto:low/v1627826157/Portfolio/firefox192500_npoqsm.jpg"
      borderRadius="sm"
      height="100%"
      objectFit="cover"
    />
  </Box>
)

const Projects = () => {
  return (
    <MainContainer>

      <Heading size="3xl" alignSelf="center" marginBottom={10}>
        Some of my projects
      </Heading>

      <SimpleGrid flexGrow={1} columns={1} width="100%">
        {projectList.map (project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </SimpleGrid>

    </MainContainer>
  )
}

const Tags = ({ tags }) => (
  <Flex marginY={5} flexWrap="wrap">
    {tags.map(tag => <Code margin={2} key={tag}>{tag}</Code>)}
  </Flex>

)

export default Projects
