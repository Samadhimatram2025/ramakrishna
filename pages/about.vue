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
      
  
      <!-- About Content -->
      <div class="min-h-screen bg-gradient-to-b from-saffron-100 to-white flex flex-col items-center text-center p-6 pt-20">
        <h1 class="text-5xl font-bold text-saffron-800 mb-4">
          About Us
        </h1>
        <p class="text-xl text-gray-700 max-w-3xl mb-6">
          The Ramakrishna Centre of South Africa, Johannesburg, is dedicated to promoting the universal teachings of Sri Ramakrishna, fostering spiritual growth, and serving the community through peace and harmony.
        </p>
      </div>
    </div>
  </template>
  