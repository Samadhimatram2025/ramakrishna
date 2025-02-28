<template>
  <div class="bg-saffron-900/20">
    <nav class="bg-saffron-800 text-white p-4 shadow-xl about-navbar">
      <div class="container mx-auto flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center text-lg font-semibold" style="font-size: 1.2rem;">
          <img src="/rkc2.png" alt="Logo" class="h-24 w-500 mr-4" />
        </NuxtLink>
        <ul class="flex text-base space-x-6">
          <li><NuxtLink to="/" active-class="active-link" class="ripple hover:text-saffron-200 transition-colors duration-200" style="font-size: 1.2rem;">Home</NuxtLink></li>
          <li class="relative group">
            <NuxtLink to="/about" active-class="active-link" class="ripple hover:text-saffron-200 transition-colors duration-200" style="font-size: 1.2rem;">About</NuxtLink>
            <ul class="absolute hidden text-white pt-1 group-hover:block">
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

<style scoped>
.active-link {
  color: #fed7aa; /* Matches text-saffron-200 */
  font-weight: bold;
}

nav {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
}

.ripple {
  position: relative;
  overflow: hidden;
}

.ripple:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%);
  transform-origin: 50% 50%;
  z-index: 2;
  transition: transform 0.3s, opacity 0.3s ease 0s;
}

.ripple:focus:not(:active):after {
  animation: ripple 0.6s ease-out forwards;
}

@keyframes ripple {
  100% {
    opacity: 0;
    transform: scale(10, 10) translate(-50%);
  }
}
</style>
