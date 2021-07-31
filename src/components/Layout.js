import React from "react"
import { Flex } from "@chakra-ui/react"
import { Helmet } from "react-helmet"

import "@fontsource/inter/variable.css"

import Navbar from "./Header/Header"

const meta = {
  title: "Gokul Viswanath",
  url: "https://gokulv.netlify.app/",
  description: "I am a full-stack developer and game developer based in Pune, India. This is my portfolio!"

}


const Layout = props => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={meta.description} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <title>{meta.title}</title>
      </Helmet>
      <Flex direction="column" m="0 auto" {...props}>
        <Navbar />
        {props.children}
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
      marginBottom={20}
      minH="100vh"
      minW="70vw"
      paddingX={10}
      {...props}
    >
      {props.children}
    </Flex>
  )
}
