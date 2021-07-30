import { Box, Button, Heading, Link } from "@chakra-ui/react"
import React from "react"
import { MainContainer } from "./Layout"


const Contact = () => {
  return (
    <MainContainer align="center">
      <Heading>
          Want to collab on a project? Got an idea but not sure how to begin?
    Feel free to send an email my way!
      </Heading>
      <Link href="mailto:viswanath1gokul@gmail.com">
        <Button aria-label="Send Email" p={6} >Let&apos;s work together!</Button>
      </Link>

      <Box>
        <Heading>Or say hello here</Heading>
        <a href="https://twitter.com/home">Twitter</a> <br />
        <a href="https://www.linkedin.com/feed/">LinkedIn</a> <br />
        <a href="https://github.com/">GitHub</a> <br />
      </Box>

    </MainContainer>
  )
}

export default Contact