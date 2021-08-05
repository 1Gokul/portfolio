import React from "react"
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react"
import { MainContainer } from "./Layout/Layout"

const Intro = () => {
  return (
    <MainContainer minH="80vh">
      <Flex direction="column">
        <Heading size="lg" marginY={5}>Hey there! My name&apos;s</Heading>
        <Heading
          marginBottom={5}
          fontSize="6xl"
          bgGradient="linear(to-r, #8000FF, #30FFB3, #07F49E)"
          bgClip="text">Gokul Viswanath.</Heading>
        <Heading size="xl"> I am a full-stack web developer.<br/>I also make games on the side.</Heading>
        <Box marginTop={24}>
          <Link href="mailto:viswanath1gokul@gmail.com">
            <Button aria-label="Send Email" p={10} fontSize="2xl" >Let&apos;s talk!</Button>
          </Link>
        </Box>
      </Flex>

    </MainContainer>
  )
}

export default Intro
