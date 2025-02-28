<template>
  <div class="min-h-screen bg-gradient-to-b from-saffron-100/80 to-white/80 flex flex-col items-center p-8 pt-36 text-center relative z-10">
    <div class="content">
      <h1 class="text-4xl font-bold text-saffron-900 mb-6">Contact Us</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold text-saffron-800 mb-4">Contact Details</h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            <span class="font-semibold">Email Address:</span><br>
            johannesburg@ramakrishna-phoenix.org.za
          </p>
          <p class="text-lg text-gray-600 leading-relaxed mt-4">
            <span class="font-semibold">Address:</span><br>
            Postnet Suite 204, Private Bag X3,<br>
            Northriding, 2162
          </p>
          <p class="text-lg text-gray-600 leading-relaxed mt-4">
            <span class="font-semibold">Contact Number:</span><br>
            +27 72 052 1284
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold text-saffron-800 mb-4">Persons in Charge</h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            <span class="font-semibold">President:</span><br>
            Revered Swami Saradaprabhananda
          </p>
          <p class="text-lg text-gray-600 leading-relaxed mt-4">
            <span class="font-semibold">Swami in Charge:</span><br>
            Revered Swami Viprananda
          </p>
          <p class="text-lg text-gray-600 leading-relaxed mt-4">
            <span class="font-semibold">Chairperson:</span><br>
            Mr. Naresh Ramatar (+27) 82 923 6537
          </p>
          <p class="text-lg text-gray-600 leading-relaxed mt-4">
            <span class="font-semibold">Secretary:</span><br>
            Mr. Pranil Bhodraj (+27) 72 052 1284
          </p>
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
    gsap.from('.content', { opacity: 0, y: 50, duration: 1.2, ease: 'power2.out', delay: 0.3 })
  }
}
</script>
