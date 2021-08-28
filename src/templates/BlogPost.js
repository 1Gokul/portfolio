import React, { createRef, useEffect, useState } from "react"
import { graphql } from "gatsby"
import {
  CircularProgress,
  Divider,
  Flex,
  Icon,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react"
import { IoArrowBack, IoArrowForward, IoMenu, IoClose } from "react-icons/io5"
import { motion } from "framer-motion"

import Layout from "../components/Layout/Layout"
import {
  BlogContainer,
  SectionHeading,
} from "../components/Layout/LayoutComponents"
import MDX from "../components/Layout/MDXProvider"
import Seo from "../components/Layout/SEO"

require ('../css/prismjs/prismjs-night-owl.css'); // eslint-disable-line

const MotionFlex = motion (Flex)

const BlogPost = ({ data, pageContext }) => {
  const { body, frontmatter: { title, date, embeddedImagesLocal }, headings } = data.mdx

  const { prev, next } = pageContext

  const target = createRef ()

  return (
    <Layout type="blog">
      <Seo title={title} />

      <TableOfContents headings={headings} target={target} />
      <BlogContainer ref={target}>
        <SectionHeading marginBottom={2}>{title}</SectionHeading>
        <Text marginBottom={14} textAlign="center">{date}</Text>
        <MDX localImages={embeddedImagesLocal}>{body}</MDX>

        <Divider />

        <Flex
          marginTop={10}
          justifyContent="space-between"
          fontSize="xl"
          alignItems="center"
        >
          {prev !== null &&
            <Link href={prev.fields.slug}>
              <Icon as={IoArrowBack} />
              Previous post
            </Link>}
          {next !== null &&
            <Link href={next.fields.slug}>
              Next post
              <Icon as={IoArrowForward} />
            </Link>}
        </Flex>
      </BlogContainer>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      headings {
        value
        depth
      }
    }
  }
`

const tocVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.35,
      staggerChildren: 0.1,
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.35,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
}

const headingLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
  closed: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
}

const TableOfContents = ({ headings, target }) => {
  // Depth is equal to 2 for h2 headings
  const h2Headings = headings.filter (heading => heading.depth === 2)

  h2Headings.forEach (
    heading =>
      (heading.url = heading.value
        .toLowerCase ()
        .replace ("()", "")
        .split (" ")
        .join ("-"))
  )

  const [visible, setVisible] = useState (false)

  return (
    <Flex
      position="fixed"
      right={{ base: 5, md: 10 }}
      bottom={20}
      zIndex={4}
    >
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
        <Text padding={3} color="pink.300">Contents</Text>
        {h2Headings.map (heading => (
          <MotionFlex key={heading.value} variants={headingLinkVariants}>
            <Link
              display="block"
              padding={3}
              onClick={() => setVisible (!visible)}
              href={`#${heading.url}`}
            >
              {heading.value}
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
        onClick={() => setVisible (!visible)}
        zIndex={4}
      />
      <ReadingProgress target={target} />
    </Flex>
  )
}


// Thanks to nehalist.io for the progress bar
// https://nehalist.io/creating-a-reading-progress-bar-in-react

const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = useState (0)
  const scrollListener = () => {
    if (!target.current) {
      return
    }

    const element = target.current
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0

    if (windowScrollTop === 0) {
      return setReadingProgress (0)
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress (100)
    }
    setReadingProgress (windowScrollTop / totalHeight * 100)
  }

  useEffect (() => {
    window.addEventListener ("scroll", scrollListener)
    return () => window.removeEventListener ("scroll", scrollListener)
  })

  return (
    <CircularProgress
      value={readingProgress}
      size="60px"
      color="pink.500"
      thickness="10px"
      position="fixed"
      right={{ base: "14px" , md:"34.5px" }}
      bottom="73.5px"
      zIndex={3}
    />
  )
}
