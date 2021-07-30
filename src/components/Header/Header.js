import React, { useState } from "react"
import { Flex, useColorMode, IconButton, Button } from "@chakra-ui/react"
import {
  RiSunFill,
  RiMoonClearFill,
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
  const { colorMode, toggleColorMode } = useColorMode ()
  const [expanded, setExpanded] = useState (false)

  const toggleExpanded = () => {
    document.body.style.overflow = !expanded ? "hidden" : "visible"
    setExpanded (!expanded)
  }

  return (
    <Flex position="sticky" as="nav" mb={10}>
      <Flex
        zIndex={20}
        paddingY={7}
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

          <ColourModeToggler
            currentMode={colorMode}
            toggler={toggleColorMode}
          />
          <NavMenuToggler toggler={toggleExpanded} expanded={expanded} />
        </Flex>
      </Flex>

      <MobileNavMenu expanded={expanded} colorMode={colorMode}/>

    </Flex>
  )
}

const DesktopNavMenu = () => (
  <Flex display={{ base: "none", md: "flex" }}>
    {links.map (link => (
      <NavLink key={link.title} to={link.to}>
        {link.title}
      </NavLink>
    ))}
  </Flex>
)

const MobileNavMenu = props => (

  <Flex
    display={{ base: props.expanded ? "flex" : "none", md: "none" }}
    w="100vw"
    h="100vh"
    zIndex={19}
    pos="fixed"
    bgColor={props.colorMode === "dark" ? "gray.800" : "gray.50"}
    top="0"
    left="0"
    overflowY="auto"
    flexDir="column"
  >

    <Flex
      flexDirection="column"
      marginTop="150px">
      {links.map (link => (
        <NavLink key={link.title} to={link.to} my={5}>
          {link.title}
        </NavLink>
      ))}
    </Flex>
  </Flex>
)

const NavLink = props => (
  <Link to="#">
    <Button
      variant="ghost"
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

const ColourModeToggler = props => (
  <IconButton
    marginX={10}
    onClick={props.toggler}
    icon={props.currentMode === "dark" ? <RiMoonClearFill /> : <RiSunFill />}
  />
)

const NavMenuToggler = props => (
  <IconButton
    display={{ base: "flex", md: "none" }}
    onClick={props.toggler}
    fontSize={30}
  >
    {props.expanded ? <RiCloseLine /> : <RiMenu3Line />}
  </IconButton>
)

export default Navbar
