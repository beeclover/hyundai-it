import { domReady } from '@roots/sage/client'
import { bootstarpAlpine } from './bootstrap'
import header from './header'
import Router from './utils/router';
import * as routes from './routes'

const Routes = new Router(routes);

/**
 * app.main
 */
const main = async err => {
  if (err) {
    // handle hmr errors
    console.error(err)
  }

  // application code
  Routes.loadEvents();
  // bootstrap
  bootstarpAlpine();

  // application code
  header()
}

/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */
domReady(main as () => unknown)
import.meta.webpackHot?.accept(main)
