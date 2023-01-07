import _ from 'lodash'
import Alpine from 'alpinejs'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const menu = Alpine.store('menu', {
  on: false,
  open() {
    this.on = true;
    disableBodyScroll(document.querySelector('body'), {
      reserveScrollBarGap: true,
    });
    document.querySelector('#wpadminbar').classList.add('pr-[15px]')
  },
  close() {
    this.on = false;
    enableBodyScroll(document.querySelector('body'))
    document.querySelector('#wpadminbar').classList.remove('pr-[15px]')
  }
})

export default menu;
