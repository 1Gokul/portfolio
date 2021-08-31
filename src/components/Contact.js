import React from "react"
import { Button, Flex, Heading, Icon } from "@chakra-ui/react"
import { IoLogoLinkedin } from "react-icons/io5"
import { RiRedditFill } from "react-icons/ri"
import { VscGithub, VscTwitter } from "react-icons/vsc"
import { Link as GatsbyLink } from "gatsby"

import { AnimatedBox, AnimatedContainer, AnimatedHeading, HomeContainer, SectionHeading } from "./Layout/LayoutComponents"


const socialLinks = [
  {
    label: "GitHub",
    icon: VscGithub,
    color: "#2ea650",
    link: "https://github.com/1Gokul"
  },
  {
    label: "Linkedin",
    icon: IoLogoLinkedin,
    color: "#0077b5",
    link: "https://www.linkedin.com/in/gokul-viswanath-31383b193/"
  },
  {
    label: "Twitter",
    icon: VscTwitter,
    color: "#1da1f2",
    link: "https://twitter.com/1GokulV"
  },
  {
    label: "Reddit",
    icon: RiRedditFill,
    color: "#ff4500",
    link: "https://old.reddit.com/message/compose?to=_zygoat"
  },
]

const Contact = () => {
  return (
    <HomeContainer id="say hi">
      <SectionHeading>
        Say Hi
      </SectionHeading>
      <AnimatedContainer flexDirection="column" alignItems="center" justifyContent="space-evenly" flexGrow={1}>
        <AnimatedHeading textAlign="center">
        Want to collab on a project?<br /> Feel free to send an email my way!
        </AnimatedHeading>

        <AnimatedBox marginY={5}>
          <GatsbyLink href="mailto:viswanath1gokul@gmail.com">
            <Button aria-label="Send Email" p={10} fontSize="2xl">
            Let&apos;s work together!
            </Button>
          </GatsbyLink>
        </AnimatedBox>

        <AnimatedBox>
          <Heading align="center">Or reach out to me here</Heading>
          <Flex columns={2} width="auto" justifyContent="center" marginTop={5}>

            {socialLinks.map(socialLink =>
              <SocialIconLink key={socialLink.label} {...socialLink}
              />
            )}
          </Flex>
        </AnimatedBox>
      </AnimatedContainer>


    </HomeContainer>
  )
}

const SocialIconLink = props => {
  return(
    <GatsbyLink aria-label={props.label} href={props.link} target="_blank">
      <Icon marginX={2} as={props.icon} transition="0.2s linear" _hover={{ color: props.color }} boxSize="60px" />
    </GatsbyLink>

  )}

export default Contact
