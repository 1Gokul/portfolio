import React, { useState } from "react"
import { graphql } from "gatsby"
import { LinkBox, LinkOverlay, Heading, Text, Flex } from "@chakra-ui/layout"
import { Link as GatsbyLink } from "gatsby"

import Layout from "../components/Layout/Layout"
import { BlogContainer, SectionHeading } from "../components/Layout/LayoutComponents"
import Seo from "../components/Layout/SEO"
import { Input } from "@chakra-ui/react"

const Blogs = ({ data }) => {
  const { edges: posts } = data.allMdx
  const [filter, setFilter] = useState ("")

  const blogsToShow = posts.filter (({ node: post }) =>
    post.frontmatter.title.toLowerCase ().includes (filter)
  )

  return (
    <Layout type="blog">
      <Seo title="Blogs" />
      <BlogContainer>
        <SectionHeading>DevLogs</SectionHeading>

        <Input
          marginBottom={5}
          _placeholder={{ color: "white" }}
          value={filter}
          placeholder="Search for a blog..."
          onChange={({ target }) => setFilter (target.value)}
          size="lg"
          variant="filled"
          borderRadius="xl"
        />

        <Flex flexDirection="column" justifyContent="space-evenly">
          {blogsToShow.map (({ node: post }) => (
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
              <Text color="gray.300" fontSize="sm">
                {post.frontmatter.date}
              </Text>
              <Text color="gray.300" fontStyle="italic" marginTop={2}>
                {post.excerpt}
              </Text>
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
