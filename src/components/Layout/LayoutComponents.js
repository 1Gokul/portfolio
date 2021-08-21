import React from "react"
import { Flex, Heading } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionFlex = motion(Flex)


const Container = props => {

  const transition = {
    opacity: {
      duration: 0.75
    },
    y: {
      duration: 0.5
    }
  }

  return (
    <MotionFlex
      initial={{ opacity:0, y:150 }} animate={{ opacity:1, y:0 }} transition={transition} {...props}>
      {props.children}
    </MotionFlex>)
}

export const HomeContainer = props => {
  return (
    <Container
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
    </Container>
  )
}

export const BlogContainer = props => {
  return (
    <Container
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
    </Container>
  )
}


export const SectionHeading = props => (
  <Heading
    size="3xl"
    textAlign="center"
    marginBottom={14}
    display="inline-block"
    color="gray.300"
    lineHeight="1.1em"

    initial={{ y:500, opacity: 0 }}
    animate={{ y:0, opacity:1 }}
    {...props}
  >
    {props.children}
  </Heading>

)