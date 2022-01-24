import { Box, Grid, Link, Text } from "@chakra-ui/react";
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
    <Box as="button" onClick={sendToTop} marginLeft="auto">
      {buttonText}&#8593;
    </Box>
  );
};

const Footer = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr .5fr", md: "1fr 1fr 1fr" }}
      width="100%"
      justifyItems="center"
      marginTop={10}
      marginBottom={3}
      paddingX={5}
    >
      <Box gridColumnStart={{ base: 1, md: 2 }} color="gray.400">
        <Link href="https://github.com/1Gokul/portfolio">
          <Text align="center">
            By Gokul Viswanath
            <br />
            Built with Gatsby
          </Text>
        </Link>
      </Box>

      <BackToTop />
    </Grid>
  );
};

export default Footer;
