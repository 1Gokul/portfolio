import React from "react"
import { SimpleGrid } from "@chakra-ui/layout"
import { ExternalLink, InternalLink } from "./Links"
import { Box, Center, Divider } from "@chakra-ui/react"

const DesktopNavMenu = ({ internalLinks, externalLinks }) => (
  <SimpleGrid alignItems="center" rows={1} spacing={10} display={{ base: "none", md: "flex" }}>

    {
      internalLinks.map(({ name, offset=-100 }) => (
        <InternalLink key={name} to={name} offset={offset}>
          <NavLink>
            {name}
          </NavLink>
        </InternalLink>
      ))
    }


    {internalLinks.length > 0
  &&
     <Center height="40px">
       <Divider bg="aqua.200" orientation="vertical" />
     </Center>
    }


    {externalLinks.map(link => (
      <ExternalLink key={link.name} to={link.to}>
        <NavLink>
          {link.name}
        </NavLink>
      </ExternalLink>
    ))}


  </SimpleGrid>

)

export default DesktopNavMenu



const NavLink = props => (
  <Box
    padding={1}
    as="button"
    w="100%"
    fontSize="xl"
    textAlign="center"
    fontWeight="medium"
    transition="0.2s ease-in-out"
    textTransform="capitalize"
    _hover={{
      color: "aqua.300",
    }}
  >
    {props.children}
  </Box>
)
