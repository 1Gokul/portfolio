import { Button, Flex } from "@chakra-ui/react"
import React from "react"
import { ScrollLink } from "./Header"


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
      {props.sections.map (section => (
        <NavLink
          key={section}
          aria-label={section}
          to={section}
          onClick={() => props.toggleExpanded()}
        >
          {section}
        </NavLink>
      ))}
    </Flex>
  </Flex>
)

const NavLink = props => (
  <ScrollLink to={props.to}>
    <Button
      variant="ghost"
      width="100%"
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
  </ScrollLink>
)

export default MobileNavMenu