import React from "react";
import { Button, Flex, Heading, Icon, Link } from "@chakra-ui/react";

import {
  AnimatedBox,
  AnimatedContainer,
  AnimatedHeading,
  HomeContainer,
  SectionHeading
} from "./Layout/LayoutComponents";
import { socialLinks } from "../data/Contact";

const Contact = () => {
  return (
    <HomeContainer id="say hi" marginBottom="0">
      <SectionHeading>Say Hi</SectionHeading>
      <AnimatedContainer
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        flexGrow={0.5}
      >
        <AnimatedHeading textAlign="center">
          Want to collab on a project?
          <br /> Feel free to send an email my way!
        </AnimatedHeading>

        <AnimatedBox marginY={5}>
          <Link href="mailto:gokulviswanath@protonmail.com">
            <Button aria-label="Send Email" p={10} fontSize="2xl">
              Let&apos;s work together!
            </Button>
          </Link>
        </AnimatedBox>

        <AnimatedBox>
          <Heading align="center">Or reach out to me here</Heading>
          <Flex columns={2} width="auto" justifyContent="center" marginTop={5}>
            {socialLinks.map((socialLink) => (
              <SocialIconLink key={socialLink.label} {...socialLink} />
            ))}
          </Flex>
        </AnimatedBox>
      </AnimatedContainer>
    </HomeContainer>
  );
};

const SocialIconLink = (props) => {
  return (
    <Link aria-label={props.label} to={props.link} target="_blank">
      <Icon
        marginX={2}
        as={props.icon}
        transition="0.2s linear"
        _hover={{ color: props.color }}
        boxSize="60px"
      />
    </Link>
  );
};

export default Contact;
