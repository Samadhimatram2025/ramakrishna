<script>
import NavBar from '~/components/navbar.vue'  // Changed to lowercase
export default {
  components: { NavBar }
}
</script>

<template>
  <div>
    <NavBar />
    <div class="min-h-screen bg-gradient-to-b from-saffron-100 to-white flex flex-col items-center text-center p-6 pt-20">
      <h1 class="text-5xl font-bold text-saffron-800 mb-8">
        Upcoming Events
      </h1>
      <div class="max-w-4xl w-full space-y-6">
        <div class="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start">
          <div class="md:w-1/3">
            <p class="text-saffron-800 font-semibold">February 28, 2025</p>
            <p class="text-gray-600">5:00 PM - 8:00 PM</p>
          </div>
          <div class="md:w-2/3 mt-4 md:mt-0">
            <h3 class="text-2xl font-semibold text-saffron-800">Sri Ramakrishna Jayanti</h3>
            <p class="text-gray-700 mt-2">Join us for a special celebration honoring Sri Ramakrishna’s birth anniversary with prayers, music, and meditation.</p>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start">
          <div class="md:w-1/3">
            <p class="text-saffron-800 font-semibold">March 10, 2025</p>
            <p class="text-gray-600">6:00 PM - 7:30 PM</p>
          </div>
          <div class="md:w-2/3 mt-4 md:mt-0">
            <h3 class="text-2xl font-semibold text-saffron-800">Meditation Evening</h3>
            <p class="text-gray-700 mt-2">A serene evening of guided meditation and spiritual reflection open to all seekers.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>