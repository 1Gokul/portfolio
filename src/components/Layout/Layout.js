import React from "react"
import { Flex } from "@chakra-ui/react"
import { CloudinaryContext } from "cloudinary-react"
import { Helmet } from "react-helmet"

import Header from "./Header/Header"
import Footer from "./Footer"
import "../../css/global.css"
import GeneralSansFont from "../../fonts/GeneralSans-Variable.woff2"


const Layout = props => {

  let internalLinks = [], externalLinks = []

  if (props.type === "home"){
    internalLinks = [
      {
        name: "about"
      },
      {
        name: "projects"
      },
      {
        name: "toolbox"
      },
      {
        name: "say hi",
        offset: 0
      }
    ]
    externalLinks=[
      {
        name: "DevLogs",
        to: "/blogs"
      }
    ]
  }
  else if (props.type === "blog"){
    externalLinks = [
      {
        name: "Home",
        to: "/"
      },
      {
        name: "DevLogs",
        to: "/blogs"
      }
    ]
  }

  return (
    <>
      <Flex direction="column" m="0 auto">

        <Helmet>
          <link
            rel="preload"
            href={GeneralSansFont}
            as="font"
            crossOrigin="anonymous"
            type="font/woff2"
          />
        </Helmet>

        <CloudinaryContext cloudName="gokulv" secure="true">
          <Header type={props.type} internalLinks={internalLinks} externalLinks={externalLinks}/>

          {props.children}

          <Footer />
        </CloudinaryContext>
      </Flex>
    </>
  )
}

export default Layout
