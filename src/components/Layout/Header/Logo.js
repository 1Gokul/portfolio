import React from "react"
import { Flex } from "@chakra-ui/react"
import { Image as CNImage, Transformation } from "cloudinary-react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const MotionFlex = motion(Flex)

const Logo = props => {
  return (
    <Link to="/">
      <MotionFlex {...props} whileHover={{ rotate: 360 }} transition={{ duration: 2 }}>
        <CNImage publicId={"Portfolio/website_logo.svg"} alt="Website Logo"  width="75px" height="90px">
          <Transformation quality="10"/>
        </CNImage>
      </MotionFlex>
    </Link>

  )
}

export default Logo
