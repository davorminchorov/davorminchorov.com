import { join } from 'pathe'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  hooks: {
    'components:dirs'(dirs) {
      // Add ./components dir to the list
      dirs.push({
        path: join(__dirname, 'components'),
      });
    },
    'generate:extendRoutes'(routes) {

    },
  },

  build: {
    extendRoutes: ((routes: any[]) => {
      routes.unshift({
        name: 'blog',
        path: '/blog',
        component: join(__dirname, 'pages/blog.vue'),
      });
    }),
  }
});
