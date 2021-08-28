import React from "react"
import { Flex, Heading, Icon, SimpleGrid } from "@chakra-ui/react"
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoJavascript,
  IoLogoGithub,
  IoLogoPython,
} from "react-icons/io5"
import {
  SiFlask,
  SiJinja,
  SiMongodb,
  SiUnrealengine,
  SiHeroku,
  SiGit,
  SiGraphql,
} from "react-icons/si"

import { AnimatedBox, AnimatedContainer, HomeContainer, SectionHeading } from "./Layout/LayoutComponents"
import { motion } from "framer-motion"

const skills = {
  frontend: [
    {
      icon: IoLogoHtml5,
      name: "HTML5",
      color: "#e34c26"
    },
    {
      icon: IoLogoCss3,
      name: "CSS3",
      color: "#1572B6"
    },
    {
      icon: IoLogoJavascript,
      name: "Javascript",
      color: "#F7DF1E"
    },
    {
      icon: IoLogoReact,
      name: "React.js",
      color: "#61DAFB"
    },
    {
      icon: SiJinja,
      name: "Jinja",
      color: "#b51010"
    },
  ],

  backend: [
    {
      icon: IoLogoPython,
      name: "Python",
      color: "#4584b6"
    },
    {
      icon: SiFlask,
      name: "Flask",
      color: "#EEEEEE"
    },
    {
      icon: SiGraphql,
      name: "GraphQL",
      color: "#E10098"
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      color: "#4EA94B"
    },
  ],

  others: [
    {
      icon: SiGit,
      name: "Git",
      color: "#F05032"
    },
    {
      icon: IoLogoGithub,
      name: "GitHub",
      color: "#2ea650"
    },

    {
      icon: SiHeroku,
      name: "Heroku",
      color: "#6762a6"
    },
    {
      icon: SiUnrealengine,
      name: "Unreal Engine 4",
      color: "#D2D7D3"
    },
  ],
}

const MotionFlex = motion(Flex)

const largeIconSize = "100px"

const Toolbox = () => {
  return (
    <HomeContainer id="toolbox">
      <SectionHeading>
        My Toolbox
      </SectionHeading>
      <AnimatedBox delay={0.8}>
        <Flex
          direction={{ base: "column", xl: "row" }}
          justifyContent="space-between" alignItems={{ base: "center", xl: "flex-start" }}
        >

          <SkillSet title="Frontend" skills={skills.frontend} />
          <SkillSet title="Backend" skills={skills.backend} />
          <SkillSet title="Others" skills={skills.others} />
        </Flex>
      </AnimatedBox>

    </HomeContainer>
  )
}

const SkillSet = props => (
  <AnimatedContainer>
    <Flex direction="column" marginX={10} marginY={5}>
      <Heading alignSelf="center">{props.title}</Heading>
      <SimpleGrid columns={2} spacing={{ base: "75px", md: "30px" }} marginY={10}>
        {props.skills.map (skill => (
          <LargeSkill key={skill.name}  skill={skill} />
        ))}
      </SimpleGrid>
    </Flex>
  </AnimatedContainer>

)

const LargeSkill = props => (
  <MotionFlex flexDirection="column" alignItems="center" textAlign="center" marginX={5} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}>
    <Icon as={props.skill.icon} boxSize={largeIconSize} color={props.skill.color}/>
    {props.skill.name}
  </MotionFlex>
)

export default Toolbox
