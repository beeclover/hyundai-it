import share from '../components/share';
import header from '../components/header';

export default {
  containerInit() {
    share();
  },
  init() {
    // common code outside containers (header, menu, footer, etc.)
    header();
    // container init
    this.containerInit();
  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
