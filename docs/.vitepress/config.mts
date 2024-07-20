import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Aldair Aquino",
  description: "Senior Software Engineer",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
     /* { text: 'Examples', link: '/markdown-examples' }*/
    ],

    sidebar: [
      {
        text: 'Ultimas Entradas',
        items: [
          { text: 'Implementación de Google Cloud Task en Laravel Paso a Paso', link: '/2024/implementacion-de-google-cloud-task-en-laravel-paso-a-paso' },
          /*{ text: 'Runtime API Examples', link: '/api-examples' }*/
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base: "/aquinoaldair"
})
