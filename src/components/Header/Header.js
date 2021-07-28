import { Box, Flex, Link, useColorMode, IconButton } from "@chakra-ui/react"
import { RiSunFill, RiMoonClearFill, RiMenu3Line, RiCloseLine } from "react-icons/ri"
import React, { useState } from "react"
import Logo from "./Logo"

const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode()
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(!expanded)

  return(
    <Flex
      as="nav"
      mb={10}
      p={12}
      justify="space-between"
      wrap="wrap"
      width="100%"
      alignItems="center"
    >
      <Logo />
      <NavMenuToggler expanded={expanded} toggler={toggleExpanded} />
      <Box display={{ base: "none", md:"block" }}>
        <NavLink link="www.google.com">Skills</NavLink>
        <NavLink link="www.google.com">Projects</NavLink>
        <NavLink link="www.google.com">Say Hello</NavLink>
        <ColourModeToggler toggler={toggleColorMode} currentMode={colorMode} />
      </Box>
    </Flex>
  )

}


const NavLink = props => (
  <Link href={props.link} fontSize="xl" marginX={5} w="100%">
    {props.children}
  </Link>

)

const ColourModeToggler = props => (
  <IconButton
    marginX={5}
    onClick={props.toggler}
    icon={props.currentMode === "dark" ? <RiMoonClearFill /> : <RiSunFill />}/>
)

const NavMenuToggler = props => (
  <Box display={{ base: "block", md: "none" }} onClick={props.toggler} fontSize={30}>
    { props.expanded ? <RiCloseLine /> : <RiMenu3Line />}
  </Box>
)

export default Navbar