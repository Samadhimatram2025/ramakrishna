import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      gsap,
      ScrollTrigger
    }
  }
})