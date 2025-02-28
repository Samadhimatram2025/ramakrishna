<template>
  <div class="min-h-screen bg-gradient-to-b from-saffron-100/80 to-white/80 flex flex-col items-center p-8 pt-36 text-center relative z-10">
    <div class="content max-w-4xl w-full space-y-6">
      <h1 class="text-5xl font-bold text-saffron-800 mb-8">Maha Shivarathri Celebrations</h1>
      <img src="/SRKJayanti.jpg" alt="Maha Shivarathri Celebrations" class="w-full h-48 object-contain rounded-lg mb-4" />
      <div class="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start">
        <div class="md:w-1/3">
          <p class="text-saffron-800 font-semibold">February 26, 2025</p>
          <p class="text-gray-600">7:00 PM - 9:00 PM</p>
        </div>
        <div class="md:w-2/3 mt-4 md:mt-0">
          <h3 class="text-2xl font-semibold text-saffron-800">Maha Shivarathri Celebrations</h3>
          <p class="text-gray-700 mt-2">The programme includes Chanting, Bhajans, Arati, Offering of Bilva leaves.</p>
          <p class="text-gray-700 mt-4">Maha Shivarathri is a Hindu festival celebrated annually in honour of the deity Shiva. The name also refers to the night when Shiva performs the heavenly dance. It is a major festival in Hinduism, marking a remembrance of overcoming darkness and ignorance in life and the world. It is observed by remembering Shiva and chanting prayers, fasting, and meditating on ethics and virtues such as self-restraint, honesty, non-injury to others, forgiveness, and the discovery of Shiva. The ardent devotees keep awake all night and visit Shiva temples.</p>
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
