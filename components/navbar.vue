<template>
  <div class="bg-saffron-900/20">
    <nav class="bg-saffron-800 text-white p-2 shadow-xl about-navbar fixed top-0 left-0 w-full z-20">
      <div class="container mx-auto flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center text-lg font-semibold" style="font-size: 1.2rem;">
          <img src="/rkc2.png" alt="Logo" class="h-16 md:h-24 w-auto mr-4" />
        </NuxtLink>
        <!-- Hamburger Button (visible on mobile) -->
        <button class="md:hidden text-white focus:outline-none" @click="toggleMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <!-- Menu (hidden on mobile by default, shown on desktop) -->
        <ul :class="{ 'hidden': !menuOpen, 'block': menuOpen }" class="flex flex-col md:flex-row md:flex text-base space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-saffron-800 md:bg-transparent p-4 md:p-0">
          <li><NuxtLink to="/" active-class="active-link" class="ripple hover:text-saffron-200 transition-colors duration-200" style="font-size: 1.2rem;">Home</NuxtLink></li>
          <li class="relative group">
            <NuxtLink to="/about" active-class="active-link" class="ripple hover:text-saffron-200 transition-colors duration-200" style="font-size: 1.2rem;">About</NuxtLink>
            <ul class="absolute hidden text-white pt-1 group-hover:block md:group-hover:block">
              <li class="bg-saffron-800 hover:bg-saffron-700">
                <NuxtLink to="/holy-trinity" class="block whitespace-no-wrap px-4 py-2" style="font-size: 1.2rem;">Holy Trinity</NuxtLink>
              </li>
              <li class="bg-saffron-800 hover:bg-saffron-700">
                <NuxtLink to="/about" class="block whitespace-no-wrap px-4 py-2" style="font-size: 1.2rem;">Sub-Centre</NuxtLink>
              </li>
            </ul>
          </li>
          <li><NuxtLink to="/events" active-class="active-link" class="ripple hover:text-saffron-200 transition-colors duration-200" style="font-size: 1.2rem;">Events</NuxtLink></li>
          <li><NuxtLink to="/building-project" active-class="active-link" class="ripple hover:text-saffron-200 transition-colors duration-200" style="font-size: 1.2rem;">Building Project</NuxtLink></li>
          <li><NuxtLink to="/games" active-class="active-link" class="ripple hover:text-saffron-200 transition-colors duration-200" style="font-size: 1.2rem;">Learn</NuxtLink></li>
          <li class="relative group">
            <NuxtLink to="/donate" active-class="active-link" class="ripple hover:text-saffron-200 transition-colors duration-200" style="font-size: 1.2rem;">Donate</NuxtLink>
          </li>
          <li><NuxtLink to="/contactus" active-class="active-link" class="ripple hover:text-saffron-200 transition-colors duration-200" style="font-size: 1.2rem;">Contact Us</NuxtLink></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>