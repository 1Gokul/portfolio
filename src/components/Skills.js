import React from "react"


const skills = [
  "Python",
  "Flask",
  "HTML",
  "CSS",
  "Bootstrap",
  "ES6",
  "C++",
  "Flask",
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
    <div>
      <h1>Skills</h1>
      <ul>{skills.map(skill => <Skill key={skill} skill={skill} />)}</ul>
    </div>
  )
}


export default Skills