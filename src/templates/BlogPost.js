import React from "react"
import { graphql } from "gatsby"
import Layout, { BlogContainer, SectionHeading } from "../components/Layout/Layout"
import MDXProvider from "../components/MDXProvider"
import Seo from "../components/SEO"

require("../css/prismjs/prismjs-night-owl.css") // eslint-disable-line

export default function BlogPost({ data }) {
  const {
    body,
    frontmatter: { title },
  } = data.mdx

  return (
    <Layout type="blog">
      <Seo title={title} />
      <BlogContainer>
        <SectionHeading>{title}</SectionHeading>
        <MDXProvider>{body}</MDXProvider>
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
      }
    }
  }
`