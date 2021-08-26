import React, { useState } from "react"
import { Button, Flex, IconButton } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"

import { ExternalLink, InternalLink } from "./Links"

const MotionFlex = motion (Flex)

const menuVariants = {
  open: {
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
  closed: {
    x: 1000,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
}

const MobileNavMenu = props => {
  const [expanded, setExpanded] = useState (false)

  const toggleExpanded = () => {
    document.body.style.overflow = !expanded ? "hidden" : "visible"
    setExpanded (!expanded)
  }

  return (
    <Flex direction="column">

      <NavMenuToggler toggler={toggleExpanded} expanded={expanded} />

      <MotionFlex
        flexDir="column"
        display={{ base: "flex", md: "none" }}
        w="100vw"
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        bgColor="aqua.900"
        padding={3}
        paddingTop="100px"
        initial="closed"
        animate={expanded ? "open" : "closed"}
        zIndex={-1}
        variants={menuVariants}
      >

        {props.internalLinks.map (({ name, offset = -100 }) => (
          <InternalLink key={name} to={name} offset={offset}>
            <NavLink onClick={toggleExpanded}>
              {name}
            </NavLink>
          </InternalLink>
        ))}

        {props.externalLinks.map (link => (
          <ExternalLink key={link.name} to={link.to}>
            <NavLink onClick={toggleExpanded}>
              {link.name}
            </NavLink>
          </ExternalLink>
        ))}
      </MotionFlex>
    </Flex>
  )
}

export default MobileNavMenu

const NavLink = props => (
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
    zIndex={5}
    {...props}
  >
    {props.children}
  </Button>
)

const NavMenuToggler = props => (
  <IconButton
    variant="ghost"
    aria-label="Open Navigation Menu"
    display={{ base: "flex", md: "none" }}
    onClick={props.toggler}
    fontSize={30}
  >
    {props.expanded ? <RiCloseLine /> : <RiMenu3Line />}
  </IconButton>
)
