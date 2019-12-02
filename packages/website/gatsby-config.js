const path = require("path")

module.exports = {
  siteMetadata: {
    title: `atti-components documentation`,
    description: `The documentation of the atti-components library`,
    author: `@attineos`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "atti-components": path.resolve(
            __dirname,
            "../atti-components/dist/esm/index.js"
          ),
        },
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/../atti-components/src`,
        name: `components-pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-transformer-remark`,
          },
        ],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-react-docgen`,
  ],
}
