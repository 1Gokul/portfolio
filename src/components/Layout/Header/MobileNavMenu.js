import React from "react"
import { Button, Flex, Icon } from "@chakra-ui/react"
import { IoArrowForward } from "react-icons/io5"

import { ExternalLink, InternalLink } from "./Links"


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

    <Flex flexDirection="column" marginTop="100px">
      {props.internalLinks.map(({ name, offset=-100 }) => (
        <InternalLink key={name} to={name} offset={offset}>
          <NavLink onClick={props.toggleExpanded}>
            {name}
          </NavLink>
        </InternalLink>
      ))
      }


      {props.externalLinks.map(link => (
        <ExternalLink key={link.name} to={link.to}>
          <NavLink>
            {link.name}
            <Icon marginTop={2} as={IoArrowForward} />
          </NavLink>
        </ExternalLink>
      ))}
    </Flex>
  </Flex>
)

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
    {...props}
  >
    {props.children}
  </Button>
)

