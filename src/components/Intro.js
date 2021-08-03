import React from "react"
import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import { MainContainer } from "./Layout"

const Intro = () => {
  return (
    <MainContainer>
      <Flex direction={{ base: "column", md:"row" }}>
        <Box marginBottom={10}>
          <Heading size="lg" marginY={5}>Hey there!</Heading>
          <Heading size="4xl" marginY={5}>I&apos;m Gokul Viswanath.</Heading>
          <Heading size="xl"> I am a full-stack web developer.</Heading>
          <Heading size="xl">I also make games on the side.</Heading>
        </Box>
        <Flex marginTop={{ base: 12, md:28 }}>
          <Image
            src="https://res.cloudinary.com/gokulv/image/upload/q_auto:low/v1627663627/Portfolio/GV_StickPhoto_fjfu7i.png"
            alt="My Photo"
            borderRadius="xl"
            boxSize="100%"
          />
        </Flex>
      </Flex>
    </MainContainer>
  )
}

export default Intro
