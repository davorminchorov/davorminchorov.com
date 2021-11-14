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
  },

  build: {
    extendRoutes: ((routes: any[]) => {
      routes.unshift({
        name: 'home',
        path: '/home',
        component: join(__dirname, 'pages/home.vue'),
      });
    }),
  }
});
