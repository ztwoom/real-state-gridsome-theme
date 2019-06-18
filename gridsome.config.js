// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Construsueños',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'properties/*.md',
        typeName: 'Property',
        route: '/apartamento/:slug',
        resolveAbsolutePaths: true
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
    }
  ]
}
