module.exports = {
  siteMetadata: {
    title: `GatsbyCafeSite`,
    description: `おいしい珈琲`,
    lang: `ja`,
    siteUrl: `https://gatsbycafesite.netlify.app`,
    locale: `ja_JP`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyCafeSite`,
        short_name: `GatsbyCafe`,
        start_url: `/`,
        background_color: `#339999`,
        theme_color: `#477294`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      }
    }
    `gatsby-plugin-offline`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
