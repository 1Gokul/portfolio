import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";

import Logo from "./Logo";
import MobileNavMenu, { NavMenuToggler } from "./MobileNavMenu";
import DesktopNavMenu from "./DesktopNavMenu";

const Navbar = ({ internalLinks, externalLinks }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    document.body.style.overflow = !expanded ? "hidden" : "visible";
    setExpanded(!expanded);
  };
  return (
    <Flex direction="column">
      <Flex
        zIndex={2}
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        paddingY={{ base: 5, md: 6 }}
        paddingX={10}
      >
        <Logo />

        <DesktopNavMenu
          internalLinks={internalLinks}
          externalLinks={externalLinks}
        />

        <NavMenuToggler toggler={toggleExpanded} expanded={expanded} />
      </Flex>
      <MobileNavMenu
        toggler={toggleExpanded}
        expanded={expanded}
        internalLinks={internalLinks}
        externalLinks={externalLinks}
      />
    </Flex>
  );
};

export default Navbar;
