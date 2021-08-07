import { Flex, Link, Text } from "@chakra-ui/react"
import React from "react"


const Footer = () => {
  return(
    <Flex flexDirection="column" alignItems="center" width="100%" marginTop={10} marginBottom={3}>
      <Link href="https://github.com/1Gokul/portfolio">
        <Text align="center" color="gray.400">Made by Gokul Viswanath
          <br />Built with Gatsby</Text>
      </Link>

    </Flex>
  )
}

export default Footer