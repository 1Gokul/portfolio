module.exports = { //eslint-disable-line
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "portfolio",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "@chakra-ui/gatsby-plugin",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gokul Viswanath",
        short_name: "GV",
        start_url: "/",
        background_color: "#001b2b",
        theme_color: "#004066",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
  ],
}
