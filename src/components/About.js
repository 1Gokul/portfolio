import React from "react"
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import { Image as CNImage, Transformation } from "cloudinary-react"

import { HomeContainer, SectionHeading } from "./Layout/Layout"

const AboutDescription = [
  `Hello! I'm Gokul. I am currently in the final year of my Computer Engineering degree. 
  My first brush with Web Development took place in 8th grade, where I made games using JavaScript.  
  I soon switched to OpenGL and then Unreal Engine to make games, before finally switching back to 
  webdev in college. I still develop in UE4 in my free time.`,

  "I am polishing my React and Redux skills right now with some projects, this website being one of them!",
]

const About = () => {
  return (
    <HomeContainer id="about">

      <SectionHeading>
        About me
      </SectionHeading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          <Text fontSize="lg">
            {AboutDescription[0]}
          </Text>
          <br />
          <Text fontSize="lg">
            {AboutDescription[1]}
          </Text>
        </Box>

        <Flex marginX="auto" height="350px" width="300px" >
          <CNImage publicId="Portfolio/about_photo.png" alt="My photo" loading="lazy">
            <Transformation quality="20" radius="10"  width="300" height="330"/>
          </CNImage>
        </Flex>
      </SimpleGrid>
    </HomeContainer>
  )
}

export default About
