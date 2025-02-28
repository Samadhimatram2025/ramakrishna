export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  ssr: true,
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap' }
      ],
      style: [
        {
          innerHTML: `body {
            background-image: url('/om.svg');
            background-repeat: repeat;
            background-size: cover;
            background-attachment: fixed;
            min-height: 100vh !important;
            height: 100%;
            width: 100%;
            background-position: center;
          }`
        },
        {
          innerHTML: `
          .about-navbar {
            background-color: #a3763e; /* Saffron color */
          }
          `
        }
      ]
    }
  },
  compatibilityDate: '2025-02-24',
  nitro: {
    preset: 'cloudflare-pages-static'
  }
})
