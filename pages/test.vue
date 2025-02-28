<template>
  <div class="min-h-screen bg-gradient-to-b from-saffron-100/80 to-white/80 flex flex-col items-center p-8 pt-48 text-center relative z-10">
    <NuxtLink to="/" class="absolute top-4 left-4 bg-saffron-800 text-white px-4 py-2 rounded-md hover:bg-saffron-700 transition-colors duration-300 z-20">
      Back to Home
    </NuxtLink>
    <div class="content max-w-4xl">
      <h1 class="text-4xl font-bold text-saffron-900 mb-6">New Donation Page</h1>
      <p class="text-lg text-gray-600 mb-4 text-center">Please select a category to donate to:</p>

      <div class="mb-4">
        <label for="category" class="block text-gray-700 text-sm font-bold mb-2">Category:</label>
        <select id="category" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option>Welfare</option>
          <option>Medical</option>
          <option>General</option>
          <option>New Ashram Development</option>
          <option>Women's Empowerment</option>
        </select>
      </div>

      <p class="text-lg text-gray-600 mb-4 text-center">Amount (ZAR):</p>
      <input type="number" id="amount" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter amount in Rands">

      <button class="bg-saffron-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-saffron-700 transition-all duration-300 mt-4">Donate with Payfast</button>

      <p class="text-sm text-gray-500 mt-4">Note: This form is a placeholder. You will need to integrate with Payfast.io to process payments. Please refer to the Payfast documentation for integration instructions.</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('Test page mounted');
  }
};
</script>
