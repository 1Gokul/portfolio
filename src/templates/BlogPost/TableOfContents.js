import { Flex, IconButton, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

import ReadingProgress from "./ReadingProgress";

const MotionFlex = motion(Flex);

const tocVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.35,
      staggerChildren: 0.1
    }
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.35,
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  }
};

const headingLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.25
    }
  },
  closed: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.25
    }
  }
};

const TableOfContents = ({ headings, target }) => {
  // Depth is equal to 2 for h2 headings
  const h2Headings = headings.filter((heading) => heading.depth === 2);

  h2Headings.forEach(
    (heading) =>
      (heading.url = heading.value
        .toLowerCase()
        .replace("()", "")
        .split(" ")
        .join("-"))
  );

  const [visible, setVisible] = useState(false);

  return (
    <Flex position="fixed" right={{ base: 5, md: 10 }} bottom={20} zIndex="1">
      <MotionFlex
        flexDirection="column"
        padding={3}
        maxWidth="75vw"
        bgColor="#001b2b"
        overflow="hidden"
        initial="closed"
        animate={visible ? "open" : "closed"}
        variants={tocVariants}
      >
        <Text padding={3} color="pink.300">
          Contents
        </Text>
        {h2Headings.map((heading) => (
          <MotionFlex key={heading.value} variants={headingLinkVariants}>
            <Link
              display="block"
              onClick={() => setVisible(!visible)}
              to={`#${heading.url}`}
            >
              <Text padding={3}>{heading.value}</Text>
            </Link>
          </MotionFlex>
        ))}
      </MotionFlex>
      <IconButton
        aria-label="Click to toggle the table of contents."
        alignSelf="flex-end"
        size="lg"
        borderRadius="full"
        fontSize="2xl"
        icon={visible ? <IoClose /> : <IoMenu />}
        onClick={() => setVisible(!visible)}
        zIndex="1"
      />
      <ReadingProgress target={target} />
    </Flex>
  );
};

export default TableOfContents;
