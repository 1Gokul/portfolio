import React from "react"
import { Link } from "@chakra-ui/layout"
import { Link as ScrollLink } from "react-scroll"
import { Link as GatsbyLink } from "gatsby"



export const InternalLink = props => (
  <ScrollLink
    to={props.to}
    smooth="easeOutQuad"
    offset={props.offset | -100}
    duration={500}
  >
    {props.children}
  </ScrollLink>
)

export const ExternalLink = props => (
  <Link as={GatsbyLink} to={props.to}>
    {props.children}
  </Link>
)
