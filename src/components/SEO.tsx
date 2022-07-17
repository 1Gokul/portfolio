/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({
  description = "",
  lang = "en",
  meta = [],
  title
}: {
  description?: string;
  lang?: string;
  meta?: (
    | { property: string; content: string; name?: undefined }
    | { name: string; content: any; property?: undefined }
  )[];
  title: string;
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
            image
          }
        }
      }
    `
  );

  const image = `${site.siteMetadata.siteUrl}/${site.siteMetadata.image}`;
  const metaDescription = description ?? site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const googleVerification = "EhcoPvDY3g--UJ64MoFAjgOTxnLmzIOpVuvvxbHxEgk";

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: "description",
          content: metaDescription
        },
        {
          property: "og:title",
          content: title
        },
        {
          property: "og:description",
          content: metaDescription
        },
        {
          property: "og:image",
          content: image
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          name: "google-site-verification",
          content: googleVerification
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          property: "twitter:image",
          content: image
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata?.author ?? ""
        },
        {
          name: "twitter:title",
          content: title
        },
        {
          name: "twitter:description",
          content: metaDescription
        }
      ].concat(meta)}
    />
  );
};

export default Seo;
