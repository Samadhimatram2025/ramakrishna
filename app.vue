<template>
  <Navbar />
  <NuxtLayout class="page-container">
    <NuxtPage />
  </NuxtLayout>
  <Footer />
</template>

<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width' }
  ]
})
</script>

<style>
@import url('assets/css/main.css');
</style>
