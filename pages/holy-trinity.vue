<template>
  <div class="min-h-screen bg-gradient-to-b from-saffron-100/80 to-white/80 flex flex-col items-center p-8 pt-48 text-center relative z-10">
    <NuxtLink to="/" class="absolute top-4 left-4 bg-saffron-800 text-white px-4 py-2 rounded-md hover:bg-saffron-700 transition-colors duration-300 z-20">
      Back to Home
    </NuxtLink>
    <div class="content max-w-4xl">
      <h1 class="text-4xl font-bold text-saffron-900 mb-6">Holy Trinity</h1>
      <p class="text-lg text-gray-600 mb-8 text-center">Learn more about the Holy Trinity: Sri Ramakrishna, Sri Sarada Devi, and Swami Vivekananda.</p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <NuxtLink to="/sri-ramakrishna" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img src="/holy-trinity-1.jpg" alt="Sri Ramakrishna" class="w-full h-48 object-contain rounded-lg mb-4" />
          <h3 class="text-xl font-semibold text-saffron-800 text-center">Sri Ramakrishna</h3>
          <p class="text-gray-600 text-center">Learn more about the great saint.</p>
        </NuxtLink>
        <NuxtLink to="/sri-sarada-devi" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img src="/holy-trinity-2.jpg" alt="Sri Sarada Devi" class="w-full h-48 object-contain rounded-lg mb-4" />
          <h3 class="text-xl font-semibold text-saffron-800 text-center">Sri Sarada Devi</h3>
          <p class="text-gray-600 text-center">Discover the life of the Holy Mother.</p>
        </NuxtLink>
        <NuxtLink to="/swami-vivekananda" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img src="/holy-trinity-3.jpg" alt="Swami Vivekananda" class="w-full h-48 object-contain rounded-lg mb-4" />
          <h3 class="text-xl font-semibold text-saffron-800 text-center">Swami Vivekananda</h3>
          <p class="text-gray-600 text-center">Explore the legacy of the disciple.</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('Holy Trinity page mounted');
  }
};
</script>
