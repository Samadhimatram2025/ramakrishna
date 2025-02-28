<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    gsap.from('.content', { opacity: 0, y: 50, duration: 1.2, ease: 'power2.out', delay: 0.3 })
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-saffron-100/80 to-white/80 flex flex-col items-center justify-center text-center p-8 pt-36 relative z-10">
    <div class="content">
      <h1 class="text-4xl font-bold text-saffron-900 mb-6">Building Project</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold text-saffron-800 mb-4">Resolution</h2>
          <p class="text-lg text-gray-600 text-left leading-relaxed">The Ramakrishna Math and Mission has passed a resolution for a fully fledged centre to be established in Johannesburg to further give effect to its purpose of serving and uplifting society. The address of the development is: Portion 268 Blandford Road (618 of the farm Olievenhoutpoort no 196 IQ, Township Name: Noordhang Ext.90)</p>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold text-saffron-800 mb-4">Capabilities</h2>
          <ul class="list-disc text-lg text-gray-600 pl-4">
            <li class="leading-relaxed text-left">A track record in delivering infrastructural and humanitarian projects.</li>
            <li class="leading-relaxed text-left">Strong governance and oversight by the Trustees and professional volunteers.</li>
            <li class="leading-relaxed text-left">Projects are managed by the Centre’s professional team which includes highly skilled administrators, project managers, legal and accounting personnel.</li>
            <li class="leading-relaxed text-left">Upliftment of the communities and provides humanitarian aid on an ongoing basis to various organisations.</li>
            <li class="leading-relaxed text-left">Promoting peace and universal acceptance of cultures.</li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold text-saffron-800 mb-4">New Land & Facilities</h2>
          <p class="text-lg text-gray-600 mb-4 text-left leading-relaxed">The Centre has acquired new land to construct an ashram facility which will include:</p>
          <ul class="list-disc text-lg text-gray-600 pl-4">
            <li class="leading-relaxed text-left">A place of worship – The Temple</li>
            <li class="leading-relaxed text-left">Swami Vivekananda Skills Development Centre – For the purposes of conducting medical, skills-development, human excellence programmes and value-based education interventions.</li>
            <li class="leading-relaxed text-left">An administration building – supporting the welfare & humanitarian activities</li>
            <li class="leading-relaxed text-left">Residential facilities – For monks and professional volunteers</li>
            <li class="leading-relaxed text-left">Classrooms</li>
            <li class="leading-relaxed text-left">Parking</li>
          </ul>
          <p class="text-lg text-gray-600 mt-4 text-left leading-relaxed">The estimated cost of the facility is R50 million. We have successfully submitted our applications for the rezoning and environmental impact assessment to the respective local municipalities for approval.</p>
        </div>
      </div>
    </div>
    <NuxtLink to="/" class="mt-8 bg-saffron-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-saffron-700 transition-all duration-300">
      Back to Home
    </NuxtLink>
  </div>
</template>
