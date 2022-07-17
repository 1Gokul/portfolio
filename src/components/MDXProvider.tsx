// Many thanks to Ryosuke- https://whoisryosuke.com/ for the component
// https://github.com/whoisryosuke/next-mdx-chakra-docs/blob/master/components/MDXProvider.jsx

import React, { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Code,
  Flex,
  Heading,
  Icon,
  Image,
  Kbd,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Text,
  Divider
} from "@chakra-ui/react";

type ComponentProps = {
  children: ReactNode;
  [property: string]: unknown; // extra Chakra UI properties
};

const mdComponents = {
  h1: (props: ComponentProps) => (
    <Heading as="h1" size="2xl" mt={12} {...props} />
  ),
  h2: (props: ComponentProps) => (
    <Heading as="h2" size="xl" mt={12} {...props} />
  ),
  h3: (props: ComponentProps) => (
    <Heading as="h3" size="lg" mt={12} {...props} />
  ),
  h4: (props: ComponentProps) => (
    <Heading as="h4" size="md" mt={12} {...props} />
  ),
  h5: (props: ComponentProps) => (
    <Heading as="h5" size="sm" mt={12} {...props} />
  ),
  h6: (props: ComponentProps) => (
    <Heading as="h6" size="xs" mt={12} {...props} />
  ),
  p: (props: ComponentProps) => (
    <Text as="p" marginY={5} fontSize="xl" {...props} />
  ),
  a: (props: ComponentProps) => (
    <Link
      as="a"
      color="var(--theme-aqua)"
      textUnderlineOffset="0.25rem"
      textDecoration="underline"
      textDecorationStyle="dotted"
      _hover={{
        color: "var(--theme-pink)",
        textDecorationStyle: "wavy"
      }}
      {...props}
    />
  ),
  pre: (props: ComponentProps) => <Box as="pre" {...props} p={2} my={8} />,
  code: (props: ComponentProps) => <Code {...props} bgColor="transparent" />,
  ul: (props: ComponentProps) => (
    <List
      px={3}
      styleType="square"
      alignSelf="center"
      fontSize="xl"
      {...props}
    />
  ),
  ol: (props: ComponentProps) => (
    <List
      as="ol"
      styleType="decimal"
      alignSelf="center"
      fontSize="xl"
      {...props}
    />
  ),
  li: (props: ComponentProps) => <ListItem {...props} />,
  hr: (props: ComponentProps) => <Divider my={8} {...props} />,
  note: (props: ComponentProps) => (
    <Alert status="info" variant="left-accent" {...props}>
      <AlertIcon />
      {props.children}
    </Alert>
  ),
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Code,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Kbd,
  Link,
  List,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup
};

const MDX = ({
  children,
  localImages
}: {
  children: string;
  [property: string]: unknown;
}) => {
  return (
    <MDXProvider components={mdComponents}>
      <MDXRenderer localImages={localImages}>{children}</MDXRenderer>
    </MDXProvider>
  );
};

export default MDX;
