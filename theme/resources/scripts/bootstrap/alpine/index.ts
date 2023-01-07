import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
// data
import faq from './faq'
import menu from './menu'


const store = () => {
  document.addEventListener('alpine:init', () => {
    menu
  })
}

const data = () => {
  Alpine.data("faq", faq);
}

export const bootstarpAlpine = () => {
  Alpine.plugin(collapse)
  data();
  store();
  Alpine.start();
}
