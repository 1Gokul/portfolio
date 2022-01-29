import React, { useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

import LogoImg from "../../images/website_logo.svg";
import MobileNavMenu, { NavMenuToggler } from "./MobileNavMenu";
import DesktopNavMenu from "./DesktopNavMenu";
import { Link } from "gatsby";

const Navbar = ({ internalLinks, externalLinks }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    document.body.style.overflow = !expanded ? "hidden" : "visible";
    setExpanded(!expanded);
  };
  return (
    <Flex
      direction="column"
      position="sticky"
      width="100%"
      backgroundColor="#001b2b"
      top="0"
      as="nav"
      zIndex="3"
    >
      <Box
        height="0.25rem"
        background="linear-gradient(to right, var(--theme-aqua), #00ff73)"
      />

      <Flex
        zIndex="3"
        justifyContent="space-between"
        alignItems="center"
        paddingY={5}
        paddingX={10}
      >
        <Link to="/" onClick={expanded ? toggleExpanded : null}>
          <Image src={LogoImg} alt="Website Logo" width="80px" />
        </Link>

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
