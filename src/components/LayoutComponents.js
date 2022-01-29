import React, { forwardRef, useEffect, useState } from "react";
import { Flex, Heading, SlideFade } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

export const AnimatedContainer = (props) => {
  const [ref, inView] = useInView();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <SlideFade
      in={visible}
      offsetY="100px"
      transition={{ enter: { duration: 0.5 } }}
    >
      <Flex ref={ref} {...props}>
        {props.children}
      </Flex>
    </SlideFade>
  );
};

export const HomeContainer = ({ children, ...props }) => {
  return (
    <Flex
      flexDirection="column"
      margin="0 auto 8rem"
      minH="80vh"
      maxH="100%"
      minW="70vw"
      maxW={{ base: "95vw", md: "75vw" }}
      padding={{ base: 5, md: 10 }}
      {...props}
    >
      {children}
    </Flex>
  );
};

export const BlogContainer = forwardRef((props, ref) => {
  return (
    <Flex
      ref={ref}
      flexDirection="column"
      marginX="auto"
      marginTop={{ base: "2rem", md: "8rem" }}
      minH="100vh"
      minW="20vw"
      maxW={{ base: "95vw", md: "3xl" }}
      paddingX={{ base: 5, md: 10 }}
      {...props}
    >
      {props.children}
    </Flex>
  );
});

BlogContainer.displayName = "BlogContainer";

export const SectionHeading = (props) => (
  <Heading
    size="3xl"
    textAlign="center"
    marginBottom={10}
    display="inline-block"
    lineHeight="1.1em"
    {...props}
  >
    {props.children}
  </Heading>
);
