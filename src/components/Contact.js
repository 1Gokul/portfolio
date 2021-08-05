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
        <Heading textAlign="center">Or send a message here</Heading>
        <Flex justifyContent="space-between" alignItems="center" padding={5}>
          {/* <a href="https://twitter.com/1GokulV">Twitter</a> <br />
          <a href="https://www.linkedin.com/in/gokul-viswanath-31383b193/">LinkedIn</a> <br />
          <a href="https://github.com/1Gokul">GitHub</a> <br /> */}

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
    <Icon as={props.icon} height="60px" width="60px" marginX={4}/>
  </Link>
)

export default Contact