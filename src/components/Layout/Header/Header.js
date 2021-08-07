import React, { useState } from "react"
import { Flex, IconButton, Box, SimpleGrid } from "@chakra-ui/react"
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
  <SimpleGrid rows={1} spacing={10} display={{ base: "none", md: "flex" }}>
    {links.map (link => (
      <NavLink key={link.title} to={link.to} padding={1} fontSize="xl" textAlign="center">
        {link.title}
      </NavLink>
    ))}

  </SimpleGrid>
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
    bgColor="aqua.900"
    padding={3}
  >

    <Flex
      flexDirection="column"
      marginTop="100px">
      {links.map (link => (
        <NavLink key={link.title} aria-label={link.title} to={link.to} padding={7} fontSize="2xl" textAlign="left" borderBottom="1px"borderColor="gray.500">
          {link.title}
        </NavLink>
      ))}

    </Flex>
  </Flex>
)

const NavLink = props => (
  <Link to="#" bg="pink">
    <Box
      as="button"
      w="100%"
      fontWeight="medium"
      transition= "0.2s ease-in-out"
      _hover={{
        color: "aqua.600",
      }}
      {...props}
    >
      {props.children}
    </Box>
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
