import React from "react"
import { Box, Link } from "@chakra-ui/react"
import { Link as ScrollLink } from "react-scroll"
import { Link as GatsbyLink } from "gatsby"
import { motion } from "framer-motion"

const MotionLink = motion(Box)


const navlinkVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y:150,
    opacity: 0
  }
}


export const InternalLink = props => (
  <MotionLink variants={navlinkVariants}>
    <ScrollLink
      to={props.to}
      smooth="easeOutQuad"
      offset={props.offset}
      duration={500}
    >
      {props.children}
    </ScrollLink>
  </MotionLink>

)

export const ExternalLink = props => (
  <MotionLink variants={navlinkVariants}>
    <Link as={GatsbyLink} to={props.to}>
      {props.children}
    </Link>
  </MotionLink>
)

