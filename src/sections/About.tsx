import React from "react";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Image as CNImage, Transformation } from "cloudinary-react";

import {
  AnimatedContainer,
  HomeContainer,
  SectionHeading
} from "../components/LayoutComponents";
import { AboutDescription } from "../content/About";

const About = () => {
  return (
    <HomeContainer id="about" justifyContent="center">
      <SectionHeading>About me</SectionHeading>
      <AnimatedContainer justifySelf="center">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex direction="column" justifyContent="space-evenly">
            <Text fontSize="xl">{AboutDescription[0]}</Text>
            <Text fontSize="xl">{AboutDescription[1]}</Text>
          </Flex>

          <Flex
            marginX="auto"
            width="300px"
            border="4px solid"
            borderColor="var(--theme-aqua)"
          >
            <CNImage publicId="Portfolio/about_photo.png" alt="My photo">
              <Transformation quality="auto:low" />
            </CNImage>
          </Flex>
        </SimpleGrid>
      </AnimatedContainer>
    </HomeContainer>
  );
};

export default About;
