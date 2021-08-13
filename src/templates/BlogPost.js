import React from "react"
import { graphql } from "gatsby"
import Layout, { BlogContainer } from "../components/Layout/Layout"
import { Box, Heading } from "@chakra-ui/react"

require("prismjs/themes/prism-tomorrow.css") // eslint-disable-line
require("prismjs/plugins/line-numbers/prism-line-numbers.css") // eslint-disable-line

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout type="blog">
      <BlogContainer>
        <Box>
          <Heading>{post.frontmatter.title}</Heading>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Box>
      </BlogContainer>
    </Layout>

  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`