import React from "react"
import { Flex, Box } from "@chakra-ui/react"

import "@fontsource/inter/variable.css"

import Navbar from "./Header/Header"


const Layout = props => {
  return (
    <Flex direction="column" m="0 auto" {...props}>
      <Navbar />
      {props.children}
    </Flex>
  )
}

export default Layout


export const MainContainer = props => {
  return (
    <Box
      marginX="auto"
      minH="70vh"
      minW="70vw"
      marginBottom={20}
      paddingX={10}
      {...props}
    >
      {props.children}
    </Box>
  )
}
