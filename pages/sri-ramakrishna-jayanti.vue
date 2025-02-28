<template>
  <div class="min-h-screen bg-gradient-to-b from-saffron-100/80 to-white/80 flex flex-col items-center p-8 pt-36 text-center relative z-10">
    <div class="content max-w-4xl w-full space-y-6">
      <h1 class="text-5xl font-bold text-saffron-800 mb-8">Sri Ramakrishna Jayanti</h1>
<img src="/SRKJayanti.jpg" alt="Sri Ramakrishna Jayanti" class="w-1/2 mx-auto rounded-lg mb-4" />
      <div class="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start">
        <div class="md:w-1/3">
          <p class="text-saffron-800 font-semibold">March 2, 2025</p>
          <p class="text-gray-600">10:00 AM - 12:00 PM</p>
          <p class="text-gray-600">Marlboro Community Centre</p>
        </div>
        <div class="md:w-2/3 mt-4 md:mt-0">
          <h3 class="text-2xl font-semibold text-saffron-800">Sri Ramakrishna Jayanti</h3>
          <p class="text-gray-700 mt-2">Keynote address by Revered Swami Saradaprabhanandaji.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    gsap.from('.content > *', {
      opacity: 0,
      y: 20,
      duration: 0.75,
      ease: 'power2.out',
      stagger: 0.2,
      delay: 0.3
    })
  },
};
</script>
