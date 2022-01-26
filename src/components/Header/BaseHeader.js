import React, { useState } from "react";
import { Flex, Image } from "@chakra-ui/react";

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
      bgColor="rgb(0, 40, 63, 0.7)"
      top="0"
      as="nav"
      zIndex="3"
    >
      <Flex
        zIndex="3"
        justifyContent="space-between"
        alignItems="center"
        paddingY={{ base: 5, md: 6 }}
        paddingX={10}
      >
        <Link to="/" onClick={expanded ? toggleExpanded : null}>
          <Image src={LogoImg} alt="Website Logo" width="75px" />
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
