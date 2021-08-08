import React from "react"
import { Flex, Image } from "@chakra-ui/react"

const Logo = props => {
  return (
    <Flex {...props}>
      <Image
        width="75px"
        src="https://res.cloudinary.com/gokulv/image/upload/v1628426678/Portfolio/website_logo_xzpwm1.svg"
        alt="Website Logo"
      />
    </Flex>
  )
}

export default Logo
