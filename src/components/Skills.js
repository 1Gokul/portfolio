import React from "react"
import { Flex, Heading, Icon, SimpleGrid } from "@chakra-ui/react"
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoGithub,
} from "react-icons/io5"
import {
  SiFlask,
  SiJinja,
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiUnrealengine,
  SiHeroku,
  SiGit,
} from "react-icons/si"

import { MainContainer, SectionHeading } from "./Layout/Layout"

const skills = {
  frontend: [
    {
      icon: IoLogoHtml5,
      name: "HTML5",
    },
    {
      icon: IoLogoCss3,
      name: "CSS3",
    },
    {
      icon: IoLogoJavascript,
      name: "Javascript",
    },
    {
      icon: IoLogoReact,
      name: "React.js",
    },
    {
      icon: SiRedux,
      name: "Redux",
    },
    {
      icon: SiJinja,
      name: "Jinja",
    },
  ],

  backend: [
    {
      icon: SiFlask,
      name: "Flask",
    },
    {
      icon: IoLogoNodejs,
      name: "Node.js",
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
    },
    {
      icon: SiPostgresql,
      name: "PostgreSQL",
    },
  ],

  others: [
    {
      icon: SiGit,
      name: "Git",
    },
    {
      icon: IoLogoGithub,
      name: "GitHub",
    },

    {
      icon: SiHeroku,
      name: "Heroku",
    },
    {
      icon: SiUnrealengine,
      name: "Unreal Engine 4",
    },
  ],
}

const largeIconSize = "100px"
const iconColour = "aqua.200"

const Skills = () => {
  return (
    <MainContainer id="skills">
      <SectionHeading>
        My skill set
      </SectionHeading>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-evenly"
      >

        <SkillSet title="Frontend" skills={skills.frontend} />
        <SkillSet title="Backend" skills={skills.backend} />
        <SkillSet title="Others" skills={skills.others} />
      </Flex>
    </MainContainer>
  )
}

const SkillSet = props => (
  <Flex direction="column" marginX={10} marginY={5}>
    <Heading alignSelf="center">{props.title}</Heading>
    <SimpleGrid columns={2} spacing={{ base: "50px", md: "30px" }} marginY={10}>
      {props.skills.map (skill => (
        <LargeSkill key={skill.name} icon={skill.icon} name={skill.name} />
      ))}
    </SimpleGrid>
  </Flex>
)

const LargeSkill = props => (
  <Flex flexDirection="column" alignItems="center">
    <Icon as={props.icon} boxSize={largeIconSize} color={iconColour} />
    {props.name}
  </Flex>
)

export default Skills
