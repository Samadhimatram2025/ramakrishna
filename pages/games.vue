<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    gsap.from('.games-section', { opacity: 0, y: 100, duration: 1.5, ease: 'power2.out', scrollTrigger: { trigger: '.games-section', start: 'top 80%' } })
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-saffron-100/80 to-white/80 flex flex-col items-center p-8 pt-36 text-center relative z-10">
    <h1 class="text-4xl font-bold text-saffron-900 mb-6 tracking-tight">Spiritual Games & Activities</h1>
    <p class="text-lg text-gray-600 max-w-2xl mb-8 leading-relaxed">Engage in fun, meaningful games inspired by spiritual teachings to deepen your connection and understanding.</p>
    <section class="games-section w-full max-w-5xl">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <NuxtLink to="/the-masters-words" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-xl font-semibold text-saffron-800 mb-2">The Master’s Words</h3>
          <p class="text-gray-600">Guess the word inspired by Sri Ramakrishna’s teachings in this Wordle challenge.</p>
        </NuxtLink>
        <NuxtLink to="/guess-the-picture" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-xl font-semibold text-saffron-800 mb-2">Guess the Picture</h3>
          <p class="text-gray-600">Identify a spiritual image as it reveals itself—test your intuition!</p>
        </NuxtLink>
        <NuxtLink to="/quote-game" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-xl font-semibold text-saffron-800 mb-2">Arrange the Words</h3>
          <p class="text-gray-600">Identify a spiritual image as it reveals itself—test your intuition!</p>
        </NuxtLink>
        <NuxtLink to="/omtetris" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h3 class="text-xl font-semibold text-saffron-800 mb-2">OM Tetris</h3>
          <p class="text-gray-600">Play OM Tetris.</p>
        </NuxtLink>
      </div>
    </section>
    <NuxtLink to="/" class="mt-8 bg-saffron-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-saffron-700 transition-all duration-300">Back to Home</NuxtLink>
  </div>
</template>
