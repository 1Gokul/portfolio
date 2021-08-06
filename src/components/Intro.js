import React from "react"
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react"
import { MainContainer } from "./Layout/Layout"

const Intro = () => {
  return (
    <MainContainer>
      <Flex direction="column" flexGrow={1}>
        <Box justifySelf="flex-start" flexGrow={1}>
          <Heading size="lg" marginY={5}>Hey there! My name&apos;s</Heading>
          <Heading
            marginBottom={5}
            fontSize={{ base:"6xl", md: "7xl" }}
            bgGradient="linear(to-r, #8000FF, #30FFB3, #07F49E)"
            bgClip="text">Gokul Viswanath.</Heading>
          <Heading size="xl"> I am a full-stack web developer.<br/>I also make games on the side.</Heading>
        </Box>
        <Box flexGrow={1}>
          <Link href="mailto:viswanath1gokul@gmail.com">
            <Button aria-label="Send Email" p={10} fontSize="2xl" >Let&apos;s talk!</Button>
          </Link>
        </Box>
      </Flex>

    </MainContainer>
  )
}

export default Intro
