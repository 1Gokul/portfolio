import React, { useState } from "react"
import { Button, Flex, Icon } from "@chakra-ui/react"
import { IoArrowForward } from "react-icons/io5"
import { motion } from "framer-motion"

import { ExternalLink, InternalLink } from "./Links"

const MotionFlex = motion(Flex)

const variants = {
  open: {
    x:0
  },
  closed: {
    x:350
  },
}

const MobileNavMenu = props => {

  const [visible, setVisible] = useState(false)

  return (
    <MotionFlex
      flexDir="column"
      display={{ base: visible || props.expanded ? "flex" : "none", md: "none" }}
      w="100vw"
      h="100vh"
      pos="fixed"
      top="0"
      left="0"
      overflowY="auto"
      bgColor="aqua.900"
      padding={3}
      transition={{ type: "tween" }}
      animate={props.expanded ? "open" : "closed"}
      onAnimationComplete = {definition => {
        setVisible(definition !== "closed")
      }}
      variants={variants}
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
            <NavLink onClick={props.toggleExpanded}>
              {link.name}
              <Icon marginTop={2} as={IoArrowForward} />
            </NavLink>
          </ExternalLink>
        ))}
      </Flex>
    </MotionFlex>
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
    {...props}
  >
    {props.children}
  </Button>
)

