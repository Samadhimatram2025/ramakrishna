<template>
  <div class="animation-container relative w-full h-96 overflow-hidden bg-sky-800">
    <!-- Central area for the animation -->
    <div class="central-area absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
      <!-- Water waves with multiple wave elements for better effect -->
      <div ref="waterContainer" class="water-container absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-20">
        <div ref="wave1" class="wave absolute w-full h-16 bottom-0 bg-blue-400 opacity-70"></div>
        <div ref="wave2" class="wave absolute w-full h-14 bottom-0 bg-blue-500 opacity-80"></div>
        <div ref="wave3" class="wave absolute w-full h-12 bottom-0 bg-blue-600"></div>
      </div>
      
      <!-- Lotus -->
      <svg ref="lotus" class="lotus absolute left-1/2 bottom-16 transform -translate-x-1/2 w-20 h-20 opacity-0" viewBox="0 0 100 100">
        <g fill="#F8BBD0">
          <!-- Lotus petals -->
          <path d="M50,40 C60,20 70,20 80,30 C70,50 60,50 50,40 Z" />
          <path d="M50,40 C40,20 30,20 20,30 C30,50 40,50 50,40 Z" />
          <path d="M50,40 C70,35 80,25 75,10 C55,15 45,25 50,40 Z" />
          <path d="M50,40 C30,35 20,25 25,10 C45,15 55,25 50,40 Z" />
          <path d="M50,40 C60,30 65,15 50,5 C40,15 40,30 50,40 Z" />
        </g>
        <!-- Lotus center -->
        <circle cx="50" cy="40" r="8" fill="#FFEB3B" />
        <!-- Lotus stem -->
        <path d="M50,40 L50,80" stroke="#4CAF50" stroke-width="3" fill="none" />
      </svg>
      
      <!-- Sun - will fully encircle the lotus -->
      <circle ref="sun" class="sun absolute left-1/2 top-full transform -translate-x-1/2 w-32 h-32 sun-animation" fill="#FFC107" />
      
      <!-- Snake encircling the sun -->
      <svg ref="snake" class="snake absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-0" viewBox="0 0 200 200">
        <!-- Path for the snake to follow around the sun -->
        <circle ref="snakeCirclePath" cx="100" cy="100" r="50" fill="none" stroke="transparent" />
        <!-- Snake body -->
        <path ref="snakePath" 
              d="M150,100 A50,50 0 1,1 149.9,100" 
              fill="none" 
              stroke="#4CAF50" 
              stroke-width="5" 
              stroke-linecap="round" />
        <!-- Snake head -->
        <circle ref="snakeHead" cx="150" cy="100" r="3" fill="#FF5722" />
      </svg>
      
      <!-- Swan -->
      <svg ref="swan" class="swan absolute bottom-10 -left-24 w-16 h-16 opacity-0" viewBox="0 0 100 100">
        <!-- Swan body -->
        <path d="M30,50 C40,40 60,40 70,50 C80,60 80,70 70,75 C60,80 40,80 30,75 C20,70 20,60 30,50 Z" fill="white" />
        <!-- Swan neck and head -->
        <path d="M70,50 C80,30 90,20 85,15 C80,10 75,15 70,25 C65,35 65,45 70,50 Z" fill="white" />
        <!-- Swan eye -->
        <circle cx="83" cy="15" r="2" fill="black" />
        <!-- Swan beak -->
        <path d="M85,15 L92,12 L85,18 Z" fill="#FF9800" />
      </svg>
    </div>
    
    <button @click="playAnimation" class="absolute top-4 left-4 px-4 py-2 bg-white text-blue-800 rounded-md shadow-md">
      Play Animation
    </button>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { onMounted, ref } from 'vue'

export default {
  name: 'SpiritualAnimation',
  setup() {
    gsap.registerPlugin(MotionPathPlugin)
    
    const waterContainer = ref(null)
    const wave1 = ref(null)
    const wave2 = ref(null)
    const wave3 = ref(null)
    const lotus = ref(null)
    const sun = ref(null)
    const snake = ref(null)
    const snakePath = ref(null)
    const snakeHead = ref(null)
    const snakeCirclePath = ref(null)
    const swan = ref(null)
    
    onMounted(() => {
      initWaterWaves()
    })
    
    const initWaterWaves = () => {
      // Create more pronounced wavy water effect with multiple waves
      gsap.set([wave1.value, wave2.value, wave3.value], {
        transformOrigin: '50% 100%'
      })
      
      // Animate first wave
      gsap.to(wave1.value, {
        scaleY: 1.3,
        y: -5,
        duration: 1.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      })
      
      // Animate second wave with slight delay
      gsap.to(wave2.value, {
        scaleY: 1.2,
        y: -3,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.2
      })
      
      // Animate third wave with different timing
      gsap.to(wave3.value, {
        scaleY: 1.15,
        y: -2,
        duration: 1.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.4
      })
    }
    
    const playAnimation = () => {
      const timeline = gsap.timeline()
      
      // Step 1: Lotus emergence from the water
      timeline.to(lotus.value, {
        y: -25,
        opacity: 1,
        duration: 3,
        ease: 'power2.out'
      })
      
      // Make lotus gently pulse
      timeline.to(lotus.value, {
        scale: 1.1,
        duration: 1.5,
        repeat: 2,
        yoyo: true,
        ease: 'sine.inOut'
      }, '-=1')
      
      // Step 2: Sun rising to encircle the lotus
      // First position the sun behind the lotus
      timeline.to(sun.value, {
        yPercent: -95,
        duration: 4,
        ease: 'power2.out'
      }, '-=1')
      
      // Make the sun glow
      timeline.to(sun.value, {
        boxShadow: '0 0 30px 15px rgba(255, 193, 7, 0.6)',
        repeat: 3,
        yoyo: true,
        duration: 2
      }, '-=3')
      
      // Step 3: Snake appearing and encircling the sun
      timeline.set(snake.value, { opacity: 1 }, '-=1')
      
      // Animate snake path drawing - clockwise around the sun
      timeline.fromTo(
        snakePath.value, 
        { strokeDasharray: snakePath.value.getTotalLength(), strokeDashoffset: snakePath.value.getTotalLength() },
        { strokeDashoffset: 0, duration: 6, ease: 'power1.inOut' }
      )
      
      // Animate snake head along the circular path
      timeline.to(snakeHead.value, {
        duration: 6,
        ease: 'power1.inOut',
        motionPath: {
          path: snakeCirclePath.value,
          align: snakeCirclePath.value,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 0,
          end: 1
        }
      }, '-=6')
      
      // Step 4: Swan swimming toward the sun
      timeline.to(swan.value, {
        opacity: 1,
        x: '+=80',
        duration: 4,
        ease: 'power1.inOut'
      }, '-=2')
      
      // Add gentle up-down motion to swan
      timeline.to(swan.value, {
        y: '+=5',
        repeat: 3,
        yoyo: true,
        duration: 1.3,
        ease: 'sine.inOut'
      }, '-=4')
      
      // Swan swims INTO the sun (literally)
      timeline.to(swan.value, {
        x: '+=32',
        y: '-=5',
        scale: 0.5,
        opacity: 0,
        duration: 2,
        ease: 'power2.in'
      })
      
      // Final pulse of the sun as it absorbs the swan
      timeline.to(sun.value, {
        scale: 1.15,
        duration: 1,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut'
      }, '-=1')
    }
    
    return {
      waterContainer,
      wave1,
      wave2,
      wave3,
      lotus,
      sun,
      snake,
      snakePath,
      snakeHead,
      snakeCirclePath,
      swan,
      playAnimation
    }
  }
}
</script>

<style scoped>
.water-container {
  position: relative;
  overflow: hidden;
}

.wave {
  border-top-left-radius: 40%;
  border-top-right-radius: 40%;
  transform-origin: center bottom;
}

.sun {
  border-radius: 50%;
  filter: blur(1px);
}

.central-area {
  position: relative;
}

@media (max-width: 768px) {
  .sun-animation {
    transform: translateY(20px); /* Adjust this value as needed */
  }
}
</style>
