import React from "react"
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react"
import { HomeContainer } from "./Layout/Layout"

const Intro = () => {
  return (
    <HomeContainer>
      <Flex direction="column" flexGrow={1} marginLeft={{ base: 0, md: 10 }}>
        <Box justifySelf="flex-start" flexGrow={1}>
          <Heading size="lg" marginY={5}>Hey there! My name&apos;s</Heading>
          <Heading
            marginBottom={5}
            fontSize={{ base: "6xl", md: "7xl" }}
            letterSpacing="-2px"
            bgGradient="linear(to-r, #8000FF, #30FFB3, #07F49E)"
            bgClip="text"
          >
            Gokul Viswanath.
          </Heading>
          <Heading size="xl">
            {" "}
            I am a full-stack web developer.
            <br />
            I also make games on the side.
          </Heading>
        </Box>
        <Box flexGrow={1}>
          <Link href="https://github.com/1Gokul">
            <Button aria-label="Send Email" p={10} fontSize="2xl">
              My GitHub profile
            </Button>
          </Link>
        </Box>
      </Flex>

    </HomeContainer>
  )
}

export default Intro
