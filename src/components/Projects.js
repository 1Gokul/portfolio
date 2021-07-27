import React from "react"

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

const projectStyle = {
  margin: 5,
  padding: 5
}

const projectTitle = {
  fontSize: 30,
  fontWeight: "bold",
  paddingBottom: 5
}


const ProjectCard = props => {
  return(
    <li style={projectStyle}>
      <div style={projectTitle}>
        {props.project.name}
      </div>
      <div>
        {props.project.description}
      </div>
      <div>
        {props.project.link && <a href={props.project.link} style={{ margin:5 }}>Link</a>}
        <a href={props.project.github} style={{ margin:5 }}>GitHub</a>
      </div>
    </li>
  )
}

const Projects = () => {
  return(
    <div>
      <h1>Projects</h1>
      <ul>
        {projectList.map(project => <ProjectCard key={project.name} project={project} />)}
      </ul>
    </div>
  )
}

export default Projects