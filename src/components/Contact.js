import { Box, Button, Flex, Heading, Icon, Link } from "@chakra-ui/react"
import React from "react"
import { IoLogoLinkedin } from "react-icons/io5"
import { RiRedditFill } from "react-icons/ri"
import { VscGithub, VscTwitter } from "react-icons/vsc"
import { MainContainer, SectionHeading } from "./Layout/Layout"


const Contact = () => {
  return (
    <MainContainer minH="80vh" alignItems="center" justifyContent="center">
      <SectionHeading>
        Say Hi
      </SectionHeading>
      <Heading textAlign="center">
          Want to collab on a project?<br/> Feel free to send an email my way!
      </Heading>

      <Box marginY={20}>
        <Link href="mailto:viswanath1gokul@gmail.com">
          <Button aria-label="Send Email" p={10} fontSize="2xl" >Let&apos;s work together!</Button>
        </Link>
      </Box>

      <Box>
        <Heading align="center">Or send a message here</Heading>
        <Flex columns={2} width="auto" justifyContent="center" marginTop={5}>

          <SocialIconLink icon={VscGithub} link="https://github.com/1Gokul"/>
          <SocialIconLink icon={IoLogoLinkedin} link="https://www.linkedin.com/in/gokul-viswanath-31383b193/"/>
          <SocialIconLink icon={VscTwitter} link="https://twitter.com/1GokulV"/>
          <SocialIconLink icon={RiRedditFill} link="https://twitter.com/1GokulV"/>
        </Flex>
      </Box>


    </MainContainer>
  )
}

const SocialIconLink = props => (
  <Link href={props.link}>
    <Icon marginX={2} as={props.icon} height="60px" width="60px"/>
  </Link>
)

export default Contact