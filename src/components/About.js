import React from "react"
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react"
import { Image as CNImage, Transformation } from "cloudinary-react"

import { MainContainer, SectionHeading } from "./Layout/Layout"

const AboutDescription = [
  `Hello! I'm Gokul. I am currently in the final year of my Computer Engineering degree. 
  My first brush with Web Development took place in 8th grade, where I made games using JavaScript.  
  I soon switched to OpenGL and then Unreal Engine to make games, before finally switching back to 
  webdev in college. I still develop in UE4 in my free time.`,

  "I am polishing my React and Redux skills right now with some projects, this website being one of them!",
]

const About = () => {
  return (
    <MainContainer>

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

        <Flex justifyContent="center">
          <CNImage publicId="Portfolio/GV_StickPhoto_fjfu7i.png" >
            <Transformation quality="20" radius="10" alt="My photo" width="300" crop="scale" loading="lazy"/>
          </CNImage>
        </Flex>
      </SimpleGrid>
    </MainContainer>
  )
}

export default About
