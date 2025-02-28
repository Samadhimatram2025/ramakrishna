<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {
      events: [
        {
          name: 'maha-shivarathri',
          date: 'February 26, 2025',
          time: '7:00 PM - 9:00 PM',
          title: 'Maha Shivarathri Celebrations',
          description: 'The programme includes Chanting, Bhajans, Arati, Offering of Bilva leaves.',
        },
        {
          name: 'sri-ramakrishna-jayanti',
          date: 'March 2, 2025',
          time: '10:00 AM - 12:00 PM',
          location: 'Marlboro Community Centre',
          title: 'Sri Ramakrishna Jayanti',
          description: 'Keynote address by Revered Swami Saradaprabhanandaji.',
        },
      ],
    };
  },
  mounted() {
    gsap.from('.events-container > *', {
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

<template>
  <div class="min-h-screen bg-gradient-to-b from-saffron-100/80 to-white/80 flex flex-col items-center p-8 pt-36 text-center relative z-10">
    <NuxtLink to="/" class="absolute top-4 left-4 bg-saffron-800 text-white px-4 py-2 rounded-md hover:bg-saffron-700 transition-colors duration-300 z-20">
      Back to Home
    </NuxtLink>
    <div class="events-container content max-w-4xl w-full space-y-6">
      <h1 class="text-5xl font-bold text-black mb-8">Recent/Upcoming Events</h1>
      <NuxtLink
        v-for="event in events"
        :key="event.name"
        :to="`/${event.name}`"
        class="event-card block bg-white p-6 rounded-lg shadow-md hover:shadow-lg bg-red-100"
      >
        <div class="md:flex md:items-start">
          <div class="md:w-1/3">
            <p class="text-saffron-800 font-semibold">{{ event.date }}</p>
            <p class="text-gray-600">{{ event.time }}</p>
            <p class="text-gray-600" v-if="event.location">{{ event.location }}</p>
          </div>
          <div class="md:w-2/3 mt-4 md:mt-0">
            <h3 class="text-2xl font-semibold text-saffron-800">{{ event.title }}</h3>
            <p class="text-gray-700 mt-2">{{ event.description }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.events-container {
  display: flex;
  flex-direction: column;
}
</style>
