<script>
import NavBar from '~/components/navbar.vue'  // Changed to lowercase
export default {
  components: { NavBar }
}
</script>
<template>
    <div>
      <!-- Navigation Bar -->
      <NavBar />

      <!-- Hero Section -->
<div class="min-h-screen bg-gradient-to-b from-saffron-100 to-white flex flex-col items-center justify-center text-center p-6 pt-20">
<img src="/Ramakrishna.jpg" alt="Ramakrishna Centre" class="max-w-[24rem] rounded-lg shadow-lg mb-6">
        <h1 class="text-5xl font-bold text-saffron-800 mb-4">
          Ramakrishna Centre of South Africa
        </h1>
        <p class="text-xl text-gray-700 max-w-2xl mb-6">
          A sanctuary of peace and spiritual growth in Johannesburg, inspired by the teachings of Sri Ramakrishna.
        </p>
        <a href="#" class="bg-saffron-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-saffron-700">
          Learn More
        </a>
      </div>
    </div>
  </template>
