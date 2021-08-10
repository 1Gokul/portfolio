import React from "react"
import { SimpleGrid } from "@chakra-ui/layout"
import { ScrollLink } from "./Header"
import { Box } from "@chakra-ui/react"

const DesktopNavMenu = ({ sections }) => (
  <SimpleGrid rows={1} spacing={10} display={{ base: "none", md: "flex" }}>
    {sections.map (section => (
      <NavLink
        padding={1}
        offset={section === "say hi" ? 0 : -100}
        key={section}
        to={section}
      >
        {section}
      </NavLink>
    ))}

  </SimpleGrid>
)


export const NavLink = props => (
  <ScrollLink
    to={props.to}
    offset={props.offset}
  >
    <Box
      as="button"
      w="100%"
      fontSize="xl"
      textAlign="center"
      fontWeight="medium"
      transition="0.2s ease-in-out"
      textTransform="capitalize"
      _hover={{
        color: "aqua.600",
      }}
    >
      {props.children}
    </Box>
  </ScrollLink>
)

export default DesktopNavMenu