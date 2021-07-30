import React from "react"
import { Heading } from "@chakra-ui/react"
gi
import { MainContainer } from "./Layout"

const skills = [
  "Python",
  "Flask",
  "HTML",
  "CSS",
  "Bootstrap",
  "ES6",
  "C++",
  "Jinja2",
  "React.js",
  "Redux",
  "MongoDB",
  "PostgreSQL",
  "Node.js",
  "Express.js",
  "Git",
  "Unreal Engine 4",
]

const Skill = props => {
  return (
    <li>
      {props.skill}
    </li>
  )
}

const Skills = () => {
  console.log (skills)
  return (
    <MainContainer>
      <Heading size="3xl">What am I skilled at?</Heading>
      <ul>
        {skills.map(skill => <Skill key={skill} skill={skill} />)}
      </ul>
    </MainContainer>
  )
}


export default Skills