module.exports = {
  siteMetadata: {
    title: `INFOCAMP Berkeley 2019`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-112527309-1",
        // Setting this parameter is optional
        anonymize: true,
      },
    },
  ],
}
