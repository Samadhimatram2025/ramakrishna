<template>
  <div class="min-h-screen bg-gradient-to-b from-saffron-100/80 to-white/80 flex flex-col items-center p-8 pt-36 text-center relative z-10">
    <div class="content max-w-2xl">
      <h1 class="text-4xl font-bold text-saffron-900 mb-6">Donate</h1>
      <p class="text-lg text-gray-600 mb-8">Support the Ramakrishna Centre and its activities.</p>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label for="name" class="block text-saffron-800 font-semibold">Name</label>
          <input
            type="text"
            id="name"
            v-model="name"
            class="w-full p-3 border-2 border-saffron-200 rounded-lg focus:outline-none focus:border-saffron-400"
            required
          />
        </div>
        <div>
          <label for="email" class="block text-saffron-800 font-semibold">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full p-3 border-2 border-saffron-200 rounded-lg focus:outline-none focus:border-saffron-400"
            required
          />
        </div>

        <div>
          <label for="category" class="block text-saffron-800 font-semibold">Category</label>
          <select
            id="category"
            v-model="category"
            class="w-full p-3 border-2 border-saffron-200 rounded-lg focus:outline-none focus:border-saffron-400"
            required
          >
            <option value="Welfare">Welfare</option>
            <option value="Medical">Medical</option>
            <option value="General">General</option>
            <option value="New Ashram Development">New Ashram Development</option>
            <option value="Womens Empowerment">Women's Empowerment</option>
          </select>
        </div>

        <div>
          <label for="amount" class="block text-saffron-800 font-semibold">Amount (ZAR)</label>
          <input
            type="number"
            id="amount"
            v-model="amount"
            class="w-full p-3 border-2 border-saffron-200 rounded-lg focus:outline-none focus:border-saffron-400"
            required
          />
        </div>

        <button
          type="submit"
          class="bg-saffron-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-saffron-700 transition-all duration-300"
        >
          Donate
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {
      name: '',
      email: '',
      amount: 0,
      category: 'Welfare'
    }
  },
  methods: {
    handleSubmit() {
      // TODO: Implement form submission logic
      if (!this.name || !this.email || !this.amount || !this.category) {
        alert('Please fill in all fields.')
        return
      }

      const payfastUrl = `https://www.payfast.co.za/eng/process?cmd=_paynow&merchant_id=10004650&merchant_key=46c05a33436f3&amount=${this.amount}&item_name=Donation to Ramakrishna Centre - ${this.category}&name_first=${this.name}&email_address=${this.email}&receiver=placeholder@example.com`;
      window.location.href = payfastUrl;
    }
  }
}
</script>
