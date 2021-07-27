import React from "react"

const Skill = ({ skill }) => {
  return (
    <li>
      {skill}
    </li>
  )
}

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

const Skills = () => {
  console.log (skills)
  return (
    <div>
      <h1>Skills</h1>
      {skills.map(skill => <Skill key={skill} skill={skill} />)}
    </div>
  )
}


export default Skills