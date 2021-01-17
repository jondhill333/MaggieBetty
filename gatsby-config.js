module.exports = {
  siteMetadata: {
    title: "maggieBetty",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      // this is the name of the plugin you are adding
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "nkgioo5z",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
