import React, { createRef } from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { Box, Divider, Flex, Icon, Link } from "@chakra-ui/react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
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

require("../../css/prismjs/prismjs-holi.css"); // eslint-disable-line

const BlogPost = ({ data, pageContext }) => {
  const {
    body,
    timeToRead,
    frontmatter: { title, date },
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

            <Flex
              marginBottom={5}
              justifyContent="space-evenly"
              color="gray.300"
            >
              <Flex marginY={5} alignItems="center">
                <Icon as={HiCalendar} marginRight={2} />
                {date}
              </Flex>
              <Flex marginY={5} alignItems="center">
                <Icon as={HiClock} marginRight={2} />
                {timeToRead} minute read
              </Flex>
            </Flex>

            <ReadingProgress target={target} />

            {/* The blog's body */}
            <MDX>{body}</MDX>

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
                  <Flex alignItems="center">
                    <Icon as={IoArrowBack} />
                    Previous post
                  </Flex>
                </Link>
              )}
              {next !== null && (
                <Link as={GatsbyLink} to={next.fields.slug}>
                  <Flex alignItems="center">
                    Next post
                    <Icon alignSelf="center" as={IoArrowForward} />
                  </Flex>
                </Link>
              )}
            </Flex>

            <Divider />
          </Flex>

          {/* Table of Contents */}
          <aside>
            <TableOfContents headings={headings} />
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
      }
      headings {
        value
        depth
      }
    }
  }
`;
