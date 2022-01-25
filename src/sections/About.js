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
    <HomeContainer id="about">
      <SectionHeading>About me</SectionHeading>
      <AnimatedContainer>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Text fontSize="xl">{AboutDescription[0]}</Text>
            <br />
            <Text fontSize="xl">{AboutDescription[1]}</Text>
          </Box>

          <Flex marginX="auto" height="350px" width="300px">
            <CNImage
              publicId="Portfolio/about_photo.png"
              alt="My photo"
              loading="lazy"
            >
              <Transformation
                quality="20"
                radius="10"
                width="300"
                height="330"
              />
            </CNImage>
          </Flex>
        </SimpleGrid>
      </AnimatedContainer>
    </HomeContainer>
  );
};

export default About;
