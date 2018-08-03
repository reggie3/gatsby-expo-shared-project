const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        root: path.join(__dirname, '/../common'),
      },
    },
  ],
}


/*
resolve: {
  modules: [
    path.resolve(__dirname + '/src'),
    path.resolve(__dirname + '/node_modules')
  ]
}.....
*/