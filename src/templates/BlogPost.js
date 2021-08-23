import React, { useState } from "react"
import { graphql } from "gatsby"
import {
  Box,
  Divider,
  Flex,
  Icon,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react"
import { IoArrowBack, IoArrowForward, IoMenu, IoClose } from "react-icons/io5"

import Layout from "../components/Layout/Layout"
import { BlogContainer,SectionHeading } from "../components/Layout/LayoutComponents"
import MDXProvider from "../components/Layout/MDXProvider"
import Seo from "../components/Layout/SEO"

require ('../css/prismjs/prismjs-night-owl.css'); // eslint-disable-line

const BlogPost = ({ data, pageContext }) => {
  const { body, frontmatter: { title, date }, headings } = data.mdx

  const { prev, next } = pageContext

  return (
    <Layout type="blog">
      <Seo title={title} />

      <TableOfContents headings={headings} />
      <BlogContainer>
        <SectionHeading marginBottom={2}>{title}</SectionHeading>
        <Text marginBottom={14} textAlign="center">{date}</Text>
        <MDXProvider>{body}</MDXProvider>

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
      }
      headings {
        value
        depth
      }
    }
  }
`

const TableOfContents = ({ headings }) => {
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
      marginRight={3}
      zIndex={4}
    >
      <Box
        display={visible ? "inline" : "none"}
        padding={3}
        maxWidth="75vw"
        bgColor="aqua.1000"
      >
        <Text padding={3} color="pink.300">Contents</Text>
        {h2Headings.map (heading => (
          <Link
            key={heading.value}
            display="block"
            padding={3}
            onClick={() => setVisible (!visible)}
            href={`#${heading.url}`}
          >
            {heading.value}
          </Link>
        ))}
      </Box>
      <IconButton
        aria-label="Click to toggle the table of contents."
        alignSelf="flex-end"
        size="lg"
        borderRadius="full"
        fontSize="2xl"
        icon={visible ? <IoClose /> : <IoMenu />}
        onClick={() => setVisible (!visible)}
      />
    </Flex>
  )
}
