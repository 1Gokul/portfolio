import React from "react";
import { Box, Button, Flex, Heading, Link, SlideFade } from "@chakra-ui/react";

import { AnimatedBox, HomeContainer } from "./Layout/LayoutComponents";

const Intro = () => {
  return (
    <HomeContainer>
      <SlideFade
        in={true}
        transition={{ enter: { duration: 0.3, delay: 0.5 } }}
      >
        <Heading size="lg" marginY={5}>
          Hey there! My name&apos;s
        </Heading>
        <Heading
          marginBottom={5}
          fontSize={{ base: "6xl", md: "9xl" }}
          letterSpacing="-2px"
          bgGradient="linear(to-r, #00d4ff, #00ff73)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Gokul Viswanath.
        </Heading>
        <Heading size="xl">
          I create web applications from end-to-end!
          <br />I also make games on the side.
        </Heading>
      </SlideFade>
    </HomeContainer>
  );
};

export default Intro;
