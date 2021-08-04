import { Flex, Link, Text } from "@chakra-ui/react"
import React from "react"


const Footer = () => {
  return(
    <Flex flexDirection="column" alignItems="center" width="100%" marginBottom={5}>
      <Link href="https://github.com/1Gokul/portfolio">
        <Text align="center">&#169; Gokul Viswanath {(new Date().getFullYear())}
          <br />Built with Gatsby</Text>
      </Link>

    </Flex>
  )
}

export default Footer