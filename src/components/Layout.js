import React from "react"
import Navbar from "./Header/Header"
import { Flex,Box } from "@chakra-ui/react"

const Layout = props => {
  return(
    <Flex
      direction="column"
      m="0 auto"
      {...props}
    >
      <Navbar />
      {props.children}

    </Flex>
  )
}

export default Layout

export const MyContainer = props => {
  return(
    <Box
      alignSelf="center"
      minH="80vh"
      minW="70vw"
      px={10}
      mb={20}
      {...props}
    >
      {props.children}
    </Box>

  )
}