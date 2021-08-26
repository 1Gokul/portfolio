import React, { forwardRef, useEffect } from "react"
import { Box, Flex, Heading } from "@chakra-ui/react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const MotionFlex = motion(Flex),
  MotionHeading = motion(Heading),
  MotionBox = motion(Box)

export const AnimatedContainer = props => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: props.delay || 0, duration: 0.5 },
    },
    hidden: { opacity: 0, y: 150 },
  }

  useEffect(
    () => {
      if(inView) {
        controls.start("visible")
      }
    },
    [controls, inView]
  )

  return(
    <MotionFlex
      ref={ref}
      animate={ props.animate || controls}
      initial={ props.initial || "hidden" }
      variants={props.variants || variants}
      {...props}
    >
      {props.children}
    </MotionFlex>
  )
}

export const HomeContainer = props => {
  return(
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

export const BlogContainer = forwardRef((props, ref) => {
  return(
    <Flex
      ref={ref}
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
})

BlogContainer.displayName = "BlogContainer"

export const SectionHeading = props => (
  <Heading
    size="3xl"
    textAlign="center"
    marginBottom={14}
    display="inline-block"
    color="gray.300"
    lineHeight="1.1em"
    initial={{ y: 500, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    {...props}
  >
    {props.children}
  </Heading>
)

const initial = {
    opacity: 0,
    y: 150,
  },
  animate = {
    opacity: 1,
    y: 0,
  }

export const AnimatedHeading = props => (
  <MotionHeading
    initial={initial}
    animate={animate}
    transition={{
      duration: 0.5,
      delay: props.delay || 0,
    }}
    {...props}
  >
    {props.children}
  </MotionHeading>
)

export const AnimatedBox = props => (
  <MotionBox
    initial={ props.initial  || initial}
    animate={ props.animate || animate}
    transition={{
      duration: 0.5,
      delay: props.delay || 0,
    }}
    {...props}
  >
    {props.children}
  </MotionBox>
)
