import React from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from 'twin.macro'
import App from './App'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
