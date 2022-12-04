import { domReady } from "@roots/sage/client";
import Alpine from "alpinejs";

/**
 * app.main
 */
const main = async (err) => {
  if (err) {
    // handle hmr errors
    console.error(err);
  }

  // ========================================================
  // application code
  // ========================================================

  // Alpine.js
  window.Alpine = Alpine;
  Alpine.start();
};

/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */
// @ts-ignore
domReady(main);
import.meta.webpackHot?.accept(main);
