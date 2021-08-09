import React from "react"
import { Flex } from "@chakra-ui/react"
import { Image as CNImage, Transformation } from "cloudinary-react"

const Logo = props => {
  return (
    <Flex {...props}>
      <CNImage publicId="Portfolio/website_logo.svg" alt="Website Logo"  width="75px">
        <Transformation quality="10"/>
      </CNImage>
    </Flex>
  )
}

export default Logo
