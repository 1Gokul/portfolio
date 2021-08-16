import React from "react"
import { graphql } from "gatsby"

import Layout, {
  BlogContainer,
  SectionHeading,
} from "../components/Layout/Layout"
import { LinkBox, LinkOverlay, Heading, Text, Flex } from "@chakra-ui/layout"
import { Link as GatsbyLink } from "gatsby"
import Seo from "../components/SEO"

const Blogs = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout type="blog">

      <Seo title="Blogs" />
      <BlogContainer>
        <SectionHeading>DevLogs</SectionHeading>

        <Flex flexDirection="column" justifyContent="space-evenly">
          {posts.map (({ node: post }) => (
            <LinkBox
              key={post.id}
              marginY={5}
              transition="0.2s linear"
              _hover={{
                color: "aqua.200",
              }}
            >
              <LinkOverlay as={GatsbyLink} href={post.fields.slug}>
                <Heading>{post.frontmatter.title}</Heading>
              </LinkOverlay>
              <Text color="gray.300" fontSize="sm">{post.frontmatter.date}</Text>
              <Text color="gray.300" fontStyle="italic" marginTop={2}>{post.excerpt}</Text>
            </LinkBox>
          ))}
        </Flex>

      </BlogContainer>
    </Layout>
  )
}

export default Blogs

export const pageQuery = graphql`
{
  allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
    edges {
      node {
        id
        excerpt
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
}
`
