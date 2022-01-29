// Many thanks to Ryosuke- https://whoisryosuke.com/ for the component
// https://github.com/whoisryosuke/next-mdx-chakra-docs/blob/master/components/MDXProvider.jsx

import React from "react";
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

const mdComponents = {
  h1: (props) => <Heading as="h1" size="2xl" mt={12} {...props} />,
  h2: (props) => <Heading as="h2" size="xl" mt={12} {...props} />,
  h3: (props) => <Heading as="h3" size="lg" mt={12} {...props} />,
  h4: (props) => <Heading as="h4" size="md" mt={12} {...props} />,
  h5: (props) => <Heading as="h5" size="sm" mt={12} {...props} />,
  h6: (props) => <Heading as="h6" size="xs" mt={12} {...props} />,
  p: (props) => <Text as="p" marginY={5} fontSize="xl" {...props} />,
  a: (props) => (
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
  pre: (props) => <Box as="pre" {...props} p={2} my={8} />,
  code: (props) => <Code {...props} bgColor="transparent" />,
  ul: (props) => (
    <List
      px={3}
      styleType="square"
      alignSelf="center"
      fontSize="xl"
      {...props}
    />
  ),
  ol: (props) => (
    <List
      as="ol"
      styleType="decimal"
      alignSelf="center"
      fontSize="xl"
      {...props}
    />
  ),
  li: (props) => <ListItem {...props} />,
  hr: (props) => <Divider my={8} {...props} />,
  note: (props) => (
    <Alert colorScheme="aqua" variant="left-accent" {...props} />
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

const MDX = (props) => {
  return (
    <MDXProvider components={mdComponents}>
      <MDXRenderer localImages={props.localImages}>
        {props.children}
      </MDXRenderer>
    </MDXProvider>
  );
};

export default MDX;
