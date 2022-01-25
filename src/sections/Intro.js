import React from "react";
import { Heading, SlideFade } from "@chakra-ui/react";

import { HomeContainer } from "../components/LayoutComponents";

const Intro = () => {
  return (
    <HomeContainer>
      <SlideFade
        in={true}
        offsetY="30"
        transition={{ enter: { duration: 0.3, delay: 0.5 } }}
      >
        <Heading size="lg" marginY={5}>
          Hey there! My name is
        </Heading>
        <Heading
          marginY={8}
          fontSize={{ base: "6xl", md: "9xl" }}
          letterSpacing="-2px"
          bgGradient="linear(to-r, #00d4ff, #00ff73)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Gokul Viswanath.
        </Heading>
        <Heading size="xl">
          I develop web applications from end-to-end!
          <br />I also make games on the side.
        </Heading>
      </SlideFade>
    </HomeContainer>
  );
};

export default Intro;
