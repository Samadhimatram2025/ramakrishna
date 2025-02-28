<!-- components/StarAnimation.vue -->
<template>
    <div class="animation-container">
      <div class="sky"></div>
      <div class="stars" ref="stars"></div>
      <div class="sun" ref="sun"></div>
      <div class="quote" ref="quote">
        <p>"You see many stars in the sky at night,"</p>
        <p>"but not when the sun rises."</p>
        <p>"Can you therefore say that there are no stars"</p>
        <p>"in the heavens during the day?"</p>
        <p>"O man, because you cannot find God"</p>
        <p>"in the days of your ignorance,"</p>
        <p>"say not that there is no God."</p>
      </div>
    </div>
  </template>
  
  <script>
  import { gsap } from 'gsap'
  
  export default {
    name: 'StarAnimation',
    mounted() {
      this.initAnimation()
    },
    methods: {
      initAnimation() {
        const stars = this.$refs.stars
        const sun = this.$refs.sun
        const quoteLines = this.$refs.quote.children
  
        // Create multiple stars with twinkling
        for (let i = 0; i < 50; i++) {
          const star = document.createElement('div')
          star.classList.add('star')
          star.style.left = `${Math.random() * 100}%`
          star.style.top = `${Math.random() * 90}%` // Keep stars below navbar
          stars.appendChild(star)
        }
  
        // Twinkling animation for all stars
        gsap.to('.star', {
          opacity: 'random(0.3, 1)',
          duration: 'random(1, 3)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: 0.1
        })
  
        // Animation timeline
        const tl = gsap.timeline({ repeat: -1, yoyo: true })
  
        // Initial state
        gsap.set('.star', { 
          scale: 0,
          opacity: 0 
        })
        gsap.set(sun, { 
          y: '100vh',  // Start from bottom
          opacity: 0 
        })
        gsap.set(quoteLines, { 
          opacity: 0,
          y: 20 
        })
  
        // Animation sequence
        tl
          // Stars appear (night)
          .to('.star', {
            scale: 1,
            opacity: 1,
            stagger: 0.02,
            duration: 1,
            ease: 'power2.inOut'
          })
          // Quote lines appear
          .to(quoteLines, {
            opacity: 1,
            y: 0,
            stagger: 2.5,
            duration: 2.5,
            ease: 'power2.out'
          }, '-=0.5')
          // Sun rises slowly to just below navbar
          .to(sun, {
            y: '150px',  // Stop below navbar (assuming ~100px height)
            opacity: 1,
            duration: 8,  // Much slower (was 2)
            ease: 'power2.inOut'
          })
          // Stars fade but remain
          .to('.star', {
            opacity: 0.2,
            duration: 1.5,
            ease: 'power2.inOut'
          }, '-=1.5')
          // Pause
          .to({}, { duration: 2 })
      }
    }
  }
  </script>
  
  <style scoped>
  .animation-container {
    position: relative;
    width: 100%;
    height: calc(100vh - 100px); /* Account for navbar height */
    overflow: hidden;
    background: linear-gradient(to bottom, #0f0c29, #302b63);
    margin-top: 100px; /* Push down below navbar */
  }
  
  .sky {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .stars {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
  }
  
  .sun {
    position: absolute;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, #fffb7d, #f6416c);
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .quote {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 1.2rem;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
  </style>