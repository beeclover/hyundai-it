import { domReady } from '@roots/sage/client'

/**
 * app.main
 */
const main = async err => {
  if (err) {
    // handle hmr errors
    console.error(err)
  }

  // application code
}

/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */
domReady(main as () => unknown)
import.meta.webpackHot?.accept(main)
