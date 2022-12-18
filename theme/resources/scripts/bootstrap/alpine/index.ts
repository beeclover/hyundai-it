import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
// data
import faq from './faq'


const store = () => {
  document.addEventListener('alpine:init', () => {
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
