import React, { ReactNode } from "react";
import { Box, Center, Divider, Flex } from "@chakra-ui/react";

import { ExternalLink, InternalLink } from "./Links";
import { HeaderLink } from "../../types/Header";
import { Default_Internal_Link_Offset } from "../../constants/Header";

const DesktopNavMenu = ({
  internalLinks,
  externalLinks
}: {
  internalLinks: HeaderLink[];
  externalLinks: HeaderLink[];
}) => (
  <Flex
    alignItems="center"
    justifyContent="space-between"
    display={{ base: "none", md: "flex" }}
  >
    {internalLinks.map((link: HeaderLink) => (
      <InternalLink
        key={link.name}
        to={link.name}
        offset={link.offset ?? Default_Internal_Link_Offset}
      >
        <NavLink>{link.name}</NavLink>
      </InternalLink>
    ))}

    {internalLinks.length > 0 && (
      <Center height="40px">
        <Divider bg="var(--theme-aqua)" orientation="vertical" marginX={5} />
      </Center>
    )}

    {externalLinks.map((link) => (
      <ExternalLink key={link.name} to={link.to ?? "/"}>
        <NavLink>{link.name}</NavLink>
      </ExternalLink>
    ))}
  </Flex>
);

export default DesktopNavMenu;

const NavLink = ({ children }: { children: ReactNode }) => (
  <Box
    as="button"
    marginX={3}
    fontSize="xl"
    textAlign="center"
    fontWeight="medium"
    transition="0.2s ease-in-out"
    textTransform="capitalize"
    _hover={{
      color: "var(--theme-aqua)"
    }}
  >
    {children}
  </Box>
);
