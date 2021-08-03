import React from "react"
import { Flex, Heading } from "@chakra-ui/react"
import { Helmet } from "react-helmet"

import "@fontsource/inter/variable.css"
import "@fontsource/space-mono"

import Navbar from "./Header/Header"

const meta = {
  title: "Gokul Viswanath",
  url: "https://gokulv.netlify.app/",
  description: "I am a full-stack developer based in Pune, India. This is my portfolio!"
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
      maxW={{ base: "100vw", md: "75vw" }}
      paddingX={{ base: 5, md: 10 }}
      {...props}
    >
      {props.children}
    </Flex>
  )
}


const sectionHeadingStyle = {
  content: `""`, // eslint-disable-line
  display: "inline-block",
  width: "50%",
  margin: "0 .5em 0 -50%",
  verticalAlign: "middle",
  borderBottom: "1px solid"
}

export const SectionHeading = props => (
  <Heading size="3xl"
    alignSelf="center"
    marginBottom={10}
    display="inline-block"
    _before={{ base: "none", md:sectionHeadingStyle }}
    _after={{
      base: "none",
      md: {
        ...sectionHeadingStyle,
        margin: "0 -50% 0 .5em"
      }
    }}
  >
    {props.children}
  </Heading>

)
