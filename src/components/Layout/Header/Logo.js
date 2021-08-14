import React, { useState } from "react"
import { Flex } from "@chakra-ui/react"
import { Image as CNImage, Transformation } from "cloudinary-react"
import { Link } from "gatsby"

const Logo = props => {
  const [logoUrl, setLogoUrl] = useState("website_logo")
  return (
    <Link to="/">
      <Flex {...props} onMouseEnter={() => setLogoUrl("website_logo_hovered")} onMouseLeave={() => setLogoUrl("website_logo")}>
        <CNImage publicId={`Portfolio/${logoUrl}.svg`} alt="Website Logo"  width="75px">
          <Transformation quality="10"/>
        </CNImage>
      </Flex>
    </Link>

  )
}

export default Logo
