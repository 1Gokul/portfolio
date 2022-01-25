import { Flex, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { animateScroll } from "react-scroll";

const BackToTop = () => {
  const [buttonText, setButtonText] = useState("Back to the top");

  const sendToTop = () => {
    setButtonText("Up you go!");
    animateScroll.scrollToTop({ duration: "750", smooth: true, delay: "250" });
    setTimeout(() => setButtonText("Back to the top"), 500);
  };

  return (
    <Flex as="button" onClick={sendToTop}>
      {buttonText}&#8593;
    </Flex>
  );
};

const Footer = () => {
  return (
    <Flex
      marginY={{ base: "2rem ", md: "1rem" }}
      paddingX={{ base: 8, md: 5 }}
      justifyContent={{ base: "space-between", md: "space-evenly" }}
    >
      <Flex>
        <Link href="https://github.com/1Gokul/portfolio">
          <Text align="center">
            By Gokul Viswanath
            <br />
            Built with Gatsby
          </Text>
        </Link>
      </Flex>
      <BackToTop />
    </Flex>
  );
};

export default Footer;
