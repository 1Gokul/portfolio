import React from "react";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Image as CNImage, Transformation } from "cloudinary-react";

import {
  AnimatedContainer,
  HomeContainer,
  SectionHeading
} from "../components/LayoutComponents";
import { AboutDescription } from "../../static/data/About";

const About = () => {
  return (
    <HomeContainer id="about" justifyContent="center">
      <SectionHeading>About me</SectionHeading>
      <AnimatedContainer justifySelf="center">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Text fontSize="xl">{AboutDescription[0]}</Text>
            <br />
            <Text fontSize="xl">{AboutDescription[1]}</Text>
          </Box>

          <Flex
            marginX="auto"
            width="300px"
            border="4px solid"
            borderColor="var(--theme-aqua)"
          >
            <CNImage
              publicId="Portfolio/about_photo.png"
              alt="My photo"
              loading="lazy"
            >
              <Transformation quality="auto:low" />
            </CNImage>
          </Flex>
        </SimpleGrid>
      </AnimatedContainer>
    </HomeContainer>
  );
};

export default About;
