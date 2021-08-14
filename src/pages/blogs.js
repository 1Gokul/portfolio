import React from "react"
import { graphql } from "gatsby"
import Layout, {
  BlogContainer,
  SectionHeading,
} from "../components/Layout/Layout"
import {
  LinkBox,
  LinkOverlay,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/layout"
import { Link as GatsbyLink } from "gatsby"
import Seo from "../components/SEO"

const Blogs = ({ data }) => {
  const  posts  = data.allMdx.nodes

  console.log(posts)

  return (
    <Layout type="blog">

      <Seo title="Blogs" />
      <BlogContainer>
        <SectionHeading>My Blogs</SectionHeading>

        <Flex flexDirection="column" justifyContent="space-evenly">
          {posts.map (post => (
            <LinkBox
              key={post.frontmatter.title}
              marginY={5}
              transition="0.2s linear"
              _hover={{
                color: "aqua.300",
              }}
            >
              <LinkOverlay as={GatsbyLink} href={post.slug}>
                <Heading>{post.frontmatter.title}</Heading>
              </LinkOverlay>
              <Text fontSize="sm">{post.frontmatter.date}</Text>
              <Text fontStyle="italic" marginTop={2}>{post.excerpt}</Text>
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
    nodes {
      id
      slug
      excerpt
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
      }
    }
  }
}
`
