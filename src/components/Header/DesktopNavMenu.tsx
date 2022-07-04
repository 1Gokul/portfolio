import React from "react";
import { Box, Center, Divider, Flex } from "@chakra-ui/react";

import { ExternalLink, InternalLink } from "./Links";

const DesktopNavMenu = ({ internalLinks, externalLinks }) => (
  <Flex
    alignItems="center"
    justifyContent="space-between"
    display={{ base: "none", md: "flex" }}
  >
    {internalLinks.map(({ name, offset = -100 }) => (
      <InternalLink key={name} to={name} offset={offset}>
        <NavLink>{name}</NavLink>
      </InternalLink>
    ))}

    {internalLinks.length > 0 && (
      <Center height="40px">
        <Divider bg="var(--theme-aqua)" orientation="vertical" marginX={5} />
      </Center>
    )}

    {externalLinks.map((link) => (
      <ExternalLink key={link.name} to={link.to}>
        <NavLink>{link.name}</NavLink>
      </ExternalLink>
    ))}
  </Flex>
);

export default DesktopNavMenu;

const NavLink = (props) => (
  <Box
    padding={1}
    as="button"
    marginX={3}
    fontSize="xl"
    textAlign="center"
    fontWeight="medium"
    transition="0.2s ease-in-out"
    textTransform="capitalize"
  >
    {props.children}
  </Box>
);
