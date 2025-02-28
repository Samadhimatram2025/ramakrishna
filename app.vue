<script>
import NavBar from '~/components/navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: { NavBar, Footer }
}
</script>

<template>
  <div id="content" class="font-sans antialiased text-gray-900 relative min-h-screen">
    <!-- Navigation Bar -->
    <NavBar class="fixed top-0 left-0 right-0 z-50" />
    <!-- Page Content -->
    <NuxtPage class="relative z-10" />
    <Footer />
  </div>
</template>
