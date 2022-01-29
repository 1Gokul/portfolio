import React from "react";
import { Flex } from "@chakra-ui/react";
import { CloudinaryContext } from "cloudinary-react";
import "@fontsource/inconsolata";
import "focus-visible/dist/focus-visible";

import Header from "./Header/BaseHeader";
import Footer from "./Footer";
import "../css/global.css";

const Layout = (props) => {
  let internalLinks = [],
    externalLinks = [];

  if (props.type === "home") {
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
        name: "say hi"
      }
    ];
    externalLinks = [
      {
        name: "DevLogs",
        to: "/blogs"
      }
    ];
  } else if (props.type === "blog") {
    externalLinks = [
      {
        name: "Home",
        to: "/"
      },
      {
        name: "DevLogs",
        to: "/blogs"
      }
    ];
  }

  return (
    <Flex height="100%" direction="column">
      <Header
        type={props.type}
        internalLinks={internalLinks}
        externalLinks={externalLinks}
      />

      <CloudinaryContext cloudName="gokulv" secure="true">
        {props.children}
      </CloudinaryContext>
      <Footer />
    </Flex>
  );
};

export default Layout;
