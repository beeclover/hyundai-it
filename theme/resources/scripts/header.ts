import Headroom from 'headroom.js'

function header() {
  const targetEl: HTMLHeadElement = document.querySelector('header#gnb')
  const headroom = new Headroom(targetEl, {})
  headroom.init()
}

export default header
