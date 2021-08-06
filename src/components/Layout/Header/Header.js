import React, { useState } from "react"
import { Flex, IconButton, Button, ButtonGroup } from "@chakra-ui/react"
import {
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri"
import { Link } from "gatsby"

import Logo from "./Logo"

const links = [
  {
    title: "Skills",
  },
  {
    title: "Projects",
  },
  {
    title: "Blogs",
  },
  {
    title: "Say Hi",
  },
]

const Navbar = () => {
  const [expanded, setExpanded] = useState (false)

  const toggleExpanded = () => {
    document.body.style.overflow = !expanded ? "hidden" : "visible"
    setExpanded (!expanded)
  }

  return (
    <Flex position="fixed" width="100%"
      bgColor="rgb(0, 27, 43, 0.8)" top="0" as="nav" zIndex="5"
    >
      <Flex
        zIndex="5"
        paddingY={{ base: 5, md: 7 }}
        paddingX={10}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <Flex>
          <Logo />
        </Flex>

        <Flex align="center">
          <DesktopNavMenu />

          <NavMenuToggler toggler={toggleExpanded} expanded={expanded} />
        </Flex>
      </Flex>

      <MobileNavMenu expanded={expanded}/>

    </Flex>
  )
}

const DesktopNavMenu = () => (
  <Flex display={{ base: "none", md: "flex" }}>
    <ButtonGroup>
      {links.map (link => (
        <NavLink key={link.title} to={link.to}>
          {link.title}
        </NavLink>
      ))}
    </ButtonGroup>

  </Flex>
)

const MobileNavMenu = props => (

  <Flex
    flexDir="column"
    display={{ base: props.expanded ? "flex" : "none", md: "none" }}
    w="100vw"
    h="100vh"
    pos="fixed"
    top="0"
    left="0"
    overflowY="auto"
    bgColor="gray.800"
  >

    <Flex
      flexDirection="column"
      marginTop="150px">
      {links.map (link => (
        <NavLink key={link.title} aria-label={link.title} to={link.to} my={5}>
          {link.title}
        </NavLink>
      ))}

    </Flex>
  </Flex>
)

const NavLink = props => (
  <Link to="#">
    <Button
      variant="nav"
      w="100%"
      paddingY={7}
      marginX={{ base: 0, md: 5 }}
      fontSize="xl"
      fontWeight="normal"
      {...props}
    >
      {props.children}
    </Button>
  </Link>
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

export default Navbar
