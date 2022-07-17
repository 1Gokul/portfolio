import React from "react";
import { Code, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";

import Layout from "../components/Layout";
import { HomeContainer } from "../components/LayoutComponents";
import Seo from "../components/SEO";
import bgImg from "../images/404.jpg";

const NotFoundPage = () => {
  return (
    <Layout type="blog">
      <Seo title="Not Found!" />
      <HomeContainer
        backgroundImage={bgImg}
        backgroundPosition={{ base: "center", md: "left top" }}
        backgroundSize={{ base: "cover", md: "100% 100%" }}
        backgroundRepeat="no-repeat"
        overflow="hidden"
      >
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          flexGrow={1}
        >
          <Flex flexDirection="column" alignItems="center">
            <Heading marginRight={{ base: 0, md: 3 }} fontSize="200">
              404
            </Heading>
            <Code fontSize="2xl">Not Found</Code>
          </Flex>
          <Flex flexDirection="column" marginBottom={5}>
            <Text fontSize="4xl">
              This is not the page you are looking for.{" "}
              <Link textDecoration="underline" as={GatsbyLink} to="/">
                Move along.
              </Link>
            </Text>
            <Text>Image credit: Lucasfilm Ltd, Walt Disney Studios</Text>
          </Flex>
        </Flex>
      </HomeContainer>
    </Layout>
  );
};

export default NotFoundPage;
