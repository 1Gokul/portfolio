import React from "react"
import { Box, Link } from "@chakra-ui/react"
import { Link as ScrollLink } from "react-scroll"
import { Link as GatsbyLink } from "gatsby"
import { motion } from "framer-motion"

const MotionLink = motion(Box)


const navlinkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.25
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.25
    }
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

