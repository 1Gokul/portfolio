import React from "react"
import { Flex } from "@chakra-ui/react"
import { Image as CNImage } from "cloudinary-react"

const Logo = props => {
  return (
    <Flex {...props} width="75px">
      <CNImage publicId="Portfolio/website_logo.svg" >
      </CNImage>
    </Flex>
  )
}

export default Logo
