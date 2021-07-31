import { Heading, Box, Link, Text, List, ListItem } from "@chakra-ui/react"
import React from "react"

import { MainContainer } from "./Layout"

const projectList = [
  {
    name: "MediaScout",
    description: "A media recommender web application built with Flask, Bootstrap, HTML, CSS and JavaScript that shows the current trending movies and TV shows along with their details! All media data was taken from TheMovieDB's API.",
    link: "https://mediascout.herokuapp.com/",
    github: "https://github.com/1Gokul/MediaScout"

  },
  {
    name: "Table2Markdown",
    description: "A webapp built with Flask, HTML/CSS(with Bootstrap) and JQuery that converts any table, be it an inserted table, CSV file or Excel table into a GitHub-flavoured Markdown table!",
    link: "https://insertcoin-store.herokuapp.com/",
    github: "https://github.com/1Gokul/table2markdown"

  },
  {
    name: "MedievalCombatProject",
    description: "A game made in Unreal Engine 4 and C++ that aims to imitate a RPG's basic game mechanics like combat, platforming, and interactions.",
    github: "https://github.com/1Gokul/MedievalCombatProject"
  },
  {
    name: "Pic2ASCII",
    description: "Front-end to an ASCII generator GitHub repository. Made with Python, Flask, HTML, CSS, and JavaScript.",
    link: "https://pic-2ascii.herokuapp.com/",
    github: "https://github.com/1Gokul/ASCII-generator"

  },
  {
    name: "insertcoin",
    description: "A Steam clone with accounts and payments. Currently undergoing a revamp.",
    link: "https://insertcoin-store.herokuapp.com/",
    github: "https://github.com/1Gokul/insertcoin"
  },
]


const ProjectCard = props => {
  return(
    <ListItem>
      <Heading size="lg">
        {props.project.name}
      </Heading>
      <Text>
        {props.project.description}
      </Text>
      <Box>
        {props.project.link && <Link href={props.project.link}>Link</Link>}
        <Link href={props.project.github} style={{ margin:5 }}>GitHub</Link>
      </Box>
    </ListItem>
  )
}

const Projects = () => {
  return(
    <MainContainer justifyContent="center">
      <Heading>Projects</Heading>
      <List>
        {projectList.map(project => <ProjectCard key={project.name} project={project} />)}
      </List>
    </MainContainer>
  )
}

export default Projects