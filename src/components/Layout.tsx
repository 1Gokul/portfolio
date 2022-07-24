import React, { PropsWithChildren } from "react";
import { Flex } from "@chakra-ui/react";
import { CloudinaryContext } from "cloudinary-react";
import "@fontsource/space-mono"
import "focus-visible/dist/focus-visible";

import Header from "./header/BaseHeader";
import Footer from "./Footer";
import "../css/global.css";
import { HeaderLink } from "../types/Header";
import {
  blogExternalLinks,
  homeExternalLinks,
  homeInternalLinks
} from "../constants/Layout";

const Layout = ({ children, type }: PropsWithChildren<{ type: string }>) => {
  let internalLinks: HeaderLink[] = [],
    externalLinks: HeaderLink[] = [];

  if (type === "home") {
    internalLinks = homeInternalLinks;
    externalLinks = homeExternalLinks;
  } else if (type === "blog") {
    externalLinks = blogExternalLinks;
  }

  return (
    <Flex height="100%" direction="column">
      <Header internalLinks={internalLinks} externalLinks={externalLinks} />

      <CloudinaryContext cloudName="gokulv" secure={true}>
        {children}
      </CloudinaryContext>
      <Footer />
    </Flex>
  );
};

export default Layout;
