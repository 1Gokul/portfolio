import React from "react"
import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import { MainContainer } from "./Layout"

const Intro = () => {
  return (
    <MainContainer>
      <Flex direction="column" justifyContent="space-between">
        <Box marginBottom={10}>
          <Heading size="lg" marginY={5}>Hey there!</Heading>
          <Heading size="4xl" marginY={5}>I&apos;m Gokul Viswanath.</Heading>
          <Heading size="xl"> I am a full-stack web developer.</Heading>
          <Heading size="xl">I also make games on the side.</Heading>
        </Box>
        <Flex>
          <Image
            src="https://res.cloudinary.com/gokulv/image/upload/r_30/v1627663627/Portfolio/GV_StickPhoto_fjfu7i.png"
            alt="My Photo"
            boxSize={{ base: "100%", md: "70%", lg: "40%" }}
            marginLeft="auto"
          />
        </Flex>
      </Flex>
    </MainContainer>
  )
}

export default Intro
