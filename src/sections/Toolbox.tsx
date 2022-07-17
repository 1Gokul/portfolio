import React from "react";
import { Flex, Heading, Icon, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

import {
  AnimatedContainer,
  HomeContainer,
  SectionHeading
} from "../components/LayoutComponents";
import { Skill } from "../types/HomeSections";
import { Large_Icon_Size } from "../constants/HomeSections";
import { skills } from "../content/Toolbox";

const MotionFlex = motion(Flex);

const Toolbox = () => {
  return (
    <HomeContainer id="toolbox" marginBottom="0">
      <SectionHeading>My Toolbox</SectionHeading>
      <AnimatedContainer delay={0.8}>
        <Flex
          direction={{ base: "column", xl: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "center", xl: "flex-start" }}
        >
          <SkillSet title="Frontend" skills={skills.frontend} />
          <SkillSet title="Backend" skills={skills.backend} />
          <SkillSet title="Others" skills={skills.others} />
        </Flex>
      </AnimatedContainer>
    </HomeContainer>
  );
};

const SkillSet = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <AnimatedContainer>
    <Flex direction="column" marginX={10} marginY={5}>
      <Heading alignSelf="center">{title}</Heading>
      <SimpleGrid
        columns={2}
        spacing={{ base: "75px", md: "30px" }}
        marginY={10}
      >
        {skills.map((skill: Skill) => (
          <LargeSkill key={skill.name} skill={skill} />
        ))}
      </SimpleGrid>
    </Flex>
  </AnimatedContainer>
);

const LargeSkill = ({ skill }: { skill: Skill }) => (
  <MotionFlex
    flexDirection="column"
    alignItems="center"
    textAlign="center"
    marginX={5}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.85 }}
  >
    <Icon
      as={skill.icon}
      boxSize={Large_Icon_Size}
      color={skill.color}
      marginBottom={1}
    />
    {skill.name}
  </MotionFlex>
);

export default Toolbox;
