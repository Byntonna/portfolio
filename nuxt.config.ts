// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'Александр Грудин — проекты и немного обо мне',
      meta: [
        { name: 'description', content: 'Меня зовут Александр Грудин. Учусь на программной инженерии в ОмГТУ, разрабатываю сайты и приложения. Здесь рассказываю о своих проектах.' },
        { name: 'author', content: 'Александр Грудин' },
        { name: 'theme-color', content: '#FCFCFB' },
        { property: 'og:title', content: 'Александр Грудин — проекты и немного обо мне' },
        { property: 'og:description', content: 'Учусь на программной инженерии в ОмГТУ, разрабатываю сайты и приложения. Здесь рассказываю о своих проектах.' },
        { property: 'og:site_name', content: 'Александр Грудин' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru_RU' },
        { name: 'twitter:card', content: 'summary' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '16x16 32x32 48x48' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ]
    }
  },
  experimental: {
    prerenderErrorPages: true
  }
})
