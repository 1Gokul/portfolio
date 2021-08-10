import React, { useState } from "react"
import { Flex, IconButton } from "@chakra-ui/react"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import { Link } from "react-scroll"

import Logo from "./Logo"
import MobileNavMenu from "./MobileNavMenu"
import DesktopNavMenu from "./DesktopNavMenu"


const Navbar = ({ sections }) => {
  const [expanded, setExpanded] = useState (false)

  const toggleExpanded = () => {
    document.body.style.overflow = !expanded ? "hidden" : "visible"
    setExpanded (!expanded)
  }

  return (
    <Flex
      position="fixed"
      width="100%"
      bgColor="rgb(0, 27, 43, 0.8)"
      top="0"
      as="nav"
      zIndex="5"
    >
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        paddingY={{ base: 5, md: 6 }}
        paddingX={10}
        zIndex="5"
      >
        <Logo />

        <Flex alignItems="center">
          <DesktopNavMenu sections={sections}/>
          <NavMenuToggler toggler={toggleExpanded} expanded={expanded} />
        </Flex>
      </Flex>

      <MobileNavMenu sections={sections} expanded={expanded} toggleExpanded={toggleExpanded} />
    </Flex>
  )
}

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

export const ScrollLink = props => (
  <Link
    to={props.to}
    spy="easeInQuart"
    smooth={true}
    offset={-100}
    duration={750}
  >
    {props.children}
  </Link>
)

export default Navbar
