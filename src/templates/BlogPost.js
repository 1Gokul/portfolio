import React from "react"
import { graphql } from "gatsby"
import { Divider, Flex, Icon, Link, Text } from "@chakra-ui/react"

import Layout, { BlogContainer, SectionHeading } from "../components/Layout/Layout"
import MDXProvider from "../components/MDXProvider"
import Seo from "../components/SEO"
import { IoArrowBack, IoArrowForward } from "react-icons/io5"

require("../css/prismjs/prismjs-night-owl.css") // eslint-disable-line

export default function BlogPost({ data, pageContext }) {

  const {
    body,
    frontmatter: { title, date },
  } = data.mdx

  const { prev, next } = pageContext

  console.log(prev)
  console.log(next)

  return (
    <Layout type="blog">
      <Seo title={title} />
      <BlogContainer>
        <SectionHeading marginBottom={2}>{title}</SectionHeading>
        <Text marginBottom={14} textAlign="center">{date}</Text>
        <MDXProvider>{body}</MDXProvider>
        <Divider />
        <Flex marginTop={10} justifyContent="space-between" fontSize="xl" alignItems="center">
          {prev !== null && <Link href={prev.fields.slug}><Icon as={IoArrowBack} /> Previous post</Link>}
          {next !== null && <Link href={next.fields.slug}>Next post <Icon as={IoArrowForward} /></Link>}
        </Flex>
      </BlogContainer>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }

    }
  }
`