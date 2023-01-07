const config = require('@hyundai-it/tailwindcss')
const _ = require('lodash')

// https://tailwindcss.com/docs/configuration
module.exports = _.merge({
  content: ['./index.php', './app/**/*.php', './resources/**/*.{php,vue,js,ts}'],
}, config)
