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
    name: "MedievalCombatProject",
    description: "A that aims to imitate a RPG's basic game mechanics like combat, platforming, and interactions.",
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

const ProjectCard = props => {
  return (
  // <ListItem>
  //   <Heading>
  //     {props.project.name}
  //   </Heading>
  //   <Text>
  //     {props.project.description}
  //   </Text>
  //   <Box>
  //     {props.project.link && <Link href={props.project.link}>Link</Link>}
  //     <Link href={props.project.github} style={{ margin:5 }}>GitHub</Link>
  //   </Box>
  // </ListItem>

    (
      <SimpleGrid
        padding={{ base: 0, md: 5 }}
        marginBottom={5}
        columns={{ base: 1, md: 2 }}
        alignItems="center"
        borderRadius="md"
        bg={{ base: "none", md: "gray.500" }}
        color="white"
      >
        <Box
          backgroundImage={{
            base: "url('https://res.cloudinary.com/gokulv/image/upload/co_rgb:004358,e_colorize:74,o_100,q_48/v1627826157/Portfolio/firefox192500_npoqsm.jpg')",
            md: "none",
          }}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          borderRadius="md"
          paddingX={5}
          paddingY={10}
          marginBottom={5}
        >
          <Heading size="lg" marginBottom={5}>
            {props.project.name}
          </Heading>
          <Text>
            {props.project.description}
          </Text>
          <Tags tags={props.project.tags}/>
          <Flex>
            <Link href={props.project.github} marginX={3}><VscGithubInverted size={20}/></Link>
            <Link href={props.project.link} marginX={3}><VscLinkExternal size={20}/></Link>
          </Flex>
        </Box>
        <Box display={{ base: "none", md: "block" }} padding={3}>
          <Image
            src="https://res.cloudinary.com/gokulv/image/upload/q_auto:eco/v1627826157/Portfolio/firefox192500_npoqsm.jpg"
            height="300px"
            width="600px"
            borderRadius="lg"
            fit="cover"
          />
        </Box>
        <Box />
      </SimpleGrid>
    )
  )
}

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
