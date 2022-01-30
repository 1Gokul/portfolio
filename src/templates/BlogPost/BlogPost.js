import React, { createRef } from "react";
import { graphql, Link } from "gatsby";
import { Divider, Flex, Icon, Text } from "@chakra-ui/react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import Layout from "../../components/Layout";
import {
  BlogContainer,
  SectionHeading
} from "../../components/LayoutComponents";
import MDX from "../../components/MDXProvider";
import Seo from "../../components/SEO";
import TableOfContents from "./TableOfContents";

require("../../css/prismjs/prismjs-night-owl.css"); // eslint-disable-line

const BlogPost = ({ data, pageContext }) => {
  const {
    body,
    frontmatter: { title, date, embeddedImagesLocal },
    headings
  } = data.mdx;

  const { prev, next } = pageContext;

  const target = createRef();

  return (
    <Layout type="blog">
      <Seo title={title} />

      <BlogContainer ref={target}>
        <Flex direction="column" maxW={{ base: "90vw", lg: "40vw" }}>
          <SectionHeading marginBottom={2}>{title}</SectionHeading>
          <Text marginBottom={14} textAlign="center">
            {date}
          </Text>
          <MDX localImages={embeddedImagesLocal}>{body}</MDX>

          {/* Links to the previous and next blogs */}

          <Divider />

          <Flex
            marginY={10}
            justifyContent="space-between"
            fontSize="xl"
            alignItems="center"
          >
            {prev !== null && (
              <Link to={prev.fields.slug}>
                <Icon as={IoArrowBack} />
                Previous post
              </Link>
            )}
            {next !== null && (
              <Link to={next.fields.slug}>
                Next post
                <Icon as={IoArrowForward} />
              </Link>
            )}
          </Flex>

          <Divider />
        </Flex>
        <aside>
          <TableOfContents headings={headings} target={target} />
        </aside>
      </BlogContainer>
    </Layout>
  );
};

export default BlogPost;

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
`;
