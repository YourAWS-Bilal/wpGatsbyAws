module.exports = {
  siteMetadata: {
      title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://52.20.166.248/graphql"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};












// module.exports = {
//   plugins: [
//     {
//       resolve: `gatsby-source-wordpress`,
//       options: {
//           // Specify the URL of the WordPress source
//           url: `http://52.20.166.248/graphql`,
//           schema: {
//             timeout: 90000,
//           },
//           protocol: `http`,
//           // Indicates if a site is hosted on WordPress.com
//           hostingWPCOM: false,
//           // Specify which URL structures to fetch
//           includedRoutes: [
//             '**/posts',
//             '**/tags',
//             '**/categories'
//           ]
//       }
//     },
//     'gatsby-plugin-sharp',
//     'gatsby-transformer-sharp',
//     {
//       resolve: 'gatsby-source-filesystem',
//       options: {
//         name: 'images',
//         path: `${__dirname}/src/images`,
//       },
//     },
//   ],
// }