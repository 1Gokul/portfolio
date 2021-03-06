import { Box, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import {
  headingLinkVariants,
  tocVariants
} from "../constants/TableOfConstants";

import { BlogPostHeading } from "../types/BlogPost";

const TableOfContents = ({ headings }: { headings: BlogPostHeading[] }) => {
  // Depth is equal to 2 for h2 headings
  const h2Headings = headings.filter((heading) => heading.depth === 2);

  // Convert the text inside into urls that lead to the headings
  h2Headings.forEach(
    (heading) =>
      (heading.url = heading.value
        .toLowerCase()
        .replace("()", "")
        .split(" ")
        .join("-"))
  );

  return (
    <>
      <DesktopTOC headings={h2Headings} />
      <MobileTOC headings={h2Headings} />
    </>
  );
};

export default TableOfContents;

const DesktopTOC = ({ headings }: { headings: BlogPostHeading[] }) => (
  <Box
    position="sticky"
    top="15rem"
    width="20rem"
    padding={3}
    border="2px solid"
    display={{ base: "none", lg: "block" }}
  >
    <Heading size="lg" borderBottom="2px dotted" padding={3} color="pink.300">
      Contents
    </Heading>
    {headings.map((heading) => (
      <Box
        key={heading.value}
        _hover={{
          color: "var(--theme-aqua)",
          borderBottom: "2px dotted"
        }}
      >
        <Link to={`#${heading.url}`}>
          <Text padding={3}>{heading.value}</Text>
        </Link>
      </Box>
    ))}
  </Box>
);

const MotionFlex = motion(Flex);

const MobileTOC = ({ headings }: { headings: BlogPostHeading[] }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Box
      display={{ base: "flex", md: "none" }}
      position="fixed"
      right={{ base: 5, md: 10 }}
      bottom={20}
      zIndex="2"
    >
      <MotionFlex
        flexDirection="column"
        paddingX={1}
        border="2px solid"
        bgColor="var(--theme-mobile-nav-bg)"
        overflow="hidden"
        initial="closed"
        padding={2}
        animate={visible ? "open" : "closed"}
        variants={tocVariants}
      >
        <Text
          padding={3}
          color="pink.300"
          fontWeight="bold"
          fontSize="xl"
          borderBottom="2px dotted"
        >
          Contents
        </Text>
        {headings.map((heading) => (
          <MotionFlex
            key={heading.value}
            padding={3}
            variants={headingLinkVariants}
          >
            <Link onClick={() => setVisible(!visible)} to={`#${heading.url}`}>
              {heading.value}
            </Link>
          </MotionFlex>
        ))}
      </MotionFlex>
      <IconButton
        aria-label="Click to toggle the table of contents."
        bg="var(--theme-aqua)"
        alignSelf="flex-end"
        size="lg"
        borderRadius="full"
        fontSize="2xl"
        icon={visible ? <IoClose /> : <IoMenu />}
        onClick={() => setVisible(!visible)}
        zIndex="2"
      />
    </Box>
  );
};
