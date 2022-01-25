import React from "react";
import { Button, Flex, IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import { ExternalLink, InternalLink } from "./Links";

const MotionFlex = motion(Flex);

const menuVariants = {
  open: {
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2
    }
  },
  closed: {
    x: 1000,
    transition: {
      duration: 0.8,
      staggerDirection: -1
    }
  }
};

const navlinkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.25
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.25
    }
  }
};

const MobileNavMenu = ({ expanded, toggler, internalLinks, externalLinks }) => {
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
        bgColor="aqua.900"
        padding={3}
        paddingTop="100px"
        initial="closed"
        animate={expanded ? "open" : "closed"}
        variants={menuVariants}
      >
        {internalLinks.map(({ name, offset = -100 }) => (
          <motion.div key={name} variants={navlinkVariants}>
            <InternalLink to={name} offset={offset}>
              <NavLink onClick={toggler}>{name}</NavLink>
            </InternalLink>
          </motion.div>
        ))}

        {externalLinks.map((link) => (
          <motion.div key={link.name} variants={navlinkVariants}>
            <ExternalLink key={link.name} to={link.to}>
              <NavLink onClick={toggler}>{link.name}</NavLink>
            </ExternalLink>
          </motion.div>
        ))}
      </MotionFlex>
    </Flex>
  );
};

export default MobileNavMenu;

const NavLink = (props) => (
  <Button
    variant="ghost"
    aria-label={props.to}
    width="100%"
    alignContent="center"
    justifyContent="flex-start"
    fontSize="2xl"
    fontWeight="medium"
    textTransform="capitalize"
    borderRadius={0}
    paddingX={5}
    paddingY={10}
    borderBottom="1px"
    borderColor="gray.500"
    {...props}
  >
    {props.children}
  </Button>
);

export const NavMenuToggler = (props) => (
  <IconButton
    variant="ghost"
    aria-label="Open Navigation Menu"
    display={{ base: "flex", md: "none" }}
    onClick={props.toggler}
    fontSize={30}
  >
    {props.expanded ? <RiCloseLine /> : <RiMenu3Line />}
  </IconButton>
);
