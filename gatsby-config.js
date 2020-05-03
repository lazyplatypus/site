var csso = require('postcss-csso');
var autoprefixer = require('autoprefixer');
var cssvariables = require('postcss-css-variables');

module.exports = {
  siteMetadata: {
    title: 'Daniel Kim',
    author: 'Daniel Kim',
    siteUrl: `https://lazyplatypus.dev`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles`,
      },
    },
    `gatsby-transformer-javascript-frontmatter`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-44440473-5`,
      },
    },
    'gatsby-plugin-remove-serviceworker',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `black`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [autoprefixer(), cssvariables(), csso()],
        precision: 5, // SASS default: 5
      },
    },
  ],
};
