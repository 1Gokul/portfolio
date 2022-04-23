import React, { useState } from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import { LinkBox, LinkOverlay, Heading, Text, Flex } from "@chakra-ui/layout";

import Layout from "../components/Layout";
import { HomeContainer, SectionHeading } from "../components/LayoutComponents";
import Seo from "../components/SEO";
import { Input } from "@chakra-ui/react";

const Blogs = ({ data }) => {
  const { edges: posts } = data.allMdx;
  const [filter, setFilter] = useState("");

  const blogsToShow = posts.filter(({ node: post }) =>
    post.frontmatter.title.toLowerCase().includes(filter)
  );

  return (
    <Layout type="blog">
      <Seo title="Blogs" />
      <HomeContainer minW="40vw" maxW={{ base: "90vw", lg: "45vw" }}>
        <SectionHeading marginBottom={20}>DevLogs</SectionHeading>

        <Input
          marginBottom={5}
          _placeholder={{ color: "gray.300" }}
          value={filter}
          placeholder="Search for a blog..."
          onChange={({ target }) => setFilter(target.value)}
          size="lg"
          variant="filled"
          borderRadius="xl"
        />

        <Flex flexDirection="column" justifyContent="space-evenly">
          {blogsToShow.map(({ node: post }) => (
            <LinkBox
              key={post.id}
              marginY={5}
              transition="0.2s linear"
              _hover={{
                color: "aqua.200"
              }}
            >
              <LinkOverlay as={GatsbyLink} to={post.fields.slug}>
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
      </HomeContainer>
    </Layout>
  );
};

export default Blogs;

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
`;
