module.exports = { //eslint-disable-line
  siteMetadata: {
    title: "Gokul Viswanath",
    description: "Gokul Viswanath develops web applications and games. He is currently pursuing his Computer Engineering degree.",
    author: "@1GokulV",
    image: "src/images/gv.png",
    siteUrl: "https://gokulv.netlify.app",
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
