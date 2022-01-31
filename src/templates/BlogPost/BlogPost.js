import React, { createRef } from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { Box, Divider, Flex, Icon, Link } from "@chakra-ui/react";
import { IoArrowBack, IoArrowForward, IoPerson } from "react-icons/io5";
import { HiClock, HiCalendar } from "react-icons/hi";

import Layout from "../../components/Layout";
import {
  BlogContainer,
  SectionHeading
} from "../../components/LayoutComponents";
import MDX from "../../components/MDXProvider";
import Seo from "../../components/SEO";
import TableOfContents from "./TableOfContents";
import ReadingProgress from "./ReadingProgress";

require("../../css/prismjs/prismjs-night-owl.css"); // eslint-disable-line

const BlogPost = ({ data, pageContext }) => {
  const {
    body,
    timeToRead,
    frontmatter: { title, date, embeddedImagesLocal },
    headings
  } = data.mdx;

  const { prev, next } = pageContext;

  const target = createRef();

  return (
    <Layout type="blog">
      <Seo title={title} />
      <Box>
        <BlogContainer ref={target}>
          <Flex direction="column" maxW={{ base: "90vw", lg: "40vw" }}>
            <SectionHeading marginBottom={2}>{title}</SectionHeading>
            <Box marginBottom={14} alignSelf="center">
              <Flex marginY={5} alignItems="center">
                <Icon as={IoPerson} marginRight={2} />
                Gokul Viswanath
              </Flex>
              <Flex marginY={5} alignItems="center">
                <Icon as={HiCalendar} marginRight={2} />
                {date}
              </Flex>
              <Flex marginY={5} alignItems="center">
                <Icon as={HiClock} marginRight={2} />
                {timeToRead} minute read
              </Flex>
            </Box>

            <ReadingProgress target={target} />

            {/* The blog's body */}
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
                <Link as={GatsbyLink} to={prev.fields.slug}>
                  <Icon as={IoArrowBack} />
                  Previous post
                </Link>
              )}
              {next !== null && (
                <Link as={GatsbyLink} to={next.fields.slug}>
                  Next post
                  <Icon alignSelf="center" as={IoArrowForward} />
                </Link>
              )}
            </Flex>

            <Divider />
          </Flex>

          {/* Table of Contents */}
          <aside>
            <TableOfContents headings={headings} target={target} />
          </aside>
        </BlogContainer>
      </Box>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
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
