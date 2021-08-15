/* eslint-disable */
module.exports = { 
  siteMetadata: {
    title: `Gokul Viswanath`,
    description: `Gokul Viswanath develops web applications and games. He is currently pursuing his Computer Engineering degree.`,
    author: `@1GokulV`,
    image: `images/gv.png`,
    siteUrl: `https://gokulv.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gokul Viswanath`,
        short_name: `GV`,
        start_url: `/`,
        background_color: `#001b2b`,
        theme_color: `#004066`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blogs`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: "blog-permalink",
              isIconAfterHeader: true,              
              elements: [`h2`],
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              wrapperStyle: `margin: 20px auto; border: 5px solid #F687B3;`
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`
          },
        ],
      },
    },
  ],
}
