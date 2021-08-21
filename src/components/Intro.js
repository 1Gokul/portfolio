import React from "react"
import { Box, Button, Flex, Link } from "@chakra-ui/react"

import { AnimatedBox, AnimatedHeading, HomeContainer } from "./Layout/LayoutComponents"

const Intro = () => {
  return (
    <HomeContainer>
      <Flex direction="column" flexGrow={1} marginLeft={{ base: 0, md: 10 }}>
        <Box justifySelf="flex-start" flexGrow={1}>
          <AnimatedHeading size="lg" marginY={5}>Hey there! My name&apos;s</AnimatedHeading>
          <AnimatedHeading
            marginBottom={5}
            fontSize={{ base: "6xl", md: "8xl" }}
            letterSpacing="-2px"
            bgGradient="linear(to-r, #8000FF, #30FFB3, #07F49E)"
            bgClip="text"
            fontWeight="extrabold"
            delay="1"
          >
            Gokul Viswanath.
          </AnimatedHeading>
          <AnimatedHeading size="xl" delay={2}>
            {" "}
            I am a full-stack web developer.
            <br />
            I also make games on the side.
          </AnimatedHeading>
        </Box>
        <AnimatedBox flexGrow={1} delay={3}>
          <Link href="https://github.com/1Gokul">
            <Button aria-label="Send Email" p={10} fontSize="2xl">
              My GitHub profile
            </Button>
          </Link>
        </AnimatedBox>
      </Flex>

    </HomeContainer>
  )
}

export default Intro
