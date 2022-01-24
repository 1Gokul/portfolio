import React from "react";
import { Flex } from "@chakra-ui/react";

import Logo from "./Logo";
import MobileNavMenu from "./MobileNavMenu";
import DesktopNavMenu from "./DesktopNavMenu";

const Navbar = ({ internalLinks, externalLinks }) => {
  return (
    <Flex
      zIndex={1}
      position="fixed"
      width="100%"
      bgColor="rgb(0, 40, 63, 0.7)"
      top="0"
      as="nav"
    >
      <Flex
        zIndex={2}
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        paddingY={{ base: 5, md: 6 }}
        paddingX={10}
      >
        <Logo />

        <Flex alignItems="center">
          <DesktopNavMenu
            internalLinks={internalLinks}
            externalLinks={externalLinks}
          />
          <MobileNavMenu
            internalLinks={internalLinks}
            externalLinks={externalLinks}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
