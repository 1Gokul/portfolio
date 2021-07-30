import React from "react"
import { Heading } from "@chakra-ui/react"
import { MainContainer } from "./Layout"

const Intro = () => {
  return(
    <MainContainer>
      <Heading size="lg" marginY={5}>Hey there!</Heading>
      <Heading size="4xl" marginY={5}>I&apos;m Gokul.</Heading>
      <Heading size="xl"> I am a full-stack web developer.</Heading>
      <Heading size="xl">I also make games on the side.</Heading>
    </MainContainer>
  )
}

export default Intro