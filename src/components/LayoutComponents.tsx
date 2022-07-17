import React, {
  ComponentPropsWithRef,
  forwardRef,
  PropsWithChildren,
  useEffect,
  useState
} from "react";
import { Flex, Grid, Heading, SlideFade } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

type ContainerProps = {
  [property: string]: unknown; // extra Chakra UI properties
};

export const AnimatedContainer = ({
  children,
  ...otherProps
}: PropsWithChildren<ContainerProps>) => {
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
      <Flex ref={ref} {...otherProps}>
        {children}
      </Flex>
    </SlideFade>
  );
};

export const HomeContainer = ({
  children,
  ...otherProps
}: PropsWithChildren<ContainerProps>) => {
  return (
    <Flex
      flexDirection="column"
      margin="0 auto 8rem"
      minH="80vh"
      maxH="100%"
      minW="70vw"
      maxW={{ base: "95vw", md: "75vw" }}
      padding={{ base: 5, md: 10 }}
      {...otherProps}
    >
      {children}
    </Flex>
  );
};

type BlogContainerProps = ComponentPropsWithRef<"div"> & {
  [property: string]: unknown;
};

export const BlogContainer = forwardRef<
  HTMLInputElement,
  PropsWithChildren<BlogContainerProps>
>(({ children, ...otherProps }, ref) => {
  return (
    <Grid
      ref={ref}
      templateColumns={{ base: "1fr", lg: "2fr 1fr" }}
      gap={{ base: 0, lg: 20 }}
      marginX="auto"
      marginTop={{ base: "2rem", lg: "8rem" }}
      minH="100vh"
      maxW={{ base: "95vw", lg: "65vw" }}
      paddingX={{ base: 2, lg: 10 }}
      {...otherProps}
    >
      {children}
    </Grid>
  );
});

BlogContainer.displayName = "BlogContainer";

export const SectionHeading = ({
  children,
  ...otherProps
}: PropsWithChildren<ContainerProps>) => (
  <Heading
    size="3xl"
    textAlign="center"
    marginBottom={10}
    display="inline-block"
    lineHeight="1.1em"
    {...otherProps}
  >
    {children}
  </Heading>
);
