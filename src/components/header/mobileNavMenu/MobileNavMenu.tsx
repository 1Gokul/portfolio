import React from "react";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { ExternalLink, InternalLink } from "../Links";
import { menuVariants, navlinkVariants } from "../../../constants/Header";
import { HeaderLink } from "../../../types/Header";
import NavLink from "./NavLink";

const MotionFlex = motion(Flex);

const MobileNavMenu = ({
  expanded,
  toggler,
  internalLinks,
  externalLinks
}: {
  expanded: boolean;
  toggler: () => void;
  internalLinks: HeaderLink[];
  externalLinks: HeaderLink[];
}) => {
  return (
    <Flex direction="column">
      <MotionFlex
        zIndex={1}
        flexDir="column"
        display={{ base: "flex", md: "none" }}
        pos="fixed"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgColor="var(--theme-mobile-nav-bg)"
        padding={3}
        paddingTop="100px"
        initial="closed"
        animate={expanded ? "open" : "closed"}
        variants={menuVariants}
      >
        {internalLinks.map(({ name, offset = -100 }: HeaderLink) => (
          <motion.div key={name} variants={navlinkVariants}>
            <InternalLink to={name} offset={offset}>
              <NavLink
                onClick={toggler}
                aria-label={`Click to go to the ${name} section.`}
              >
                {name}
              </NavLink>
            </InternalLink>
          </motion.div>
        ))}

        {externalLinks.map((link) => (
          <motion.div key={link.name} variants={navlinkVariants}>
            <ExternalLink key={link.name} to={link.to ?? "/"}>
              <NavLink
                onClick={toggler}
                aria-label={`Click to go to the ${link.name} page.`}
              >
                {link.name}
              </NavLink>
            </ExternalLink>
          </motion.div>
        ))}
      </MotionFlex>
    </Flex>
  );
};

export default MobileNavMenu;
