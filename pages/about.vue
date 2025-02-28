<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {
      activeTab: 'johannesburg'
    };
  },
  mounted() {
    gsap.from('.content', { opacity: 0, y: 50, duration: 1.2, ease: 'power2.out', delay: 0.3 });
  },
  methods: {
    setTab(tab) {
      this.activeTab = tab;
    }
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-saffron-100/80 to-white/80 flex flex-col items-center p-8 pt-48 text-center relative z-10">
    <NuxtLink to="/" class="absolute top-4 left-4 bg-saffron-800 text-white px-4 py-2 rounded-md hover:bg-saffron-700 transition-colors duration-300 z-20">
      Back to Home
    </NuxtLink>
    <div class="content max-w-4xl">
      <h1 class="text-4xl font-bold text-saffron-900 mb-6">About Us</h1>
      <p class="text-lg text-gray-600 mb-4 text-center">The idea of starting a Ramakrishna Movement in Africa had germinated in the mind of Swami Vivekananda,
        the principal architect of the organisation, for in 1897 he wrote to his brother monk, Swami Shivananda Mahapurush:
        “Mr Setlur... writes to me to send somebody to Africa... No immediate results can be expected but in the long run
        it will prove more beneficial work for India than any yet attempted.”</p>

      <div class="tab-container rounded-lg">
        <div class="tab-buttons flex justify-around mb-4">
          <button @click="setTab('johannesburg')" :class="{'active-tab': activeTab === 'johannesburg'}" class="tab-button rounded-lg">Johannesburg Sub-Centre</button>
          <button @click="setTab('outreach')" :class="{'active-tab': activeTab === 'outreach'}" class="tab-button rounded-lg">Outreach</button>
          <button @click="setTab('activities')" :class="{'active-tab': activeTab === 'activities'}" class="tab-button rounded-lg">Primary Activities</button>
          <button @click="setTab('motto')" :class="{'active-tab': activeTab === 'motto'}" class="tab-button rounded-lg">Motto</button>
          <button @click="setTab('logo')" :class="{'active-tab': activeTab === 'logo'}" class="tab-button rounded-lg">Logo</button>
          <button @click="setTab('vedanta')" :class="{'active-tab': activeTab === 'vedanta'}" class="tab-button rounded-lg">Vedanta</button>
          <button @click="setTab('monks')" :class="{'active-tab': activeTab === 'monks'}" class="tab-button rounded-lg">Monks</button>
        </div>

        <div v-if="activeTab === 'johannesburg'" class="tab-content">
          <h2 class="text-2xl font-semibold text-saffron-800 mt-8 mb-4">THE RAMAKRISHNA CENTRE OF SOUTH AFRICA – JOHANNESBURG</h2>
          <p class="text-lg text-gray-600 mb-4">The Ramakrishna Centre of South Africa was founded in 1942 by Swami Nischalananda.</p>
          <p class="text-lg text-gray-600 mb-4">The Johannesburg Centre which started in 1954 is a registered Public Benefit Organisation and Non-Profit Organisation (PBO No.: 930050436 NPO No.: 161-189 NPO) that has been engaged in various forms of humanitarian and social service activities in South Africa for more than seventy-five years.</p>
        </div>

        <div v-if="activeTab === 'outreach'" class="tab-content">
          <h2 class="text-2xl font-semibold text-saffron-800 mt-8 mb-4">Outreach Programmes</h2>
          <p class="text-lg text-gray-600 mb-4">The Ramakrishna Centre has been actively spreading the universal message of peace and harmony. It continues to contribute to the upliftment of disadvantaged communities through many of its outreach programmes, which include medical services, nutritional aid, skills development, women empowerment, youth resource development, educational services, support to HIV/AIDS hospices and the distribution of value-based literature.</p>
        </div>

        <div v-if="activeTab === 'activities'" class="tab-content">
          <ol class="list-decimal list-inside text-lg text-gray-600 mb-4">
            <li>Dissemination of Vedanta Philosophy</li>
            <li>Outreach work under the dictum ‘service to man is worship of God’.</li>
          </ol>
        </div>
        <div v-if="activeTab === 'motto'" class="tab-content">
          <p class="text-lg text-gray-600 italic mb-4">Atmano Mokshartam Jagat Hitaya Cha</p>
          <p class="text-lg text-gray-600 mb-4">For one’s own salvation and for the welfare of the world</p>
        </div>

        <div v-if="activeTab === 'logo'" class="tab-content">
          <h2 class="text-2xl font-semibold text-saffron-800 mt-8 mb-4">OUR LOGO</h2>
          <p class="text-lg text-gray-600 mb-4">The emblem of the Ramakrishna Mission is a profound symbol of harmony. Swami Vivekananda, the creator of this symbol, sums up its significance: “The wavy waters in the picture are symbolic of Karma (selfless actions), the lotus of Bhakti (devotion to God) and the rising sun of Jnana (Knowledge of God). The encircling serpent is indicative of Yoga (meditative practices to realize God) and awakened Kundalini Shakti while the swan in the picture stands for Paramatman (the Supreme Reality). Therefore, the ideal of the picture is that by the union of Karma, Jnana, Bhakti and Yoga the vision of the Paramatman is obtained.”</p>
        </div>

        <div v-if="activeTab === 'vedanta'" class="tab-content">
          <h2 class="text-2xl font-semibold text-saffron-800 mt-8 mb-4">DESCRIPTION OF VEDANTA</h2>
          <h3 class="text-lg font-semibold text-saffron-700 mt-8 mb-4">WHAT IS VEDANTA</h3>
          <p class="text-lg text-gray-600 mb-4">The ideology of the Centre consists of the eternal principles of Vedanta as lived and experienced by Sri Ramakrishna and expounded by Swami Vivekananda.</p>

          <h3 class="text-lg font-semibold text-saffron-700 mt-8 mb-4">THIS IDEOLOGY HAS THREE CHARACTERISTICS:</h3>
          <ol class="list-decimal list-inside text-lg text-gray-600 mb-4">
            <li>It is modern in the sense that the ancient principles of Vedanta are expressed in the current context</li>
            <li>It is universal, that is, it is meant for the whole of humanity</li>
            <li>It is practical in the sense that its principles can be applied to solve the problems of day-to-day life</li>
          </ol>

          <h3 class="text-lg font-semibold text-saffron-700 mt-8 mb-4">THE TWO MAIN PRINCIPLES OF VEDANTA PHILOSOPHY ARE:</h3>
          <ol class="list-decimal list-inside text-lg text-gray-600 mb-4">
            <li>God-realisation is the ultimate goal of life</li>
            <li>Each soul is potentially divine</li>
          </ol>
        </div>

        <div v-if="activeTab === 'monks'" class="tab-content">
          <h3 class="text-lg font-semibold text-saffron-700 mt-8 mb-4">SWAMI SARADAPRABHANANDA</h3>
          <p class="text-lg text-gray-600 mb-4">President of the Ramakrishna Centre of South Africa – Phoenix</p>
          <p class="text-lg text-gray-600 mb-4">Swami Saradaprabhananda is the President of the Ramakrishna Centre of South Africa – Phoenix. Swamiji joined the Johannesburg Centre in 1975 and has been actively involved in the Centre’s various spiritual, cultural and outreach work ever since.</p>

          <h3 class="text-lg font-semibold text-saffron-700 mt-8 mb-4">SWAMI VIPRANANDA</h3>
          <p class="text-lg text-gray-600 mb-4">Swami in Charge – Johannesburg</p>
          <p class="text-lg text-gray-600 mb-4">Swami Viprananda is the Swami-in-Charge of the Ramakrishna Centre of South Africa – Johannesburg. Swamiji joined the Ramakrishna Mission in 2006 and has been actively involved in the Organisation’s multifarious activities ever since.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-container {
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
}

.tab-buttons {
  background-color: #f3f3f3;
  border-bottom: 2px solid #e2e8f0;
}

.tab-button {
  padding: 0.75rem 1.25rem;
  font-weight: 600;
  color: #a3763e;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.tab-button:hover {
  background-color: #e5e7eb;
}

.active-tab {
  background-color: #fed7aa;
  color: #a3763e;
}

.tab-content {
  padding: 1.5rem;
}
</style>
