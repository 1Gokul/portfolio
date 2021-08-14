import React from "react"
import { Flex, Heading } from "@chakra-ui/react"
import { CloudinaryContext } from "cloudinary-react"

import "@fontsource/manrope/variable.css"
import "@fontsource/space-mono"

import Header from "./Header/Header"
import Footer from "./Footer"
import "../../css/style.css"


const Layout = props => {

  let internalLinks = [], externalLinks = []

  if (props.type === "home"){
    internalLinks = [
      {
        name: "about"
      },
      {
        name: "toolbox"
      },
      {
        name: "projects"
      },
      {
        name: "say hi",
        offset: 0
      }
    ]
    externalLinks=[
      {
        name: "Blog",
        to: "/blogs"
      }
    ]
  }
  else if (props.type === "blog"){
    externalLinks = [
      {
        name: "Home",
        to: "/"
      },
      {
        name: "Blog",
        to: "/blogs"
      }
    ]
  }

  return (
    <>
      <Flex direction="column" m="0 auto">
        <CloudinaryContext cloudName="gokulv" secure="true">
          <Header type={props.type} internalLinks={internalLinks} externalLinks={externalLinks}/>

          {props.children}

          <Footer />
        </CloudinaryContext>
      </Flex>
    </>
  )
}

export default Layout


export const HomeContainer = props => {
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
      {props.children}
    </Flex>
  )
}

export const BlogContainer = props => {
  return (
    <Flex
      flexDirection="column"
      marginX="auto"
      marginTop="8rem"
      minH="100vh"
      minW="20vw"
      maxW={{ base: "95vw", md: "2xl" }}
      paddingX={{ base: 5, md: 10 }}
      {...props}
    >
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
