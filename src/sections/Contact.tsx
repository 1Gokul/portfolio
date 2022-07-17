import React from "react";
import { Box, Button, Flex, Icon, Link, Text } from "@chakra-ui/react";

import {
  AnimatedContainer,
  HomeContainer,
  SectionHeading
} from "../components/LayoutComponents";
import { socialLinks } from "../content/Contact";
import { SocialLink } from "../types/HomeSections";

const Contact = () => {
  return (
    <HomeContainer id="say hi" marginBottom={{ base: 16, md: 0 }}>
      <SectionHeading>Say Hi</SectionHeading>
      <AnimatedContainer
        color="gray.200"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        marginTop={4}
        flexGrow={0.5}
      >
        <Text fontSize="2xl" textAlign="center">
          Want to collab on a project?
          <br /> Feel free to send an email my way!
        </Text>

        <Box marginY={8}>
          <Link
            href="mailto:gokulviswanath@protonmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              aria-label="Send Email"
              p={10}
              fontSize={{ base: "xl", md: "2xl" }}
            >
              Let&apos;s work together!
            </Button>
          </Link>
        </Box>

        <Box>
          <Text fontSize="2xl" align="center">
            Or reach out to me here
          </Text>
          <Flex width="auto" justifyContent="center" marginTop={5}>
            {socialLinks.map((socialLink) => (
              <SocialIconLink key={socialLink.label} {...socialLink} />
            ))}
          </Flex>
        </Box>
      </AnimatedContainer>
    </HomeContainer>
  );
};

const SocialIconLink = ({ color, label, icon, link }: SocialLink) => {
  return (
    <Link aria-label={label} href={link} target="_blank" rel="noreferrer">
      <Icon
        marginX={2}
        as={icon}
        transition="0.2s linear"
        color={{ base: color, md: "gray.100" }}
        _hover={{ color: color }}
        boxSize="60px"
      />
    </Link>
  );
};

export default Contact;
