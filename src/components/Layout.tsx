import React from "react";
import { Flex } from "@chakra-ui/react";
import { CloudinaryContext } from "cloudinary-react";
import "@fontsource/inconsolata";
import "focus-visible/dist/focus-visible";

import Header from "./Header/BaseHeader";
import Footer from "./Footer";
import "../css/global.css";

const Layout = ({ children, type }) => {
  let internalLinks = [],
    externalLinks = [];

  if (type === "home") {
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
  } else if (type === "blog") {
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
        type={type}
        internalLinks={internalLinks}
        externalLinks={externalLinks}
      />

      <CloudinaryContext cloudName="gokulv" secure="true">
        {children}
      </CloudinaryContext>
      <Footer />
    </Flex>
  );
};

export default Layout;
