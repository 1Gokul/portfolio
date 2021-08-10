import React from "react"
import { Flex, Heading } from "@chakra-ui/react"
import { CloudinaryContext } from "cloudinary-react"
import { ScrollElement } from "react-scroll"

import "@fontsource/manrope/variable.css"
import "@fontsource/space-mono"

import Header from "./Header/Header"
import Footer from "./Footer"


const Layout = props => {

  return (
    <>
      <Flex direction="column" m="0 auto">
        <CloudinaryContext cloudName="gokulv" secure="true">
          <Header sections={props.sections}/>
          <Flex id="header"></Flex>
          {props.children}

          <Footer />
        </CloudinaryContext>
      </Flex>


    </>
  )
}

export default Layout


export const MainContainer = props => {
  return (
    <Flex
      flexDirection="column"
      marginX="auto"
      marginTop="8rem"
      minH="80vh"
      minW="70vw"
      maxW={{ base: "95vw", md: "75vw" }}
      paddingX={{ base: 5, md: 10 }}
      {...props}
    >
      <ScrollElement name={props.name}></ScrollElement>
      {props.children}
    </Flex>
  )
}


export const SectionHeading = props => (
  <Heading size="3xl"
    textAlign="center"
    marginBottom={14}
    display="inline-block"
    color="gray.300"
    {...props}
  >
    {props.children}
  </Heading>

)
