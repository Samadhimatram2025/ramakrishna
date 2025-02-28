<template>
  <Navbar />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
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
