import React from "react"
import { Flex, Heading, Image } from "@chakra-ui/react"
import { MainContainer } from "./Layout/Layout"

const Intro = () => {
  return (
    <MainContainer>
      <Flex direction={{ base: "column", md:"row" }} flexGrow="1">
        <Flex direction="column" marginBottom={10} flexBasis="80%">
          <Heading size="lg" marginY={5}>Hey there!</Heading>
          <Heading size="4xl" marginY={5}>I&apos;m Gokul Viswanath.</Heading>
          <Heading size="xl"> I am a full-stack web developer.<br/>I also make games on the side.</Heading>
        </Flex>
        <Flex alignItems="center">
          <Image
            src="https://res.cloudinary.com/gokulv/image/upload/q_auto:low/v1627663627/Portfolio/GV_StickPhoto_fjfu7i.png"
            alt="My Photo"
            borderRadius="xl"
          />
        </Flex>
      </Flex>
    </MainContainer>
  )
}

export default Intro
