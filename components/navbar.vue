<template>
    <nav class="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-10">
      <div class="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
        <h2 class="text-2xl font-semibold text-saffron-800">
          JHB Ramakrishna Centre of South Africa
        </h2>
        <ul class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          <li><NuxtLink to="/" class="text-gray-700 hover:text-saffron-800" active-class="text-saffron-800 font-bold">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="text-gray-700 hover:text-saffron-800" active-class="text-saffron-800 font-bold">About</NuxtLink></li>
          <li><NuxtLink to="/events" class="text-gray-700 hover:text-saffron-800" active-class="text-saffron-800 font-bold">Events</NuxtLink></li>
          <li><NuxtLink to="/contact" class="text-gray-700 hover:text-saffron-800" active-class="text-saffron-800 font-bold">Contact</NuxtLink></li>
        </ul>
      </div>
    </nav>
  </template>
