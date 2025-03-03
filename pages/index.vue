<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  mounted() {
    gsap.from('.hero-image', { opacity: 0, duration: 1.5, ease: 'power2.out', delay: 0.3 })
    gsap.from('.hero-text', { y: 50, opacity: 0, duration: 1.2, ease: 'power2.out', delay: 0.6, stagger: 0.2 })
    gsap.to('.hero-button', { scale: 1.05, duration: 1, ease: 'elastic.out(1, 0.8)', repeat: -1, yoyo: true, delay: 1.5 })

    const isMobile = window.innerWidth <= 768;

    gsap.fromTo(
      '.sun',
      {
        top: '100vh',
        scale: 0.2,
        opacity: 0.2,
      },
      {
        top: isMobile ? '15%' : '20%', // Adjust top position for mobile
        scale: isMobile ? 1.0 : 1.5, // Adjust scale for mobile
        opacity: 0.8,
        duration: 5,
        ease: 'power2.inOut',
        onComplete: () => {
          gsap.to('.sun', {
            scale: 2.25,
            duration: 2,
            yoyo: true,
            repeat: -1,
            ease: 'power1.inOut'
          });
          gsap.to('.quote', {
            opacity: 1,
            fontWeight: 600,
            duration: 3,
            delay: 1,
            onComplete: () => {
              gsap.to('.quote', {
                opacity: 0,
                duration: 10,
              });
            }
          });
        }
      }
    );

    setTimeout(() => {
      console.log('GSAP Version:', gsap.version)
      this.autoScroll('.activities-container')
    }, 1000)
  },
  methods: {
    autoScroll(containerSelector) {
      const container = this.$el.querySelector(containerSelector)
      if (!container) {
        console.error(`Container not found: ${containerSelector}`)
        return
      }

      const inner = container.querySelector('.parallax-inner')
      if (!inner) {
        console.error('Inner container not found')
        return
      }

      const maxScroll = inner.scrollWidth - container.clientWidth
      console.log(`${containerSelector} - Container Width: ${container.clientWidth}, Inner Width: ${inner.scrollWidth}, Max Scroll: ${maxScroll}`)

      if (maxScroll <= 0) {
        console.warn('No scrolling needed - content fits. Forcing wider inner width.')
        inner.style.minWidth = `${container.clientWidth * 1.5}px`
        const newMaxScroll = inner.scrollWidth - container.clientWidth
        console.log(`${containerSelector} - Forced Max Scroll: ${newMaxScroll}`)
        if (newMaxScroll <= 0) return
      }

      let animation = gsap.to(inner, {
        x: -maxScroll,
        duration: 120,
        ease: 'none',
        repeat: -1,
        yoyo: true,
        onStart: () => console.log(`${containerSelector} - Auto-scroll started`),
        onComplete: () => console.log(`${containerSelector} - Auto-scroll cycle completed`)
      });

      container.addEventListener('mouseenter', () => animation.timeScale(0));
      container.addEventListener('mouseleave', () => animation.timeScale(1));

      const scrollAmount = 200;
      let timeoutId;

      const scrollLeft = () => {
        animation.pause();
        gsap.to(inner, {
          x: "+=" + scrollAmount,
          duration: 0.3,
          onComplete: () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
              animation.resume();
            }, 1000);
          }
        });
      };

      const scrollRight = () => {
        animation.pause();
        gsap.to(inner, {
          x: "-=" + scrollAmount,
          duration: 0.3,
          onComplete: () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
              animation.resume();
            }, 1000);
          }
        });
      };

      const leftArrow = this.$el.querySelector('.scroll-left');
      const rightArrow = this.$el.querySelector('.scroll-right');

      leftArrow.addEventListener('click', scrollLeft);
      rightArrow.addEventListener('click', scrollRight);
    }
  }
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section
  class="hero-section min-h-screen flex flex-col items-center justify-center text-center p-4 md:p-8 pt-16 md:pt-20 duration-500 relative z-10 bg-gradient-to-r from-saffron-100 to-saffron-50"
>
<h1
        class="hero-text text-4xl md:text-6xl font-extrabold text-saffron-900 mb-6 tracking-tight"
      >
        The Ramakrishna Centre of South Africa, Johannesburg
      </h1>
      <p
        class="hero-text text-xl md:text-2xl text-gray-600 max-w-3xl mb-8 leading-relaxed"
      >
        A Sub-Centre of the The Ramakrishna Centre of South Africa, Phoenix
      </p>
      <div class="hero-text space-x-4">
        <NuxtLink
          to="/about"
          class="hero-button bg-saffron-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-saffron-700 transition-all duration-300"
        >
          Learn More
        </NuxtLink>
        <NuxtLink
          to="/building-project"
          class="hero-button bg-white text-saffron-800 px-8 py-3 rounded-full font-semibold border-2 border-saffron-800 shadow-lg hover:bg-saffron-100 transition-all duration-300"
        >
          Building Project
        </NuxtLink>
      </div>

      <!-- Sun Animation -->
<p class="quote text-xs text-gray-700 max-w-3xl mt-8 text-center opacity-0 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-4" style="font-weight: normal;">
        The sun can give heat and light to the whole world, but he cannot do so when the clouds shut out his rays. Similarly as long as egotism veils the heart, God cannot shine upon it.
      </p>
      <div class="sun absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-50 z-0">
        <div class="rays"></div>
      </div>
  </section>
    
      

    <!-- Holy Trinity Static Cards -->
    <section class="py-16 bg-gradient-to-b from-saffron-100/80 to-white/80 relative z-10">
      <h2 class="text-3xl font-bold text-saffron-900 text-center mb-8">Our Holy Trinity</h2>
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <NuxtLink to="/sri-ramakrishna" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img src="/holy-trinity-1.jpg" alt="Sri Ramakrishna" class="w-full h-48 object-contain rounded-lg mb-4" />
          <h3 class="text-xl font-semibold text-saffron-800 text-center">Sri Ramakrishna</h3>
          <p class="text-gray-600 text-center">Learn more about the great saint.</p>
        </NuxtLink>
        <NuxtLink to="/sri-sarada-devi" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img src="/holy-trinity-2.jpg" alt="Sri Sarada Devi" class="w-full h-48 object-contain rounded-lg mb-4" />
          <h3 class="text-xl font-semibold text-saffron-800 text-center">Sri Sarada Devi</h3>
          <p class="text-gray-600 text-center">Discover the life of the Holy Mother.</p>
        </NuxtLink>
        <NuxtLink to="/swami-Vivekananda" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img src="/holy-trinity-3.jpg" alt="Swami Vivekananda" class="w-full h-48 object-contain rounded-lg mb-4" />
          <h3 class="text-xl font-semibold text-saffron-800 text-center">Swami Vivekananda</h3>
          <p class="text-gray-600 text-center">Explore the legacy of the disciple.</p>
        </NuxtLink>
      </div>
    </section>

    <!-- Recent Activities Parallax Scrollbar -->
    <section class="py-16 bg-gradient-to-b from-saffron-100/80 to-white/80 relative z-10">
      <h2 class="text-3xl font-bold text-saffron-900 text-center mb-8">Recent Activities</h2>
      <div class="activities-container overflow-x-hidden whitespace-nowrap relative">
        <span class="scroll-left text-saffron-700 text-2xl font-semibold ml-4 opacity-75 absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer" style="z-index: 10; border-radius: 50%; border: 2px solid; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">←</span>
        <span class="scroll-right text-saffron-700 text-2xl font-semibold mr-4 opacity-75 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" style="z-index: 10; border-radius: 50%; border: 2px solid; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">→</span>
        <div class="parallax-inner inline-flex gap-6">
          <NuxtLink to="/activity1" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 parallax-item w-64">
            <img src="/january_2025.jpg" alt="January 2025 Welfare Distribution" class="w-full h-48 object-contain rounded-lg mb-4" />
            <h3 class="text-xl font-semibold text-saffron-800 whitespace-normal text-center">January 2025 Welfare Distribution</h3>
            <p class="text-gray-600 whitespace-normal text-center">Learn more about January 2025 Welfare Distribution.</p>
          </NuxtLink>
          <NuxtLink to="/activity2" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 parallax-item w-64">
            <img src="/december_2024.jpg" alt="December 2024 Welfare Distribution" class="w-full h-48 object-contain rounded-lg mb-4" />
            <h3 class="text-xl font-semibold text-saffron-800 whitespace-normal text-center">December 2024 Welfare Distribution</h3>
            <p class="text-gray-600 whitespace-normal text-center">Discover the details of December 2024 Welfare Distribution.</p>
          </NuxtLink>
          <NuxtLink to="/activity3" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 parallax-item">
            <img src="/november_2024.jpg" alt="November 2024 Distribution" class="w-full h-48 object-contain rounded-lg mb-4" />
            <h3 class="text-xl font-semibold text-saffron-800 whitespace-normal text-center">November 2024 Distribution</h3>
            <p class="text-gray-600 whitespace-normal text-center">Explore the impact of November 2024 Distribution.</p>
          </NuxtLink>
          <NuxtLink to="/activity4" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 parallax-item">
            <img src="/october_2024.jpg" alt="October 2024 Welfare Distribution" class="w-full h-48 object-contain rounded-lg mb-4" />
            <h3 class="text-xl font-semibold text-saffron-800 whitespace-normal text-center">October 2024 Welfare Distribution</h3>
            <p class="text-gray-600 whitespace-normal text-center">Experience the joy of October 2024 Welfare Distribution.</p>
          </NuxtLink>
          <NuxtLink to="/activity5" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 parallax-item">
            <img src="/october_2024.jpg" alt="Activity 5" class="w-full h-48 object-contain rounded-lg mb-4" />
            <h3 class="text-xl font-semibold text-saffron-800 whitespace-normal text-center">Activity 5</h3>
            <p class="text-gray-600 whitespace-normal text-center">Learn more about Activity 5.</p>
          </NuxtLink>
          <NuxtLink to="/activity6" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 parallax-item">
            <img src="/october_2024.jpg" alt="Activity 6" class="w-full h-48 object-contain rounded-lg mb-4" />
            <h3 class="text-xl font-semibold text-saffron-800 whitespace-normal text-center">Activity 6</h3>
            <p class="text-gray-600 whitespace-normal text-center">Learn more about Activity 6.</p>
          </NuxtLink>
          <NuxtLink to="/activity7" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 parallax-item">
            <img src="/october_2024.jpg" alt="Activity 7" class="w-full h-48 object-contain rounded-lg mb-4" />
            <h3 class="text-xl font-semibold text-saffron-800 whitespace-normal text-center">Activity 7</h3>
            <p class="text-gray-600 whitespace-normal text-center">Learn more about Activity 7.</p>
          </NuxtLink>
          <NuxtLink to="/activity8" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 parallax-item">
            <img src="/october_2024.jpg" alt="Activity 8" class="w-full h-48 object-contain rounded-lg mb-4" />
            <h3 class="text-xl font-semibold text-saffron-800 whitespace-normal text-center">Activity 8</h3>
            <p class="text-gray-600 whitespace-normal text-center">Learn more about Activity 8.</p>
          </NuxtLink>
          <NuxtLink to="/activity9" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 parallax-item">
            <img src="/october_2024.jpg" alt="Activity 9" class="w-full h-48 object-contain rounded-lg mb-4" />
            <h3 class="text-xl font-semibold text-saffron-800 whitespace-normal text-center">Activity 9</h3>
            <p class="text-gray-600 whitespace-normal text-center">Learn more about Activity 9.</p>
          </NuxtLink>
          <NuxtLink to="/activity10" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 parallax-item">
            <img src="/october_2024.jpg" alt="Activity 10" class="w-full h-48 object-contain rounded-lg mb-4" />
            <h3 class="text-xl font-semibold text-saffron-800 whitespace-normal text-center">Activity 10</h3>
            <p class="text-gray-600 whitespace-normal text-center">Learn more about Activity 10.</p>
          </NuxtLink>
          <NuxtLink to="/activity11" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 parallax-item">
            <img src="/october_2024.jpg" alt="Activity 11" class="w-full h-48 object-contain rounded-lg mb-4" />
            <h3 class="text-xl font-semibold text-saffron-800 whitespace-normal text-center">Activity 11</h3>
            <p class="text-gray-600 whitespace-normal text-center">Learn more about Activity 11.</p>
          </NuxtLink>
          <NuxtLink to="/activity12" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 parallax-item">
            <img src="/october_2024.jpg" alt="Activity 12" class="w-full h-48 object-contain rounded-lg mb-4" />
            <h3 class="text-xl font-semibold text-saffron-800 whitespace-normal text-center">Activity 12</h3>
            <p class="text-gray-600 whitespace-normal text-center">Learn more about Activity 12.</p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.sun {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(to right, yellow, orange);
  opacity: 0.5;
  z-index: 0;
}

.sun .rays {
  position: absolute;
  top: -30px;
  left: -30px;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 0, 0.1);
  border-radius: 50%;
  box-shadow: 0 0 50px 10px rgba(255, 255, 0, 0.2);
  z-index: -1;
}

.activities-container {
  position: relative;
  overflow-x: hidden;
  white-space: nowrap;
  width: 100%;
}

.parallax-inner {
  display: inline-flex;
  width: max-content;
}

.parallax-item {
  transition: transform 0.1s ease-out;
  width: 20rem;
}

.scroll-left {
  left: 0;
  cursor: pointer;
  user-select: none;
  z-index: 10;
  border-radius: 50%;
  border: 2px solid;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-right {
  right: 0;
  cursor: pointer;
  user-select: none;
  z-index: 10;
  border-radius: 50%;
  border: 2px solid;
  width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
}

.scroll-sign {
  pointer-events: none;
}

.hero-section {
  background-size: cover;
  background-position: center;
  opacity: 1;
}

@media (max-width: 768px) {
  .quote {
    opacity: 0;
    top: 25%;
    font-size: 0.8rem;
  }

  .sun {
    bottom: 15% !important;
    transform: translateX(-50%) scale(0.7);
  }
}
</style>
