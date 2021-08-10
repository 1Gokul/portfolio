import React from "react"
import { Box, Button, Flex, Heading, Icon, Link } from "@chakra-ui/react"
import { IoLogoLinkedin } from "react-icons/io5"
import { RiRedditFill } from "react-icons/ri"
import { VscGithub, VscTwitter } from "react-icons/vsc"

import { MainContainer, SectionHeading } from "./Layout/Layout"

const Contact = () => {
  return (
    <MainContainer alignItems="center" justifyContent="space-evenly" id="say hi">
      <SectionHeading>
        Say Hi
      </SectionHeading>
      <Heading textAlign="center">
        Want to collab on a project?<br /> Feel free to send an email my way!
      </Heading>

      <Box marginY={5}>
        <Link href="mailto:viswanath1gokul@gmail.com">
          <Button aria-label="Send Email" p={10} fontSize="2xl">
            Let&apos;s work together!
          </Button>
        </Link>
      </Box>

      <Box>
        <Heading align="center">Or reach out to me here</Heading>
        <Flex columns={2} width="auto" justifyContent="center" marginTop={5}>

          <SocialIconLink
            label="My Github Profile"
            icon={VscGithub}
            link="https://github.com/1Gokul"
          />
          <SocialIconLink
            label="My Linkedin Profile"
            icon={IoLogoLinkedin}
            link="https://www.linkedin.com/in/gokul-viswanath-31383b193/"
          />
          <SocialIconLink
            label="My Twitter Profile"
            icon={VscTwitter}
            link="https://twitter.com/1GokulV"
          />
          <SocialIconLink
            label="My Reddit Profile"
            icon={RiRedditFill}
            link="https://old.reddit.com/user/_zygoat/"
          />
        </Flex>
      </Box>

    </MainContainer>
  )
}

const SocialIconLink = props => (
  <Link aria-label={props.label} href={props.link}>
    <Icon marginX={2} as={props.icon} boxSize="60px" />
  </Link>
)

export default Contact
