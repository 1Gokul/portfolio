import React from "react";
import { Flex, Heading, Icon, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

import {
  AnimatedBox,
  AnimatedContainer,
  HomeContainer,
  SectionHeading
} from "./Layout/LayoutComponents";
import { skills } from "../data/Toolbox";

const MotionFlex = motion(Flex);
const LARGE_ICON_SIZE = "100px";

const Toolbox = () => {
  return (
    <HomeContainer id="toolbox">
      <SectionHeading>My Toolbox</SectionHeading>
      <AnimatedBox delay={0.8}>
        <Flex
          direction={{ base: "column", xl: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "center", xl: "flex-start" }}
        >
          <SkillSet title="Frontend" skills={skills.frontend} />
          <SkillSet title="Backend" skills={skills.backend} />
          <SkillSet title="Others" skills={skills.others} />
        </Flex>
      </AnimatedBox>
    </HomeContainer>
  );
};

const SkillSet = (props) => (
  <AnimatedContainer>
    <Flex direction="column" marginX={10} marginY={5}>
      <Heading alignSelf="center">{props.title}</Heading>
      <SimpleGrid
        columns={2}
        spacing={{ base: "75px", md: "30px" }}
        marginY={10}
      >
        {props.skills.map((skill) => (
          <LargeSkill key={skill.name} skill={skill} />
        ))}
      </SimpleGrid>
    </Flex>
  </AnimatedContainer>
);

const LargeSkill = (props) => (
  <MotionFlex
    flexDirection="column"
    alignItems="center"
    textAlign="center"
    marginX={5}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.85 }}
  >
    <Icon
      as={props.skill.icon}
      boxSize={LARGE_ICON_SIZE}
      color={props.skill.color}
    />
    {props.skill.name}
  </MotionFlex>
);

export default Toolbox;
