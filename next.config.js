const withSass = require('@zeit/next-sass')
module.exports = withSass({
  exportPathMap: function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/socials': { page: '/socials' },
    }
  }
})
