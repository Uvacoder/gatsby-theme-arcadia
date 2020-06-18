const emoji = require("remark-emoji")

module.exports = {
  siteMetadata: {
    title: "Gatsby Arcadia",
    description: "A modern and awesome starter for Gatsby.",
    author: "@danielkvist",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          `roboto\:400,600,700`,
          `roboto mono\:400,600,700`,
          `roboto slab\:400,600,700`,
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-arcadia-starter",
        short_name: "starter",
        start_url: "/",
        background_color: "#c7166f",
        theme_color: "#c7166f",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-remark-images",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1035,
              sizeByPixelDesinity: true,
              remarkPlugins: [emoji],
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "sections",
        path: `${__dirname}/content/sections/`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    //     head: false,
    //     anonymize: true,
    //     respectDNT: true,
    //     defer: true,
    //     sampleRate: 5,
    //     siteSpeedSampleRate: 10,
    //   },
    // },
  ],
}
