module.exports = {
  siteMetadata: {
    title: `Learn JAMstack`,
    description: `Learnjamstack | Learn how build apps that combine the performance and workflow benefits of static sites with the flexibility and power of server-driven sites.`,
    author: `@khaled_garbaya`,
    siteUrl: `https://learnjamstack.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.LEARN_JAMSTACK_SPACE_ID,
        accessToken: process.env.LEARN_JAMSTACK_CDA_KEY,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/learnjamstack-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/style.css'], // Purge only tailwind
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-145154358-1",
        head: false,
        anonymize: true,
        siteSpeedSampleRate: 10,
      },
    },
  ],
}
