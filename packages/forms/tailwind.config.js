const config = require('@hyundai-it/tailwindcss')
const _ = require('lodash')

module.exports = _.merge(config, {
  content: ['./src/**/*.tsx'],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
})
